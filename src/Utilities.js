var CurrentNotification;

var Flags = {
    ApplyAspectRatio: false, // True: Adds UIAspectRatioConstraint to Frames
    ExportVectors: false, // True: Attempts to export vectors (not for release)
    ExportVectorsAsImage: true, // True: Exports vectors as an image
    ConvertOffsetToScale: true, // True: Converts Position Offset of all Child elements to Scale
    UseSelectionPositionRelativeToScene: true, // True: Will use the (x,y) position of the Upmost Group(s) (should be no.1); False: Set the Upmost Group(s) Position to (0,0) !! note: named "Recentre" !!
    ScrollFrame_ScaleDominantAxis: true, // True: Only scales the dominant axis for elements of scrolling frames (in a list, only the Y axis will be scaled, X will remain using offset)
    TextSizeAdjustment: 1.05, // True: Adjusts the text size (of exported text) to be more accurately match what is seen in figma - why is this even needed, but if you do find yourself needing to adjust/remove I would love to know why & your use case
    DetectAnchorPoint: false, // Will set AnchorPoint to Left/Top, Centre or Right/Bottom
    TextScaled: false, // Enables TextScaled on TextLabels (should be done on a per basis)
    GeneratePaths: false, // !! TODO !! Not Implemented Yet - Creates a ModuleScript with all Prefixed elements (WIP)
    IgnoreInvisible: true, // Will skip over (/ignore) invisible elements
    OffsetFromScale: false, // Allows for example, a frame in the bottom right of the screen to have a UDim2 Scale + Offset Position of (1, -25, 1, -25)
    GroupBackgroundFrameName: "background", // The name to look for to convert Groups into Frames
    ReuploadStuckImages: false, // Intended when images are taking a long time to get through moderation
    AwaitModeration: true, // True: Waits for all images to successfully pass moderation before exporting, False: exports when all images have been successfully uploaded
    IgnoreImageExporting: true, // Only applies when UploadImages setting is disabled, allows for Images (including Buttons) to be exported without an image

    // Debugging
    ForceUploadImages: false, // Skips image matching (ignoring cached ids), upload is still overwritten by ImageUploadTesting
    ImageUploadTesting: false, 
    ImageUploadTestData: {
        "path": "assets/18355701361",
        "revisionId": "1",
        "revisionCreateTime": "2024-07-06T04:50:20",
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

    console.warn("Closing Plugin:", Message)
    figma.notify(`Error: ` + Message, {timeout: 5000});
    figma.closePlugin();
    alert(Message)

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