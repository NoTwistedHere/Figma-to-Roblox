const FontStyle = {
    ["Thin"]: {
        Weight: 100,
        Style: "Normal",
    },
    ["Extra Light"]: {
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
    ["Semi Bold"]: {
        Weight: 600,
        Style: "Normal",
    },
    ["Bold"]: {
        Weight: 700,
        Style: "Normal",
    },
    ["Extra Bold"]: {
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
    ["Extra Light Italic"]: {
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
    ["Semi Bold Italic"]: {
        Weight: 600,
        Style: "Italic",
    },
    ["Bold Italic"]: {
        Weight: 700,
        Style: "Italic",
    },
    ["Extra Bold Italic"]: {
        Weight: 800,
        Style: "Italic",
    },
    ["Black Italic"]: {
        Weight: 900,
        Style: "Italic",
    },
}

/*

// Fetch marketplace fonts
fetch("https://apis.roblox.com/toolbox-service/v1/marketplace/73?limit=800&includeOnlyVerifiedCreators=true")
    .then(res => res.json())
    .then(res => {
        var AssetIds = [];
        res.data.forEach(e => {
            AssetIds.push(e.id);
        });

        var Fonts = "";

        fetch("https://apis.roblox.com/toolbox-service/v1/items/details?assetIds=" + AssetIds.join(","))
            .then(res => res.json())
            .then(res => {
                res.data.forEach(Font => {

                    // Might add more information, but for now (name -> id) is sufficient for font URL
                    Fonts += `    ["${Font.asset.name}"]: ${Font.asset.id},\n`;
                });

                console.log(Fonts);
            }
        );
    }
);

*/
const MarketplaceFonts = {
    ["Mukta"]: 12187365559,
    ["Mulish"]: 12187372629,
    ["Damion"]: 12187607722,
    ["Cairo"]: 12187377099,
    ["Noto Serif SC"]: 12187376739,
    ["Tangerine"]: 12187376545,
    ["Montserrat"]: 11702779517,
    ["Roboto Slab"]: 12187368625,
    ["Barlow"]: 12187372847,
    ["Noto Sans"]: 12187370747,
    ["Prompt"]: 12187607287,
    ["Tajawal"]: 12187377588,
    ["Hind"]: 12187361116,
    ["Bungee Inline"]: 12187370000,
    ["Are You Serious"]: 12187363616,
    ["Rubik Marker Hatch"]: 12187367066,
    ["Rajdhani"]: 12187375422,
    ["Sono"]: 12187374537,
    ["Rubik"]: 12187365977,
    ["Kings"]: 12187371622,
    ["Rubik Burned"]: 12187363148,
    ["Raleway"]: 11702779240,
    ["Bungee Shade"]: 12187367666,
    ["Fuzzy Bubbles"]: 11322590111,
    ["Noto Serif HK"]: 12187366846,
    ["Rubik Maze"]: 12187366475,
    ["IBM Plex Sans JP"]: 12187364147,
    ["Monofett"]: 12187606783,
    ["Unica One"]: 12187364842,
    ["Noto Serif JP"]: 12187369639,
    ["Parisienne"]: 12187361943,
    ["Open Sans"]: 11598121416,
    ["Sedgwick Ave Display"]: 12187376357,
    ["Barrio"]: 12187371991,
    ["Finger Paint"]: 12187375716,
    ["Eater"]: 12187372382,
    ["Caesar Dressing"]: 12187368843,
    ["Work Sans"]: 12187373327,
    ["Playfair Display"]: 12187374765,
    ["Kanit"]: 12187373592,
    ["Hind Siliguri"]: 12187361378,
    ["Rubik Iso"]: 12187362120,
    ["Arimo"]: 16658254058,
    ["Lobster"]: 8836875837,
    ["PT Serif"]: 12187606624,
    ["Silkscreen"]: 12187371840,
    ["Italianno"]: 12187374273,
    ["Shadows Into Light"]: 12187607493,
    ["Blaka"]: 12187365104,
    ["Codystar"]: 12187363887,
    ["Noto Serif TC"]: 12187368093,
    ["Yellowtail"]: 12187373881,
    ["Nosifer"]: 12187377325,
    ["Pacifico"]: 12187367362,
    ["La Belle Aurore"]: 12187607116,
    ["Marhey"]: 12187364648,
    ["Caveat"]: 12187369802,
    ["Frijole"]: 12187375194,
    ["Great Vibes"]: 12187375958,
    ["Sono Monospace"]: 12187362578,
    ["M PLUS Rounded 1c"]: 12188570269,
    ["Builder Extended"]: 16658237174,
    ["Monoton"]: 12187374098,
    ["Nunito Sans"]: 12187363368,
    ["Lato"]: 11598289817,
    ["Teko"]: 12187376174,
    ["Builder Mono"]: 16658246179,
    ["Rye"]: 12187372175,
    ["Dancing Script"]: 8764312106,
    ["Audiowide"]: 12187360881,
    ["Irish Grover"]: 12187376910,
    ["Nothing You Could Do"]: 12187367901,
    ["Faster One"]: 12187370928,
    ["Akronim"]: 12187368317,
    ["Fira Sans"]: 12187374954,
    ["Poppins"]: 11702779409,
    ["Libre Baskerville"]: 12187365769,
    ["Nanum Gothic"]: 12187361718,
    ["Lora"]: 12187366657,
    ["Rubik Wet Paint"]: 12187369046,
    ["Quicksand"]: 12187371324,
    ["Noto Sans HK"]: 12187362892,
    ["Inter"]: 12187365364,
    ["PT Sans"]: 12187606934,
    ["Builder Sans"]: 16658221428
};

function getGradientRotation(gradientTransform) {
    const angle = Math.atan2(gradientTransform[0][0], gradientTransform[0][1]) * 180 / Math.PI;

    return angle >= 0 ? angle : angle + 360;
}

module.exports = {
    getGradientRotation: getGradientRotation,
    // Enums
    FontStyle: FontStyle,
    MarketplaceFonts: MarketplaceFonts,

    TextXAlignments: [
        "LEFT",
        "RIGHT",
        "CENTER",
    ],
    TextYAlignments: [
        "TOP",
        "CENTER",
        "BOTTOM",
    ],
    LineJoinModes: [
        "ROUND",
        "BEVEL",
        "MITER"
    ],
    TextTruncate: [
        // There is 3 options in roblox but only 2 in figma
        "NONE",
        "", // This is the Ending option in roblox
        "ENDING" // This is the Split Word option in roblox
    ],
    FillDirection: [
        "HORIZONTAL",
        "VERTICAL"
    ],
    HorizontalAlignment: [
        "CENTER",
        "LEFT",
        "RIGHT"
    ],
    VerticalAlignment: [
        "CENTER",
        "TOP",
        "BOTTOM"
    ],
    AutomaticCanvasSize: [
        "NONE",
        "X",
        "Y",
        "XY",
    ],
    ScrollingDirection: [
        "NONE",
        "X",
        "Y"
    ],
    ScrollBarInset: [
        "NONE",
        "SCROLLBAR",
        "ALWAYS"
    ],
    ApplyStrokeMode: [
        "Contextual",
        "Border"
    ],
    BorderStrokePosition: [
        "OUTSIDE",
        "CENTER",
        "INSIDE"
    ]
}