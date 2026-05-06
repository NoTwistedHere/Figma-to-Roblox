package main

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"mime/multipart"
	"sync"
	"time"

	"github.com/valyala/fasthttp"
)

var client *fasthttp.Client

const MAX_REQUEST_SIZE = 500 * 1024 * 1024
const MAX_REQUEST_BODY_SIZE = MAX_REQUEST_SIZE

func LogError(msg string, err error) {
	log.Printf("%s%s%s%s %s%s", TerminalColours["BgRed"], msg, TerminalColours["Default"], TerminalColours["FgRed"], err, TerminalColours["Default"])
}

func main() {
	client = &fasthttp.Client{
		MaxIdleConnDuration:      60 * time.Second,
		NoDefaultUserAgentHeader: true,
	}

	server := fasthttp.Server{
		Handler:            requestHandler,
		DisableKeepalive:   true,
		MaxRequestBodySize: MAX_REQUEST_BODY_SIZE,
		ReadBufferSize:     MAX_REQUEST_SIZE,
	}

	port := "10582" // DO NOT CHANGE!

	log.Printf("%sAttempting to listen on port %s (localhost:%s)%s", TerminalColours["FgGreen"], port, port, TerminalColours["Default"])

	if err := server.ListenAndServe(":" + port); err != nil {
		log.Fatalf("%sError in ListenAndServe: %s%s", TerminalColours["BgRed"], "aaaa", TerminalColours["Default"])
	}

}

func setCORSHeaders(ctx *fasthttp.RequestCtx) {
	ctx.Response.Header.Set(fasthttp.HeaderAccessControlAllowOrigin, "null")
	ctx.Response.Header.Set(fasthttp.HeaderAccessControlAllowHeaders, "k,p,Content-Type")
	ctx.Response.Header.Set(fasthttp.HeaderAccessControlAllowMethods, "POST")
	ctx.SetStatusCode(fasthttp.StatusOK)
}

func requestHandler(ctx *fasthttp.RequestCtx) {
	setCORSHeaders(ctx)

	if ctx.IsOptions() {
		return
	} else if !ctx.IsPost() {
		ctx.SetStatusCode(fasthttp.StatusBadRequest)
		return
	}

	headers := &ctx.Request.Header

	if headers.Peek("k") == nil {
		ctx.SetStatusCode(fasthttp.StatusBadRequest)
		return
	}

	ApiKey := string(headers.Peek("k"))

	var data RequestBody

	if err := json.Unmarshal(ctx.Request.Body(), &data); err != nil {
		LogError("Error in Decode:", err)
		ctx.SetStatusCode(fasthttp.StatusBadRequest)
		return
	} else if len(data.Files) == 0 {
		log.Printf("%sNo Files were passed..%s", TerminalColours["FgRed"], TerminalColours["Default"])
		ctx.SetStatusCode(fasthttp.StatusBadRequest)
		return
	}
	defer fasthttp.ReleaseRequest(&ctx.Request)

	var uploadType = "UserId"

	if data.Type == 1 {
		uploadType = "GroupId"
	}

	baseFormRequest := fmt.Sprintf(`{"assetType":"Image","displayName":"%s","description":"FtR","creationContext":{"creator":{"%s":%d}}}`, "%s", uploadType, data.Id)

	var wg sync.WaitGroup
	var imageResults = ""
	var AbortUpload bool = false

	log.Printf("Num Files: %d", len(data.Files))

	for i, fileData := range data.Files {
		name := fileData.Name
		finalFormRequest := fmt.Sprintf(baseFormRequest, name)

		var err error
		var b bytes.Buffer
		w := multipart.NewWriter(&b)

		// add req
		var fw1 io.Writer
		if fw1, err = w.CreateFormField("request"); err != nil {
			LogError("Error in CreateFormField:", err)
			return
		}

		if _, err = fw1.Write([]byte(finalFormRequest)); err != nil {
			LogError("Error in WriteFormField:", err)
			return
		}

		// add file
		var fw io.Writer
		if fw, err = w.CreateFormFile("fileContent", name); err != nil {
			LogError("Error in CreateFormField:", err)
			return
		}

		if _, err = fw.Write(fileData.Body); err != nil {
			LogError("Error in WriteFormField:", err)
			return
		}

		// end
		contentType := w.FormDataContentType()
		if err := w.Close(); err != nil {
			LogError("Error in Close FormData:", err)
			return
		}

		log.Printf("%sUploading image: %s (%d) %s", TerminalColours["FgCyan"], fileData.Name, i, TerminalColours["Default"])

		wg.Go(func() {
			if i != 0 {
				time.Sleep(time.Duration(i*18) * time.Second)
				if AbortUpload {
					return
				}
			}

			response, isErr := TryUpload(ApiKey, b, contentType)
			imageResults += response

			if i == 0 && isErr {
				AbortUpload = true
				log.Printf("%sInitial Image Upload failed, aborting..%s", TerminalColours["BgRed"], TerminalColours["Default"])
			}
		})
	}

	wg.Wait()
	ctx.SetStatusCode(fasthttp.StatusOK)
	ctx.SetBodyString(imageResults)
}

func TryUpload(ApiKey string, b bytes.Buffer, contentType string) (string, bool) {
	return FormatUploadResponse(makePOSTRequest(ApiKey, b.Bytes(), contentType))
}

func FormatUploadResponse(uploadBody string, uploadStatus int, uploadErr error) (string, bool) {
	var result = "b:" + uploadBody
	if uploadErr != nil {
		LogError("Error in makePOSTRequest:", uploadErr)
		result = "e:" + uploadErr.Error()
	} else if uploadBody == "" {
		result = "s:" + fmt.Sprint(uploadStatus)
	}

	return result + "\n", uploadErr != nil
}

func makePOSTRequest(ApiKey string, Body []byte, ContentType string) (response string, status int, error error) {
	req := fasthttp.AcquireRequest()
	defer fasthttp.ReleaseRequest(req)

	req.Header.SetMethod("POST")
	req.SetRequestURI("https://apis.roblox.com/assets/v1/assets")
	req.SetBody(Body)

	req.Header.Set("Content-Type", ContentType)
	req.Header.Set("x-api-key", ApiKey)
	req.Header.Set("Connection", "Keep-Alive")

	resp := fasthttp.AcquireResponse()
	requestErr := client.Do(req, resp)

	if requestErr != nil {
		log.Printf("%sError making request%s to \"%s%s%s\", got error:%s %s %s",
			TerminalColours["BgRed"], TerminalColours["Default"], TerminalColours["FgCyan"],
			req.URI(),
			TerminalColours["Default"],
			TerminalColours["FgRed"],
			requestErr,
			TerminalColours["Default"],
		)
		return "", fasthttp.StatusInternalServerError, requestErr
	}

	body := resp.Body()
	uploadResponse := UploadOperation{}
	err := json.Unmarshal(body, &uploadResponse)

	if err != nil {
		log.Printf("%sError unmarshalling data:%s%s %s%s, data:%s %s %s",
			TerminalColours["BgRed"], TerminalColours["Default"], TerminalColours["FgRed"],
			err,
			TerminalColours["Default"], TerminalColours["FgCyan"],
			string(body),
			TerminalColours["Default"],
		)
		return "", fasthttp.StatusInternalServerError, errors.New("Error while uploading data")
	}

	if uploadResponse.Errors != nil {
		defer fasthttp.ReleaseRequest(req)
		return "", fasthttp.StatusInternalServerError, errors.New("Failed to upload: " + (*uploadResponse.Errors)[0].Message)
	}

	opBody, opStatus, opErr := initiateAwaitUpload(uploadResponse, ApiKey)

	log.Printf("%sbody: %s %s", TerminalColours["FgCyan"], opBody, TerminalColours["Default"])

	return opBody, opStatus, opErr
}
