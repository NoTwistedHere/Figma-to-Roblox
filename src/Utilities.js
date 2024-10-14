var CurrentNotification;

const Flags = {
    ApplyAspectRatio: true, // True: Adds UIAspectRatioConstraint to Frames
    ExportVectors: true, // True: Attempts to export vectors
    ConvertOffsetToScale: true, // True: Converts Position Offset of all Child elements to Scale
    UseSelectionPositionRelativeToScene: false, // True: Will use the (x,y) position of the Upmost Group(s) (should be no.1); False: Set the Upmost Group(s) Position to (0,0)
    ForceUploadImages: false, // Skips image matching, upload is still overwritten by ImageUploadTesting
    ImageUploadTesting: false, 
    ImageUploadTestData: {
        "path": "assets/18355701361",
        "revisionId": "1",
        "revisionCreateTime": "2024-07-06T04:49:52.260972600Z",
        "assetId": "18355701361",
        "displayName": "Image 1",
        "description": "Exported from Figma",
        "assetType": "Image",
        "creationContext": {
            "creator": {
                "userId": "xxxxxxxxxxxx"
            }
        },
        "moderationResult": {
            "moderationState": "Approved"
        },
        "state": "Active"
    }
}

function QuickClose(Message) {
    if (CurrentNotification) CurrentNotification.cancel();

    figma.warn("Closing Plugin:", Message)
    figma.notify(`Error: ` + Message, {timeout: 5000});
    figma.closePlugin();

    throw new Error(Message);
}

function Notify(Message) {
    if (CurrentNotification) CurrentNotification.cancel();

    CurrentNotification = figma.notify(Message);
}

module.exports = {
    Flags,
    QuickClose,
    Notify
}