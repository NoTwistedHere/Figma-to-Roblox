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

	_ "github.com/joho/godotenv/autoload"
	"github.com/valyala/fasthttp"
)

var client *fasthttp.Client

func main() {
	client = &fasthttp.Client{
		MaxIdleConnDuration:      60 * time.Second,
		NoDefaultUserAgentHeader: true,
	}

	server := fasthttp.Server{
		Handler:          requestHandler,
		DisableKeepalive: true,
	}

	port := "10582" // DO NOT CHANGE!

	log.Printf("Attempting to listen on port %s (localhost:%s)", port, port)

	if err := server.ListenAndServe(":" + port); err != nil {
		log.Fatalf("Error in ListenAndServe: %s", err)
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
		log.Printf("Error in Decode: %s", err)
		ctx.SetStatusCode(fasthttp.StatusBadRequest)
		return
	} else if len(data.Files) == 0 {
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

	for i, fileData := range data.Files {
		name := fileData.Name
		finalFormRequest := fmt.Sprintf(baseFormRequest, name)

		var err error
		var b bytes.Buffer
		w := multipart.NewWriter(&b)

		// add req
		var fw1 io.Writer
		if fw1, err = w.CreateFormField("request"); err != nil {
			log.Printf("Error in CreateFormField: %s", err)
			return
		}

		if _, err = fw1.Write([]byte(finalFormRequest)); err != nil {
			log.Printf("Error in WriteFormField: %s", err)
			return
		}

		// add file
		var fw io.Writer
		if fw, err = w.CreateFormFile("fileContent", name); err != nil {
			log.Printf("Error in CreateFormFile: %s", err)
			return
		}

		if _, err = fw.Write(fileData.Body); err != nil {
			log.Printf("Error in WriteFormFile: %s", err)
			return
		}

		// end
		contentType := w.FormDataContentType()
		if err := w.Close(); err != nil {
			log.Printf("Error in Close FormData: %s", err)
		}
		wg.Add(1)

		if i == 1 {
			response, err := TryUpload(ApiKey, b, contentType)
			imageResults += response

			wg.Done()
			if err == false {
				break
			}
		} else {
			go func() {
				time.Sleep(time.Duration(i*20) * time.Second)
				response, _ := TryUpload(ApiKey, b, contentType)
				imageResults += response

				wg.Done()
			}()
		}
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
		log.Printf("Error in makePOSTRequest: %s", uploadErr.Error())
		result = "e:" + uploadErr.Error()
	} else if uploadBody == "" {
		result = "s:" + fmt.Sprint(uploadStatus)
	}

	return result + "\n", uploadErr == nil
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
		log.Printf("Error making request to \"%s\": %s", req.URI(), requestErr)
		return "", fasthttp.StatusInternalServerError, requestErr
	}

	body := resp.Body()
	uploadResponse := UploadOperation{}
	err := json.Unmarshal(body, &uploadResponse)

	if err != nil {
		log.Printf("Error unmarshalling data: %s, data: %s", err, string(body))
		return "", fasthttp.StatusInternalServerError, errors.New("Error while uploading data")
	}

	if uploadResponse.Errors != nil {
		defer fasthttp.ReleaseRequest(req)
		return "", fasthttp.StatusInternalServerError, errors.New("Failed to upload: " + (*uploadResponse.Errors)[0].Message)
	}

	opBody, opStatus, opErr := initiateAwaitUpload(uploadResponse, ApiKey)

	log.Printf("body: %s", opBody)

	return opBody, opStatus, opErr
}
