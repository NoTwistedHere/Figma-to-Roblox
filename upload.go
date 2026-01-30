package main

import (
	"encoding/json"
	"errors"
	"log"
	"time"

	"github.com/valyala/fasthttp"
)

const maxOperationCheckAttempts = 20

func initiateAwaitUpload(data UploadOperation, apiKey string) (response string, status int, error error) {
	operationURL := "https://apis.roblox.com/assets/v1/operations/" + *data.OperationId

	req := fasthttp.AcquireRequest()
	req.SetRequestURI(operationURL)
	req.Header.Set("x-api-key", apiKey)

	return awaitUploadOperation(req, 1)
}

func awaitUploadOperation(req *fasthttp.Request, attempts int) (response string, status int, error error) {
	if attempts >= maxOperationCheckAttempts {
		//return "", fasthttp.StatusInternalServerError, errors.New("max attempts exceeded")
		return "op-" + string(req.URI().LastPathSegment()), fasthttp.StatusGatewayTimeout, nil
	}

	if attempts == 1 {
		time.Sleep(25 * time.Second)
	} else {
		time.Sleep(time.Duration(attempts) * time.Minute)
	}

	resp := fasthttp.AcquireResponse()
	reqErr := client.Do(req, resp)

	if reqErr != nil {
		return "", fasthttp.StatusInternalServerError, reqErr
	}

	data := UploadOperation{}
	jsonErr := json.Unmarshal(resp.Body(), &data)

	defer fasthttp.ReleaseResponse(resp)
	if jsonErr != nil {
		return "", fasthttp.StatusInternalServerError, jsonErr
	}

	log.Printf("Response from \"%s\": %s", req.URI(), string(resp.Body()))

	if data.Response != nil { // Likely Success
		defer fasthttp.ReleaseRequest(req)
		return data.Response.AssetId, fasthttp.StatusOK, nil
	} else if data.Code != nil {
		defer fasthttp.ReleaseRequest(req)
		return "", 512, errors.New(*data.Code)
	} else if data.Errors != nil {
		defer fasthttp.ReleaseRequest(req)

		if (*data.Errors)[0].Message == "" {
			(*data.Errors)[0].Message = "{No Error From Roblox}"
		}

		return "", fasthttp.StatusInternalServerError, errors.New((*data.Errors)[0].Message)
	}

	return awaitUploadOperation(req, attempts+1)
}
