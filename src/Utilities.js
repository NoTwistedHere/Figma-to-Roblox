var CurrentNotification;

const Flags = {
    ForceUploadImages: false, // Skips image matching, upload is still overwritten by ImageUploadTesting
    ImageUploadTesting: false, 
    ImageUploadBoilerplate: {
        "path": "assets/18355701361",
        "revisionId": "1",
        "revisionCreateTime": "2024-07-06T04:49:52.260972600Z",
        "assetId": "18355701361",
        "displayName": "280271241_999080940999673_786787218521993595_n 1",
        "description": "Exported from Figma",
        "assetType": "Image",
        "creationContext": {
            "creator": {
                "userId": "7020899714"
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

    figma.notify(`Error: ` + Message, {timeout: 10000});
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