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
    //ApplyAspectRatio: false, // Changed to Flag (/Utilities.js)
    //ExportVectors: true, // Changed to Flag (/Utilities.js)
    ApplyZIndex: true, // Not implemented?
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

            // Check if image hashes match

            console.log("Stored ImageHash vs ImageHash", Node.getPluginData("ImageHash"), Properties._ImageHash)

            if (Node.getPluginData("ImageHash") === Properties._ImageHash) {
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
    } else if (typeof(msg.data) === "string") { // Image uploaded
        //ImageInfo.Node.setPluginData("OperationId", "");
        //figma.notify(`Failed to upload Image Node "${msg.id}": ${msg.data}`);
        console.warn(`Failed to upload Image Node "${msg.id}":`, msg);
        return;
    }
    
    let ModerationResult = msg.data.moderationResult

    if (ModerationResult && (ModerationResult.moderationState != "Approved" && ModerationResult.moderationState != "MODERATION_STATE_APPROVED")) {
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
    return ImagesRemaining === 0
}

const PropertyTypes = {
    ["fills"]: (Value, Object, Node) => {
        if (Value.length > 1 || Value == figma.mixed) {
            return console.warn(`Frame ${Object.Name} cannot have more than 1 fill`);
        } else if (Value.length === 0) {
            Object.BackgroundTransparency = 0;
            return;
        }

        const Fill = Value[0];

        /*
            0: Black Fill                       BackgroundColor3 = Black; Transparency = 0
            1: Image 50% Transparency           Image = Image; ImageTransparency = 0.5
            2: Purple Fill 20% transparency      ImageColor3 = Purple (hue at 80%?)
        */

        if (Fill.type === "IMAGE") {
            // TODO: Implement better fill support
            // if (Node.getPluginData("ImageHash") === Fill.imageHash) {
            //     Object.Class = "ImageLabel"
            //     Object.Image = Node.getPluginData("ImageId")
            //     return;
            // }

            // Export image

            Object._ImageHash = Fill.imageHash
            Object.Class = "ImageLabel" // or ImageButton?!
            Object.BackgroundTransparency = 0 // Images can't have backgrounds from what I can tell

            ExportImage(Node, Object)

            return;
        }

        var [Color3, Transparency] = ConvertFill(Fill, Object);

        if (Object.Class === "TextLabel") {
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
    ["effects"]: (Value, Object, Node) => {
        Value.forEach(Effect => {
            switch (Effect.type) {
                case "DROP_SHADOW":
                    // do something
                    // 
                    // IDEA:
                    //      Create a Clone with of the same Size, Offset by some px / AnchorPoint
                    //      ^ Would have to be an ImageLabel for the same effect, however I haven't thought of attemtping it
                    //      and it's probably still better to export/upload Rectangles as an image, but Groups and Frames could work
                    
                    // Object.Children.push({
                    //     Class: "ImageLabel",
                    //     Name: "DropShadow",
                    //     BackgroundTransparency: 
                    // })

                    break;
            }
        })
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
                    // ^ no, only SOLID colours can be supported with richtext
    
                    if (Fill.type === "SOLID") NewText += ` color="rgb(${Round(Fill.color.r * 255, 1) + "," + Round(Fill.color.g * 255, 1) + "," + Round(Fill.color.b * 255, 1)})"`
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

        if (Value === "NONE") return;
       
        const FillDirection = Conversions.FillDirection.indexOf(Value);
        const IsHorizontal = FillDirection === 0;

        // Get Alignment, Padding and Size Offset
        
        const HorizontalAlignment = IsHorizontal ? Node.primaryAxisAlignItems : Node.counterAxisAlignItems || Node.primaryAxisAlignItems;
        const VerticalAlignment = !IsHorizontal ? Node.primaryAxisAlignItems : Node.counterAxisAlignItems || Node.primaryAxisAlignItems;

        const HorizontalCellPadding = IsHorizontal ? Node.itemSpacing : Node.counterAxisSpacing || Node.itemSpacing;
        const VerticalCellPadding = !IsHorizontal ? Node.itemSpacing : Node.counterAxisSpacing || Node.itemSpacing;

        const HorizontalCellSize = Node.children[0] ? Node.children[0].width : 100;
        const VerticalCellSize = Node.children[0] ? Node.children[0].height : 100;

        // TODO Come back to rn!
        const CellPadding = {
            XS: 0,
            XO: HorizontalCellPadding,
            YS: 0,
            YO: VerticalCellPadding,
        }

        const CellSize = {
            XS: 0,
            XO: HorizontalCellSize,
            YS: 0,
            YO: VerticalCellSize,
        }

        if (Flags.ConvertOffsetToScale) {
            const SX = Object.Size.XO;
            const SY = Object.Size.YO;
            
            CellPadding.XS = CellPadding.XO / SX;
            CellPadding.YS = CellPadding.YO / SY;
            CellSize.XS = CellSize.XO / SX;
            CellSize.YS = CellSize.YO / SY;
            
            CellPadding.XO = 0;
            CellPadding.YO = 0;
            CellSize.XO = 0;
            CellSize.YO = 0;
        }
        
        Object.Children.push({
            Class: "UIGridLayout",
            Name: "UIGridLayout",
            CellPadding: CellPadding,
            CellSize: CellSize,
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
            BackgroundTransparency: 1,
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

        if (!Flags.ExportVectors) {
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