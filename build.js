(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const FontStyle = {
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

/*

fetch("https://apis.roblox.com/toolbox-service/v1/marketplace/73?limit=800&includeOnlyVerifiedCreators=true")
    .then(res => res.json())
    .then(res => {
        var AssetIds = [];
        res.data.forEach(e => {
            AssetIds.push(e.id);
        });

        var Fonts = "";

        console.log("Aquire Info URL:", "https://apis.roblox.com/toolbox-service/v1/items/details?assetIds=" + AssetIds.join(","));
    
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
    // There is 3 options in roblox but only 2 in figma
    "NONE",
    "", // This is the Ending option in roblox
    "ENDING" // This is the Split Word option in roblox
]

const FillDirection = [
    "HORIZONTAL",
    "VERTICAL"
]

const HorizontalAlignment = [
    "CENTER",
    "LEFT",
    "RIGHT"
]

const VerticalAlignment = [
    "CENTER",
    "TOP",
    "BOTTOM"
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
    FillDirection: FillDirection,
    HorizontalAlignment: HorizontalAlignment,
    VerticalAlignment: VerticalAlignment,
    FontStyle: FontStyle,
    MarketplaceFonts: MarketplaceFonts
}
},{}],2:[function(require,module,exports){
const Conversions = require("./Conversions");
const { Flags, QuickClose } = require("./Utilities");

var ImagesRemaining = 0;
var ImageExports = {};
var Settings = {
    //ApiKey: "",
    DefaultExport: {
        format: "PNG",
        contentsOnly: true,
        constraint: {
            type: "SCALE",
            value: 2
        }
    },
    ApplyAspectRatio: false,
    ExportVectors: true,
    ApplyZIndex: true,
};

function ConvertFill(Fill, Object) {
    var Transparency = 0;
    var Color3 = {};

    switch (Fill.type) {
        case "SOLID":
            Transparency = Fill.opacity;
            Color3 = {
                R: Fill.color.r,
                G: Fill.color.g,
                B: Fill.color.b,
            };

            break;
        case "GRADIENT_LINEAR":
            Transparency = Fill.opacity;
            Color3 = { R: 1, G: 1, B: 1 };

            Object.Children.push({
                Class: "UIGradient",
                Enabled: Fill.visible,
                Rotation: -(Conversions.getGradientRotation(Fill.gradientTransform) - 90),
                Offset: { // TODO?
                    X: 0,
                    Y: 0
                },
                Color: Fill.gradientStops.map((Stop) => {
                    return {
                        Colour: {
                            R: Stop.color.r,
                            G: Stop.color.g,
                            B: Stop.color.b
                        },
                        TimePosition: Stop.position
                    }
                }),
                Transparency: Fill.gradientStops.map((Stop) => {
                    return {
                        Transparency: 1 - Stop.color.a,
                        TimePosition: Stop.position
                    }
                })
            })

            break;
    }

    return [Color3, Transparency];
}

async function ExportImage(Node, Properties, CustomExport) {
    const Name = Node.name;

    console.log("exporting image");

    let AssetId = Node.getPluginData("AssetId");
    var UploadId = Node.getPluginData("OperationId");

    if (!Flags.ForceUploadImages) {
        if (AssetId) {

            // Check if image hashes match?

            if (Node.getPluginData("ImageHash") == Properties._ImageHash) {
                console.log("Image has not changed, using Image:", AssetId)

                Properties.Image = `rbxassetid://${AssetId}`

                return;
            }
        } else if (UploadId) {
            // try fetching before attempting to re-upload

            console.log("Image was uploaded, checking Operation:", UploadId)

            figma.ui.postMessage({
                type: "CheckOperation",
                data: {
                    Id: UploadId
                }
            })

            return UploadId
        }
    }

    console.log(AssetId, UploadId)

    UploadId = Node.id // yes dw this is meant to be above the check

    if (!UploadId) QuickClose("Node has no id!?")

    Node.setPluginData("AssetId", "");
    Node.setPluginData("OperationId", "");

    //Properties.UploadId = UploadId;

    ImagesRemaining += 1
    Properties.Image = `{OP-${UploadId}}`
    if (Properties._ImageHash) Node.setPluginData("ImageHash", Properties._ImageHash);

    Node.exportAsync(CustomExport || Settings.DefaultExport).then(Bytes => {
        const Format = (CustomExport ? CustomExport.format : "PNG").toLowerCase();
        var IgnoreUpload = false;

        // for (var i = 0; i < ImageExports.length; i++) {
        //     if (ImageExports[i].Bytes == Bytes) {
        //         IgnoreUpload = true;
        //         UploadId = ImageExports[i].UploadId
        //     };
        // }

        if (!ImageExports[UploadId]) {
            ImageExports[UploadId] = {
                Node: Node,
                Properties: Properties,
                Bytes: Bytes, // Uint8Array
                UploadId: UploadId
            }
        }

        console.log("Exported Image bytes:", Bytes, UploadId);

        if (Flags.ImageUploadTesting) {
            // Test post image upload with template data
            UpdateImage({id: UploadId, data: Flags.ImageUploadBoilerplate});
        } else if (!IgnoreUpload) figma.ui.postMessage({
            type: "UploadImage",
            data: {
                Data: Bytes,
                Id: UploadId,
                Name: Name,
                Format: Format
            }
        })
    })

    return UploadId
}

function UpdateImage(msg) {
    console.log("Got Uploaded Image:", msg)
    var ImageInfo = ImageExports[msg.id];

    if (!ImageInfo) {
        figma.notify(`Unable to find Image Node "${msg.id}" (check console for more info)`);
        console.warn(`Failed to find Image Node "${msg.id}":`, msg);
        return;
    } else if (typeof(msg.data) == "string") {
        //ImageInfo.Node.setPluginData("OperationId", "");
        figma.notify(`Failed to upload Image Node "${msg.id}": ${msg.data}`);
        console.warn(`Failed to upload Image Node "${msg.id}":`, msg);
        return;
    }
    
    let ModerationResult = msg.data.moderationResult

    if (ModerationResult && (ModerationResult.moderationState != "Approved" && ModerationResult.moderationState != "MODERATION_STATE_APPROVED")) {
        ImageInfo.Node.setPluginData("OperationId", "");
        figma.notify(`Image Element ${msg.id} failed moderation (check console for more info)`);
        console.warn(`Image Element ${msg.id} failed moderation:`, ModerationResult);
        return;
    }

    ImageInfo.Node.setPluginData("AssetId", msg.data.assetId);
    ImageInfo.Properties.Image = "rbxassetid://" + msg.data.assetId;

    ImagesRemaining -= 1
    console.log("Updating Image:", ImageInfo);
    console.log("Images Remaning:", ImagesRemaining);
}

function UpdateOperationId(msg) {
    console.log("Got Image retreived:", msg);
    var ImageInfo = ImageExports[msg.id];

    if (!ImageInfo) {
        figma.notify(`Unable to find Image Node "${msg.id}" (check console for more info)`);
        console.warn(`Failed to find Image Node "${msg.id}":`, msg);
        return;
    }

    ImageInfo.Node.setPluginData("OperationId", msg.data);
}

function GetImageFromOperation(OperationId) {
    return ImageExports[OperationId]
}

function IsDone() {
    return ImagesRemaining == 0
}

const PropertyTypes = {
    ["fills"]: (Value, Object, Node) => {
        if (Value.length > 1 || Value == figma.mixed) {
            return console.warn(`Frame ${Object.Name} cannot have more than 1 fill`);
        } else if (Value.length === 0) {
            Object.BackgroundTransparency = 1;
            return;
        }

        const Fill = Value[0];

        /*
            0: Black Fill                       BackgroundColor3 = Black; Transparency = 0
            1: Image 50% Transparency           Image = Image; ImageTransparency = 0.5
            2: Purple Fill 20% transparency      ImageColor3 = Purple (hue at 80%?)
        */

        if (Fill.type == "IMAGE") {
            // TODO: Implement better fill support
            // if (Node.getPluginData("ImageHash") === Fill.imageHash) {
            //     Object.Class = "ImageLabel"
            //     Object.Image = Node.getPluginData("ImageId")
            //     return;
            // }

            // Export image

            Object._ImageHash = Fill.imageHash
            Object.Class = "ImageLabel" // or ImageButton?!

            ExportImage(Node, Object)

            return;
        }

        var [Color3, Transparency] = ConvertFill(Fill, Object);

        if (Object.Class == "TextLabel") {
            Object.TextColor3 = Color3;
            Object.TextTransparency = Transparency;
        } else {
            Object.BackgroundColor3 = Color3;
            Object.BackgroundTransparency *= Transparency;
        }
    },
    ["cornerRadius"]: (Value, Object) => {
        if (Value !== 0) {
            Object.Children.push({
                Class: "UICorner",
                Type: "UICorner",
                CornerRadius: {
                    S: 0,
                    O: Value,
                }
            })
        }
    },
    ["strokes"]: (Value, Object, Node) => {
        if (Value.length > 1) return console.warn(`Frame ${Object.Name} cannot have more than 1 stroke`);
        else if (Value.length === 0) {
            return;
        }

        var Stroke = Value[0];

        console.log(Stroke, Value);

        var StrokeObject = {
            Class: "UIStroke",
            Name: "UIStroke",
            ApplyStrokeMode: "Contextual",
            // Color: {
            //     R: Stroke.color.r,
            //     G: Stroke.color.g,
            //     B: Stroke.color.b
            // },
            Color: {
                R: 1,
                G: 0,
                B: 1
            },
            LineJoinMode: Conversions.LineJoinModes.indexOf(Node.strokeJoin),
            Thickness: Node.strokeWeight,
            Transparency: Stroke.opacity,

            Children: [],
        }

        var [Colour, Transparency] = ConvertFill(Stroke, StrokeObject);

        console.log(Object, Colour, Transparency);
        StrokeObject.Color = Colour;
        StrokeObject.Transparency *= Transparency;

        Object.Children.push(StrokeObject);
    },
    ["characters"]: (Value, Object, Node) => {
        var Segments = Node.getStyledTextSegments(["fills", "fontSize", "fontWeight", "textDecoration", "textCase"]);
        var Text = "";

        if (Segments.length > 1) {
            Segments.forEach(Segment => {
                var NewText = ""
    
                if (Segment.fills && Segment.fills.length === 1) {
                    var Fill = Segment.fills[0];
                    // TODO: Implement use of new funtion ConvertFill(Fill, Object?)
    
                    if (Fill.type == "SOLID") NewText += ` color="rgb(${Round(Fill.color.r * 255, 1) + "," + Round(Fill.color.g * 255, 1) + "," + Round(Fill.color.b * 255, 1)})"`
                    else console.warn(`Unsupported rich text fill type "${Fill.type}" on text Node`, Node)
                };
    
                if (!Object.TextSize || Segment.fontSize !== Object.TextSize) {
                    NewText += ` size="${Segment.fontSize + Math.round((Object.TextSize + 10) / 20)}"`;
                };
    
                if (Object.FontFace && Segment.fontWeight !== Object.FontFace.Weight) {
                    NewText += ` weight="${Segment.fontWeight}"`;
                };
    
                // We only want to add font tags if we have new data to add
                if (NewText.length > 0) Text += `<font ${NewText}>${Segment.characters}</font>`
                else Text += Segment.characters;
            })
    
            Object.RichText = true;
            Object.Text = Text //StringToUTF8(Text);
        } //else Object.Text = StringToUTF8(Object.Text);

        //Object.Text = StringToUTF8(Value);
    },
    ["textDecoration"]: (Value, Object) => {
        if (Value === "UNDERLINE") Object.Text = `<u>${Object.Text}</u>`;
        else if (Value === "STRIKETHROUGH") Object.Text = `<s>${Object.Text}</s>`;
    },
    ["layoutMode"]: (Value, Object, Node) => {
        /*
            TODO: Support reverse ZIndex
        */
       
        const FillDirection = Conversions.FillDirection.indexOf(Value);
        const IsHorizontal = FillDirection === 0;

        // Get Padding and Alignment Offset

        const HorizontalCellPadding = IsHorizontal ? Node.itemSpacing : Node.counterAxisSpacing || Node.itemSpacing;
        const VerticalCellPadding = !IsHorizontal ? Node.itemSpacing : Node.counterAxisSpacing || Node.itemSpacing;

        const HorizontalAlignment = IsHorizontal ? Node.primaryAxisAlignItems : Node.counterAxisAlignItems || Node.primaryAxisAlignItems;
        const VerticalAlignment = !IsHorizontal ? Node.primaryAxisAlignItems : Node.counterAxisAlignItems || Node.primaryAxisAlignItems;

        // Get Size Offset
        //
        // It's annoying roblox enforces all children to be uniform in size
        // Could add a setting to toggle this on/off depending on what's needed
        const HorizontalCellSize = Node.children[0] ? Node.children[0].width : 100;
        const VerticalCellSize = Node.children[0] ? Node.children[0].height : 100;

        Object.Children.push({
            Class: "UIGridLayout",
            Name: "UIGridLayout",
            CellPadding: {
                XS: 0,
                XO: HorizontalCellPadding || 0,
                YS: 0,
                YO: VerticalCellPadding || 0,
            },
            CellSize: {
                XS: 0,
                XO: HorizontalCellSize,
                YS: 0,
                YO: VerticalCellSize,
            },
            FillDirection: FillDirection,
            SortOrder: 0,

            HorizontalAlignment: Conversions.HorizontalAlignment.indexOf(HorizontalAlignment),
            VerticalAlignment: Conversions.VerticalAlignment.indexOf(VerticalAlignment),
        })
    }
}

function CalculateAngle(P1, P2, P3) { // https://stackoverflow.com/a/39673693
    const Numerator = P2.x * (P1.x - P3.x) + P1.y * (P3.x - P2.x) + P3.y * (P2.x - P1.x);
    const Denominator = (P2.x - P1.x) * (P1.x - P3.x) + (P2.y - P1.y) * (P1.y - P3.y);
    
    // Calculate angle in radians and convert it to degrees
    const AngleDeg = (Math.atan(Numerator / Denominator) * 180) / Math.PI;

    return AngleDeg < 0 ? AngleDeg + 180 : AngleDeg;
}

const NodeTypes = { // Is this really needed? I could probably make it less repetative
    ["GROUP"]: (Node) => {
        var Properties = {
            Class: "Frame",
            Name: Node.name,
            Active: true,
            Visible: Node.visible,
            BackgroundTransparency: 0,
            _Transparency: Node.opacity,
            BorderSizePixel: 0,

            Rotation: -Node.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Node.x,
                YS: 0,
                YO: Node.y
            },
            Size: {
                XS: 0,
                XO: Node.width,
                YS: 0,
                YO: Node.height
            },

            Children: [],
            Node: Node,
        }

        return Properties
    },
    ["FRAME"]: (Node) => {
        var Properties = {
            Class: "Frame",
            Name: Node.name,
            Active: true,
            Visible: Node.visible,
            BackgroundTransparency: Node.opacity,
            _Transparency: Node.opacity,
            BorderSizePixel: 0,

            ClipsDescendants: Node.clipsContent,
            Rotation: -Node.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Node.x,
                YS: 0,
                YO: Node.y
            },
            Size: {
                XS: 0,
                XO: Node.width,
                YS: 0,
                YO: Node.height
            },

            Children: [],
            Node: Node,
        }

        return Properties
    },
    ["RECTANGLE"]: (Node) => {
        var Properties = {
            Class: "Frame",
            Name: Node.name,
            Active: true,
            Visible: Node.visible,
            BackgroundTransparency: Node.opacity,
            _Transparency: Node.opacity,
            BorderSizePixel: 0,

            Rotation: -Node.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Node.x,
                YS: 0,
                YO: Node.y
            },
            Size: {
                XS: 0,
                XO: Node.width,
                YS: 0,
                YO: Node.height
            },

            Children: [],
            Node: Node,
        }

        return Properties;
    },
    ["ELLIPSE"]: (Node) => {
        // Note: Only supports circles (ellipses would have to be images)

        let Size = Math.min(Node.width, Node.height); // Will get the smallest of the two (no need to check if they are the same)

        return {
            Class: "Frame",
            Name: Node.name,
            Active: true,
            Visible: Node.visible,
            BackgroundTransparency: Node.opacity,
            _Transparency: Node.opacity,
            BorderSizePixel: 0,

            Rotation: -Node.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Node.x + (Node.width - Size),
                YS: 0,
                YO: Node.y + (Node.height - Size)
            },
            Size: {
                XS: 0,
                XO: Size,
                YS: 0,
                YO: Size
            },

            Children: [
                {
                    Class: "UICorner",
                    Name: "UICorner",
                    CornerRadius: {
                        S: 1,
                        O: 0,
                    }
                }
            ],
            Node: Node,
        }
    },
    ["TEXT"]: (Node) => {
        const FontStyle = Conversions.FontStyle[Node.fontName.style];
        const FontFamily = Node.fontName !== figma.mixed && Conversions.MarketplaceFonts[Node.fontName.family];

        var Properties = {
            Class: "TextLabel",
            Name: Node.name,
            Active: true,
            Visible: Node.visible,
            BackgroundTransparency: 0.0,
            _Transparency: Node.opacity,
            BorderSizePixel: 0,

            Rotation: -Node.rotation,
            ZIndex: 1,

            Text: Node.characters,
            TextSize: Node.fontSize !== figma.mixed ? Node.fontSize + Math.round((Node.fontSize + 5) / 20) : 16,
            TextXAlignment: Conversions.TextXAlignments.indexOf(Node.textAlignHorizontal),
            TextYAlignment: Conversions.TextYAlignments.indexOf(Node.textAlignVertical),
            TextWrapped: true,
            TextTruncate: Conversions.TextTruncate.indexOf(Node.textTruncation),

            FontFace: {
                Family: FontFamily ? `<url>rbxassetid://${FontFamily}</url>` : `<url>rbxasset://fonts/families/${(Node.fontName !== figma.mixed ? Node.fontName.family : "Source Sans Pro").replace(/ /g, "")}.json</url>`, // Use Marketplace Font if available, if not try local font
                Weight: FontStyle ? FontStyle.Weight: 400,
                Style: FontStyle ? FontStyle.Style: "Regular"
            },

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Node.x,
                YS: 0,
                YO: Node.y
            },
            Size: {
                XS: 0,
                XO: Node.width,
                YS: 0,
                YO: Node.height
            },

            Children: [],
            Node: Node,
        }

        if (Node.textCase) {
            switch (Node.textCase) {
                case "UPPER": 
                    Properties.Text = Properties.Text.toUpperCase();
                    break;
                case "LOWER": 
                    Properties.Text = Properties.Text.toLowerCase();
                    break;
                case "TITLE":
                    Properties.Text = Properties.Text.replace(/\w\S*/g, function(Text) {
                        return Text.charAt(0).toUpperCase() + Text.substr(1).toLowerCase();
                    })
        
                    break;
                case "ORIGINAL":
                    break;
            }
        }

        return Properties;
    },
    ["VECTOR"]: (Node, Settings) => {
        // Calculate how many rectangles fit into the area

        if (!Settings.ExportVectors) {
            return;
        }

        const VectorNetwork = Node.vectorNetwork;
        const Vertices = VectorNetwork.vertices;

        var Checked = {};

        for (var i = 0; i < Vertices.length; i++) {
            for (var i2 = 0; i2 < Vertices.length; i2++) {
                if (i == i2) continue;

                for (var i3 = 0; i3 < Vertices.length; i3++) {
                    if (i == i3 || i2 == i3) continue;

                    var Angle = CalculateAngle(Vertices[i], Vertices[i2], Vertices[i3]);
                    
                    if (Angle < 90) {
                        console.warn("Cannot convert acute angle to quad", Angle, i, i2, i3);
                    } else if (Angle == 90) {
                        console.log("triangle?", Angle, i, i2, i3);
                    }
                }
            }
        }

        return {
            Class: "N/A",
            Name: Node.name,
            Active: true,
            Visible: Node.visible,
            BackgroundTransparency: 0.0,
            _Transparency: Node.opacity,
            BorderSizePixel: 0,

            Rotation: -Node.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Node.x,
                YS: 0,
                YO: Node.y
            },
            Size: {
                XS: 0,
                XO: Node.width,
                YS: 0,
                YO: Node.height
            },

            Children: [],
            Node: Node,
        }
    },

    ["OTHER"]: (Node) => {
        console.warn("Unknwon type:", Node.type)
    }
}

function Round(Number, To) {
    return Math.round(Number * To) / To
}

function LoopTable(TObject) {
    var Xml = "";

    for (var [Key, Value] of Object.entries(TObject)) {
        if (Key === "XO" || Key === "YO") Xml += `<${Key}>${Round(Value, 1)}</${Key}>`; // UDim(2) Offset is an int
        else if (typeof(Value) === "number") Xml += `<${Key}>${Round(Value, 1000)}</${Key}>`;
        else Xml += `<${Key}>${Value}</${Key}>`;
    }

    return Xml;
}

function EncodeStr(String) {
    const T = {
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;"
    }

    return String.replace(/[<>"]/g, (c) => {
        return T[c];
    })
}

// Slightly modified from https://www.basedash.com/blog/javascript-string-to-bytes#:~:text=UTF%2D8%20TO%20BYTES%20MANUALLY
function StringToUTF8(String) {
    var NewString = "";

    for (let i = 0; i < String.length; i++) {
        let CodePoint = String.codePointAt(i);

        if (!CodePoint) continue
        else if (CodePoint == 8232) NewString += "\n";
        else if (CodePoint < 0x80) {
            if (CodePoint == 10) NewString += "\n";
            else NewString += String.charAt(i);
        } else if (CodePoint < 0x800) {
            NewString += `&#${0xc0 | (CodePoint >> 6)};&#${0x80 | (CodePoint & 0x3f)};`;
        } else if (CodePoint < 0x10000) {
            NewString += `&#${0xe0 | (CodePoint >> 12)};&#${0x80 | ((CodePoint >> 6) & 0x3f)};&#${0x80 | (CodePoint & 0x3f)};`;
        } else {
            NewString += `&#${0xe0 | (CodePoint >> 18)};&#${0x80| ((CodePoint >> 12) & 0x3f)};&#${0x80 | ((CodePoint >> 6) & 0x3f)};&#${0x80 | (CodePoint & 0x3f)};`;
        }
    }

    return NewString
}

const XMLTypes = {
    ["token"]: (Name, Value) => {
        return `<token name="${Name}">${Value}</token>`
    },
    ["content"]: (Name, Value) => {
        //if (Value.match(/:\/\//g)) return `<Content name="${Name}"><url>${Value}</url></Content>`;

        return `<Content name="${Name}"><url>${Value}</url></Content>`
    },
    ["cdata"]: (Name, Value) => {
        if (Value.match(/\n/g)) return `<string name="${Name}"><![CDATA[${Value.replace(/\]\]>/g, "]]]]><![CDATA[>")}]]></string>`;
        return XMLTypes.string(Name, Value);
    },

    ["string"]: (Name, Value) => {
        return `<string name="${Name}">${StringToUTF8(EncodeStr(Value))}</string>`
    },
    ["number"]: (Name, Value, IsInteger, RoundTo) => {
        if (RoundTo) Value = Round(Value, RoundTo);

        if (IsInteger || (IsInteger === undefined && Number.isInteger(Value))) return `<int name="${Name}">${Value}</int>`;

        return `<float name="${Name}">${Value}</float>`;
    },
    ["boolean"]: (Name, Value) => {
        return `<bool name="${Name}">${Value}</bool>`
    },
    ["object"]: (Name, Value) => {
        if (Value.X !== undefined && Value.Y !== undefined && Value.Z !== undefined) {
            return `<Vector3 name="${Name}">${LoopTable(Value)}</Vector3>`
        } else if (Value.X !== undefined && Value.Y !== undefined) {
            return `<Vector2 name="${Name}">${LoopTable(Value)}</Vector2>`
        } else if (Value.XS !== undefined && Value.YS !== undefined) {
            return `<UDim2 name="${Name}">${LoopTable(Value)}</UDim2>`
        } else if (Value.S !== undefined) {
            return `<UDim name="${Name}">${LoopTable(Value)}</UDim>`
        } else if (Value.R !== undefined && Value.G !== undefined && Value.B !== undefined) {
            return `<Color3 name="${Name}">${LoopTable(Value)}</Color3>`
        } else if (Value[0] && Value[0].Colour) {
            var Sequence = ""

            Value.forEach(Stop => {
                Sequence += `${Stop.TimePosition} ${Stop.Colour.R} ${Stop.Colour.G} ${Stop.Colour.B} 0 `;
            });

            return `<ColorSequence name="${Name}">${Sequence}</ColorSequence>`
        } else if (Value[0] && Value[0].Transparency !== undefined) {
            var Sequence = ""

            Value.forEach(Stop => {
                Sequence += `${Stop.TimePosition} ${Stop.Transparency} 0 `;
            });

            return `<NumberSequence name="${Name}">${Sequence}</NumberSequence>`
        } else if (Value.Family) {
            return `<Font name="${Name}">${LoopTable(Value)}</Font>`
        }
    }
}

module.exports = {
    PropertyTypes,
    NodeTypes,
    XMLTypes,
    Settings,
    UpdateImage,
    UpdateOperationId,
    GetImageFromOperation,
    IsDone
}
},{"./Conversions":1,"./Utilities":3}],3:[function(require,module,exports){
var CurrentNotification;

const Flags = {
    UsePositionRelativeToScene: false, // True: Will use the (x,y) position of the Upmost Group(s) (should be no.1); False: Set the Upmost Group(s) Position to (0,0)
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
},{}],4:[function(require,module,exports){
/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@bbbbbbbb@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@FFFFFFFFFFFFFFFFFFFFFF@@iiii@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@tttt@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@RRRRRRRRRRRRRRRRR@@@@@@@@@@@@@@@@@@@b::::::b@@@@@@@@@@@@lllllll@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@F::::::::::::::::::::F@i::::i@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ttt:::t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@R::::::::::::::::R@@@@@@@@@@@@@@@@@@b::::::b@@@@@@@@@@@@l:::::l@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@F::::::::::::::::::::F@@iiii@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@t:::::t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@R::::::RRRRRR:::::R@@@@@@@@@@@@@@@@@b::::::b@@@@@@@@@@@@l:::::l@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@FF::::::FFFFFFFFF::::F@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@t:::::t@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@RR:::::R@@@@@R:::::R@@@@@@@@@@@@@@@@@b:::::b@@@@@@@@@@@@l:::::l@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@F:::::F@@@@@@@FFFFFFiiiiiii@@@@ggggggggg@@@ggggg@@@mmmmmmm@@@@mmmmmmm@@@@@aaaaaaaaaaaaa@@@@@@@@ttttttt:::::ttttttt@@@@@@@ooooooooooo@@@@@@@@@@R::::R@@@@@R:::::R@@@ooooooooooo@@@b:::::bbbbbbbbb@@@@@l::::l@@@@ooooooooooo@xxxxxxx@@@@@@xxxxxxx@@@@@
    @@@@@@@F:::::F@@@@@@@@@@@@@i:::::i@@@g:::::::::ggg::::g@mm:::::::m@@m:::::::mm@@@a::::::::::::a@@@@@@@t:::::::::::::::::t@@@@@oo:::::::::::oo@@@@@@@@R::::R@@@@@R:::::R@oo:::::::::::oo@b::::::::::::::bb@@@l::::l@@oo:::::::::::oox:::::x@@@@x:::::x@@@@@@
    @@@@@@@F::::::FFFFFFFFFF@@@@i::::i@@g:::::::::::::::::gm::::::::::mm::::::::::m@@aaaaaaaaa:::::a@@@@@@t:::::::::::::::::t@@@@o:::::::::::::::o@@@@@@@R::::RRRRRR:::::R@o:::::::::::::::ob::::::::::::::::b@@l::::l@o:::::::::::::::ox:::::x@@x:::::x@@@@@@@
    @@@@@@@F:::::::::::::::F@@@@i::::i@g::::::ggggg::::::ggm::::::::::::::::::::::m@@@@@@@@@@@a::::a@@@@@@tttttt:::::::tttttt@@@@o:::::ooooo:::::o@@@@@@@R:::::::::::::RR@@o:::::ooooo:::::ob:::::bbbbb:::::::b@l::::l@o:::::ooooo:::::o@x:::::xx:::::x@@@@@@@@
    @@@@@@@F:::::::::::::::F@@@@i::::i@g:::::g@@@@@g:::::g@m:::::mmm::::::mmm:::::m@@@@aaaaaaa:::::a@@@@@@@@@@@@t:::::t@@@@@@@@@@o::::o@@@@@o::::o@@@@@@@R::::RRRRRR:::::R@o::::o@@@@@o::::ob:::::b@@@@b::::::b@l::::l@o::::o@@@@@o::::o@@x::::::::::x@@@@@@@@@
    @@@@@@@F::::::FFFFFFFFFF@@@@i::::i@g:::::g@@@@@g:::::g@m::::m@@@m::::m@@@m::::m@@aa::::::::::::a@@@@@@@@@@@@t:::::t@@@@@@@@@@o::::o@@@@@o::::o@@@@@@@R::::R@@@@@R:::::Ro::::o@@@@@o::::ob:::::b@@@@@b:::::b@l::::l@o::::o@@@@@o::::o@@@x::::::::x@@@@@@@@@@
    @@@@@@@F:::::F@@@@@@@@@@@@@@i::::i@g:::::g@@@@@g:::::g@m::::m@@@m::::m@@@m::::m@a::::aaaa::::::a@@@@@@@@@@@@t:::::t@@@@@@@@@@o::::o@@@@@o::::o@@@@@@@R::::R@@@@@R:::::Ro::::o@@@@@o::::ob:::::b@@@@@b:::::b@l::::l@o::::o@@@@@o::::o@@@x::::::::x@@@@@@@@@@
    @@@@@@@F:::::F@@@@@@@@@@@@@@i::::i@g::::::g@@@@g:::::g@m::::m@@@m::::m@@@m::::ma::::a@@@@a:::::a@@@@@@@@@@@@t:::::t@@@@tttttto::::o@@@@@o::::o@@@@@@@R::::R@@@@@R:::::Ro::::o@@@@@o::::ob:::::b@@@@@b:::::b@l::::l@o::::o@@@@@o::::o@@x::::::::::x@@@@@@@@@
    @@@@@FF:::::::FF@@@@@@@@@@@i::::::ig:::::::ggggg:::::g@m::::m@@@m::::m@@@m::::ma::::a@@@@a:::::a@@@@@@@@@@@@t::::::tttt:::::to:::::ooooo:::::o@@@@@RR:::::R@@@@@R:::::Ro:::::ooooo:::::ob:::::bbbbbb::::::bl::::::lo:::::ooooo:::::o@x:::::xx:::::x@@@@@@@@
    @@@@@F::::::::FF@@@@@@@@@@@i::::::i@g::::::::::::::::g@m::::m@@@m::::m@@@m::::ma:::::aaaa::::::a@@@@@@@@@@@@tt::::::::::::::to:::::::::::::::o@@@@@R::::::R@@@@@R:::::Ro:::::::::::::::ob::::::::::::::::b@l::::::lo:::::::::::::::ox:::::x@@x:::::x@@@@@@@
    @@@@@F::::::::FF@@@@@@@@@@@i::::::i@@gg::::::::::::::g@m::::m@@@m::::m@@@m::::m@a::::::::::aa:::a@@@@@@@@@@@@@tt:::::::::::tt@oo:::::::::::oo@@@@@@R::::::R@@@@@R:::::R@oo:::::::::::oo@b:::::::::::::::b@@l::::::l@oo:::::::::::oox:::::x@@@@x:::::x@@@@@@
    @@@@@FFFFFFFFFFF@@@@@@@@@@@iiiiiiii@@@@gggggggg::::::g@mmmmmm@@@mmmmmm@@@mmmmmm@@aaaaaaaaaa@@aaaa@@@@@@@@@@@@@@@ttttttttttt@@@@@ooooooooooo@@@@@@@@RRRRRRRR@@@@@RRRRRRR@@@ooooooooooo@@@bbbbbbbbbbbbbbbb@@@llllllll@@@ooooooooooo@xxxxxxx@@@@@@xxxxxxx@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@g:::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gggggg@@@@@@g:::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@g:::::gg@@@gg:::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@g::::::ggg:::::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gg:::::::::::::g@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ggg::::::ggg@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@gggggg@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    Version 2.0.0
    By NoTwistedHere

    This plugin is free to use, report any bugs to me on Discord (NoTwistedHere)

    TODO:
        Implement section support
        Implement Settings
        Finish implementing Image uploading (DONE?)
        Better ui (DONE?)
*/

const { widget } = figma;
const Conversions = require('./Conversions.js');
const { Flags, QuickClose, Notify } = require('./Utilities.js');
const { PropertyTypes, NodeTypes, XMLTypes, Settings, UpdateImage, UpdateOperationId, GetImageFromOperation, ExportImage, IsDone } = require('./Converters.js');

var Scale = {
    X: 0.25,
    Y: 0.25,
}

function ConvertObject(Properties, ParentObject) {
    var XML = ""

    for (var [Key, Value] of Object.entries(Properties)) {
        switch (Key) {
            case "Node":
            case "Children":
            case "Class":
                break;
            case "DominantAxis":
            case "AspectType":
            case "TextTruncate":
            case "TextXAlignment":
            case "TextYAlignment":
            case "SortOrder":
            case "FillDirection":
                XML += XMLTypes.token(Key, Value)
                break;
            case "Text":
                XML += XMLTypes.cdata(Key, Value)
                break;
            case "Image":
                XML += XMLTypes.content(Key, Value)
                break;
            case "BackgroundTransparency":
            case "Transparency":
            case "TextStrokeTransparency":
            case "TextTransparency":
                // Should always be parented to a group as only groups and sections allow children
                if (ParentObject) Value = ParentObject._Transparency * Value;

                XML += XMLTypes.number(Key, 1 - Value, false);
                break
            /*case "TextSize":
                XML += XMLTypes.number(Key, Value, false);
                break;*/
            case "Rotation":
                if (ParentObject && ParentObject.Rotation) {
                    Value = Value - ParentObject.Rotation
                }

                XML += XMLTypes.number(Key, Value, false, 1000);
                break;
            default:
                //console.log(Key, Value, typeof(Value))
                if (Key.substring(0, 1) == "_") break;
                
                if (XMLTypes[typeof(Value)]) XML += XMLTypes[typeof(Value)](Key, Value);
                break;
        }
    }

    return XML
}

function LoopNodes(Nodes, ParentObject) {
    var FileContent = "";

    // Loop Nodes
    for (var i = 0; i < Nodes.length; i++) {
        const Node = Nodes[i];
        const NodeData = Node.getPluginDataKeys();

        // Check for a previous export
        if (NodeData.ImageId) {
            
        }

        var Properties = NodeTypes[Node.type || "OTHER"](Node, Settings); // Can't name it Object because of below v

        if (!Properties) continue;

        // Loop Node properties
        var NodeProperties = Object.getOwnPropertyNames(Object.getPrototypeOf(Node));

        NodeProperties.forEach((i) => {
            if (PropertyTypes[i]) {
                PropertyTypes[i](Node[i], Properties, Node);
            }
        });

        // Calculate Aspect Ratio and Scale

        console.log("Node Properties:", Properties)

        if (Settings.ApplyAspectRatio) {
            var AspectRatio = Math.round((Properties.Size.XO / Properties.Size.YO) * 1000) / 1000;

            if (Node.width != 0 && Node.height != 0 && AspectRatio) {
                Properties.Children.push({
                    Class: "UIAspectRatioConstraint",
                    AspectRatio: AspectRatio,
                    AspectType: 1,
                    DominantAxis: Properties.Size.XO > Properties.Size.YO ? 1 : 0
                })
            }
        }

        //

        //Properties.Position.XO -= some math //*= Scale.X
        //Properties.Position.YO //*= Scale.Y
        //Properties.Size.XO *= Scale.X
        //Properties.Size.YO *= Scale.Y

        if (Properties.Rotation && Properties.Rotation != 0) {
            var BoundingBox = Node.absoluteBoundingBox;

            var CX = BoundingBox.x + BoundingBox.width / 2;
            var CY = BoundingBox.y + BoundingBox.height / 2;

            Properties.Position.XO = CX - Properties.Size.XO / 2;
            Properties.Position.YO = CY - Properties.Size.YO / 2;
        }

        if (Properties.Name == "Background" && ParentObject) {
            console.log("Got Background with ParentObject which is a Group", Properties, ParentObject);

            ParentObject.BackgroundColor3 = Properties.BackgroundColor3;
            ParentObject.BackgroundTransparency = Properties.BackgroundTransparency;
            ParentObject.BorderSizePixel = Properties.BorderSizePixel;
            ParentObject.Rotation = Properties.Rotation;
            
            if (Properties.Children) {  
                Properties.Children.forEach(Child => {
                    var XMLProperties = ConvertObject(Child, Properties);
                    
                    FileContent += `<Item class="${Child.Class}" referent="RBX0">\n${Child.Children ? LoopChildren(Child.Children) : ""}<Properties>\n${XMLProperties}\n</Properties></Item>\n`
                });
            }

            continue;
        }

        
        // Convert to scale? (WIP)
        
        var SX, SY = ParentObject ? (ParentObject.Size.XO, ParentObject.Size.YO) : (1920, 1080);
        
        // Properties.Position.XS = Properties.Position.XO / SX;
        // Properties.Position.YS = Properties.Position.YO / SY;
        // Properties.Size.XS = Properties.Size.XO / SX;
        // Properties.Size.YS = Properties.Size.YO / SY;
        
        // Properties.Position.XO = 0;
        // Properties.Position.YO = 0;
        // Properties.Size.XO = 0;
        // Properties.Size.YO = 0;
        
        //
        // Create Item element, loop children (if applicable)
        
        FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
        
        var New = "";
        
        //FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n"
        
        if (Properties.Children) {
            function LoopChildren(Children) {
                var New2 = "";
                
                Children.forEach(Child => {
                    var XMLProperties = ConvertObject(Child, Properties);
                    
                    New2 += `<Item class="${Child.Class}" referent="RBX0">\n${Child.Children ? LoopChildren(Child.Children) : ""}<Properties>\n${XMLProperties}\n</Properties></Item>\n`
                });
                
                return New2
            }
            
            New += LoopChildren(Properties.Children);
        }

        if (Node.children) New += LoopNodes(Node.children, Properties);

        // Finish up and Convert Properties
        
        if (ParentObject) {
            if (ParentObject.Position) { // Get Position relative to Parent
                Properties.Position.XO -= ParentObject.Position.XO;
                Properties.Position.YO -= ParentObject.Position.YO;
            } else if (ParentObject._Transparency) { // Multiply Transparency with Parent Transparency/Pass through
                Properties._Transparency = ParentObject._Transparency * Properties._Transparency
            }
        } else if (!Flags.UsePositionRelativeToScene) {
            // Set Position of upmost Element (most likely a Group) to (0,0)
            Properties.Position.XO = 0;
            Properties.Position.YO = 0;
        }

        FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + New;

        FileContent += "</Item>\n";
        Properties = null;
        New = null;
    }

    return FileContent
}

async function ConvertNodes() {
    var SelectedNodes = figma.currentPage.selection;

    if (SelectedNodes.length == 0) QuickClose("No Nodes selected");

    // Start Converting Nodes

    var FileContent = '<!--\n\tGenerated by Figma to Roblox\n\tReport any bugs/issues to me (notwistedhere)\n-->\n\n<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><Meta name="ExplicitAutoJoints">true</Meta>\n';

    var Nodes = LoopNodes(SelectedNodes);

    /*(Nodes.forEach((Properties) => {
        FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
    })*/

    const a = await new Promise((resolve, reject) => {
        function Timeout() {
            if (IsDone()) return resolve();

            setTimeout(Timeout, 500);
        }

        Timeout()
    })

    const ImageOperations = Nodes.replace(/{OP-([0-9a-bA-B-:]+)}/g, (_, Id) => {
        console.log("Found operationId:", Id)

        var ExportedImage = GetImageFromOperation(Id)

        console.log("Got Exported Image:", ExportedImage)

        return ExportedImage.Properties.Image
    })

    //console.log("Result:", ImageOperations);

    FileContent += ImageOperations + "</roblox>";

    figma.ui.postMessage({
        type: "Download",
        data: FileContent
    });

    //console.log(FileContent);

    Notify("Successfully exported")

    return true
}

//ConvertNodes();

figma.ui.onmessage = msg => {
    switch (msg.type) {
        case "run":
            console.log("[FTR] Starting");
            ConvertNodes();
            console.log("[FTR] Done");

            break;
        case "UpdateOperationId":
            UpdateOperationId(msg);
        case "ImageUploaded":
            UpdateImage(msg);

            /*
            {
                "id": "167:3",
                "type": "ImageUploaded",
                "data": {
                    "path": "assets/18355966113",
                    "revisionId": "1",
                    "revisionCreateTime": "2024-07-06T04:49:52.260972600Z",
                    "assetId": "18355966113",
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
            */
            break;
        case "SetAsync":
            //console.log("Set Setting", msg);
            figma.clientStorage.setAsync(msg.key, msg.value);
            break;
        // case "FetchAsync":
        //     const FetchPromise = new Promise((resolve, reject) => {
        //         var Done = 0;
        //         var Settings = {};
                
        //         figma.clientStorage.keysAsync().then(Keys => {
        //             for (var i = 0; i < Keys.length; i++) {
        //                 const Key = Keys[i];
    
        //                 figma.clientStorage.getAsync(Key).then(Value => {
        //                     Settings[Key] = Value;
        //                     Done += 1;
                            
        //                     if (Done == Keys.length) {
        //                         resolve(Settings);
        //                     }
        //                 })
        //             }
        //         })
        //     });

        //     FetchPromise.then((Settings) => figma.ui.postMessage({
        //         type: "LoadSettings",
        //         settings: Settings
        //     }));
            
        //     break;
            // figma.clientStorage.keysAsync().then(Keys => {
            //     for (var i = 0; i < Keys.length; i++) {
            //         const Key = Keys[i];

            //         figma.clientStorage.getAsync(Key).then(Value => figma.ui.postMessage({
            //             type: "GetAsync",
            //         }))
            //     }
            // })
    }
}

figma.showUI(__html__, {
    width: 250,
    height: 380,
    themeColors: true
});

const FetchPromise = new Promise((resolve, reject) => {    
    figma.clientStorage.keysAsync().then(Keys => {
        var Done = 0;
        var Settings = {};
        
        for (var i = 0; i < Keys.length; i++) {
            const Key = Keys[i];

            figma.clientStorage.getAsync(Key).then(Value => {
                Settings[Key] = Value;
                Done += 1;
                
                if (Done == Keys.length) {
                    Done = null;
                    resolve(Settings);
                }
            })
        }
    })
});

FetchPromise.then((Settings) => figma.ui.postMessage({
    type: "LoadSettings",
    settings: Settings
}));
},{"./Conversions.js":1,"./Converters.js":2,"./Utilities.js":3}]},{},[4]);
