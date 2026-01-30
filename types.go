package main

import (
	"encoding/json"
	"fmt"
)

type UploadModerationResult struct {
	ModerationState string `json:"moderation_state"` // Approved, Reviewing, Denied
}

type UploadResponse struct {
	AssetId          string                 `json:"assetId"`
	ModerationResult UploadModerationResult `json:"moderationResult"`
	State            string                 `json:"state"`
	//assetType string
	//description string
	//displayName string
	//path string
	//revisionId string
	//revisionCreateTime string
}

type RobloxError struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

type UploadOperation struct {
	Path        *string         `json:"path"`
	OperationId *string         `json:"operationId"`
	Done        *bool           `json:"done"`
	Response    *UploadResponse `json:"response"`
	Code        *string         `json:"code"`    // Something went wrong (e.g. PERMISSION_DENIED)
	Message     *string         `json:"message"` // Something went wrong
	Errors      *[]RobloxError  `json:"errors"`
}

type RequestFile struct {
	Name string `form:"filename"`
	Body []byte `form:"fileContent,Content-Type:image/png"`
}

func (n *RequestFile) UnmarshalJSON(buf []byte) error {
	tmp := []interface{}{&n.Name, &n.Body}
	wantLen := len(tmp)
	if err := json.Unmarshal(buf, &tmp); err != nil {
		return err
	}
	if g, e := len(tmp), wantLen; g != e {
		return fmt.Errorf("wrong number of fields in RequestFile: %d != %d", g, e)
	}

	return nil
}

type RequestBody struct {
	Id    int
	Type  int
	Files []RequestFile
}

func (n *RequestBody) UnmarshalJSON(buf []byte) error {
	tmp := []interface{}{&n.Id, &n.Type, &n.Files}
	wantLen := len(tmp)
	if err := json.Unmarshal(buf, &tmp); err != nil {
		return err
	}
	if g, e := len(tmp), wantLen; g != e {
		return fmt.Errorf("wrong number of fields in RequestBody: %d != %d", g, e)
	}

	return nil
}
