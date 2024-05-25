const Fonts = {
    ["Thin"]: {
        Weight: 100,
        Style: "Normal",
    },
    ["ExtraLight"]: {
        Weight: 200,
        Style: "Normal",
    },
    ["Light"]: {
        Weight: 300,
        Style: "Normal",
    },
    ["Regular"]: {
        Weight: 400,
        Style: "Normal",
    },
    ["Medium"]: {
        Weight: 500,
        Style: "Normal",
    },
    ["SemiBold"]: {
        Weight: 600,
        Style: "Normal",
    },
    ["Bold"]: {
        Weight: 700,
        Style: "Normal",
    },
    ["ExtraBold"]: {
        Weight: 800,
        Style: "Normal",
    },
    ["Black"]: {
        Weight: 900,
        Style: "Normal",
    },
    ["Thin Italic"]: {
        Weight: 100,
        Style: "Italic",
    },
    ["ExtraLight Italic"]: {
        Weight: 200,
        Style: "Italic",
    },
    ["Light Italic"]: {
        Weight: 300,
        Style: "Italic",
    },
    ["Italic"]: { // Regular Italic
        Weight: 400,
        Style: "Italic",
    },
    ["Medium Italic"]: {
        Weight: 500,
        Style: "Italic",
    },
    ["SemiBold Italic"]: {
        Weight: 600,
        Style: "Italic",
    },
    ["Bold Italic"]: {
        Weight: 700,
        Style: "Italic",
    },
    ["ExtraBold Italic"]: {
        Weight: 800,
        Style: "Italic",
    },
    ["Black Italic"]: {
        Weight: 900,
        Style: "Italic",
    },
}

const LineJoinModes = [
    "ROUND",
    "BEVEL",
    "MITER"
]

const TextXAlignments = [
    "LEFT",
    "RIGHT",
    "CENTER",
]

const TextYAlignments = [
    "TOP",
    "CENTER",
    "BOTTOM",
]

const TextTruncate = [
    "ENDING",
    "NONE",
    // There is 3 options in roblox but only 2 in figma?
]

function getGradientRotation(gradientTransform) {
    const angle = Math.atan2(gradientTransform[0][0], gradientTransform[0][1]) * 180 / Math.PI;

    return angle >= 0 ? angle : angle + 360;
}

module.exports = {
    getGradientRotation: getGradientRotation,
    TextXAlignments: TextXAlignments,
    TextYAlignments: TextYAlignments,
    LineJoinModes: LineJoinModes,
    TextTruncate: TextTruncate,
    Fonts: Fonts
}