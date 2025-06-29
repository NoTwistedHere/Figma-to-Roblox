const Conversions = require("./Conversions");
const { Flags, NotifyError, Notify } = require("./Utilities");
const createHash = require("create-hash/browser");

var ImagesRemaining = 0;
const ImageExports = {};
const ImageUploads = [];
const Settings = {
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
    UploadImages: false,
    UploadEffects: false,
};

function ConvertFill(Fill, Object) {
    if (Fill.visible === false) return [{}, 0]
    
    var Transparency = Fill.opacity;
    var Color3 = {R: 1, G: 1, B: 1};

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

            Object._HasGradient = true;
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

function ExportImage(Node, Properties, CustomExport, ForceReupload, FullWhiteout) {
    let AssetId = Node.getPluginData("AssetId");
    var UploadId = Node.getPluginData("OperationId");

    if (AssetId && AssetId.match(/[0-9]+/)) AssetId = AssetId.match(/[0-9]+/)[0];
    if (!Settings.UploadImages) return Properties.Image = `rbxassetid://${AssetId}`;

    if (Node.vectorPaths) { // hash vector, Flags.ExportVectorsAsImage should be true if we get here
        var CombinedVecPaths = "";

        Node.vectorPaths.forEach(vectorPath => CombinedVecPaths = CombinedVecPaths + vectorPath.data + vectorPath.windingRule);
        Properties._ImageHash = createHash("sha256").update(CombinedVecPaths).digest("hex");
    }

    if (!ForceReupload && !Flags.ForceUploadImages) {
        if (AssetId && !AssetId.match(/TransparentWhiteImagePlaceholder.png/)) {
            // Check if image hashes match

            if (Node.getPluginData("ImageHash") === Properties._ImageHash) {
                console.log("Image has not changed, using ImageId:", AssetId)
                Properties.Image = `rbxassetid://${AssetId}`

                return;
            }
        } else if (UploadId) {
            // try fetching before attempting to re-upload

            if (Node.getPluginData("ImageHash") === Properties._ImageHash) {
                console.log("Image was uploaded, checking Operation (Id):", UploadId);

                ImagesRemaining += 1;
                Properties.Image = `{FTR_${UploadId}}`
                Node.setPluginData("ImageHash", Properties._ImageHash);
    
                ImageExports[UploadId] = {
                    Node: Node,
                    Properties: Properties,
                    UploadId: UploadId
                }
    
                figma.ui.postMessage({
                    type: "CheckOperation",
                    data: {
                        Id: UploadId
                    }
                });
                
                return UploadId
            } else console.log("Operation exists but Hashes don't match, uploading..")
        }
    }

    UploadId = UploadId || Properties._ImageHash || AssetId || Properties.Name.replace(/[[:alnum:]\-:]+/g, "") //Node.id

    if (!UploadId || UploadId.length < 2) NotifyError(`Node "${Node.name}" {${Node.id}} has an invalid UploadId`, true);

    //Properties.UploadId = UploadId;

    Properties.Image = `{FTR_${UploadId}}`
    if (ImageUploads.find((id) => id === UploadId)) return UploadId;
    ImageUploads.push(UploadId);
    ImagesRemaining += 1;
    
    if (Properties._ImageHash) Node.setPluginData("ImageHash", Properties._ImageHash);
    var ExportNode = Node;

    if (FullWhiteout && Node.fills && Node.fills[0]) {
        ExportNode = Node.clone();
        ExportNode.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    }
    
    ExportNode.exportAsync(CustomExport || Settings.DefaultExport).then(Bytes => {
        Node.setPluginData("AssetId", "");
        Node.setPluginData("OperationId", "");

        for (const [key, value] in ImageExports) {
            if (value.Bytes == Bytes) {
                UploadId = key
                Properties.Image = `{FTR_${key}}`
                ImagesRemaining -= 1;
                return;
            };
        }

        if (!ForceReupload && !Flags.ForceUploadImages && !Properties._ImageHash) {
            if (!ImageExports[UploadId]) {
                ImageExports[UploadId] = {
                    Node: Node,
                    Properties: Properties,
                    Bytes: Bytes, // Uint8Array
                    UploadId: UploadId
                }
            }

            const _ImageHash = createHash("sha256").update(Bytes).digest("hex");
            
            if (_ImageHash) {
                if (AssetId && Node.getPluginData("ImageHash") === _ImageHash) {
                    console.log("Node exported image has not changed, using ImageId:", AssetId)
                    Properties.Image = `rbxassetid://${AssetId}`
                    UpdateImage({id: UploadId, data: {
                        "assetId": AssetId,
                        "moderationResult": {
                            "moderationState": "Approved"
                        },
                        "state": "Active"
                    }});
                    return;
                } else if (AssetId) console.warn("Node's image has changed, uploading")

                Node.setPluginData("ImageHash", _ImageHash);
            }
        } else if (!ImageExports[UploadId]) {
            ImageExports[UploadId] = {
                Node: Node,
                Properties: Properties,
                Bytes: Bytes, // Uint8Array
                UploadId: UploadId
            }
        }

        // Test post image upload with template data
        if (Flags.ImageUploadTesting) UpdateImage({id: UploadId, data: Flags.ImageUploadBoilerplate});
        // Upload Image
        else setTimeout(() => {
            figma.ui.postMessage({
                type: "UploadImage",
                data: {
                    Data: Bytes,
                    Id: UploadId,
                    Name: Properties.Name.substr(0, 30),
                    Format: (CustomExport ? CustomExport.format : "PNG").toLowerCase()
                }
            })
        }, ImagesRemaining > 3 ? (ImagesRemaining / 5) * 1000 : 0)
    });

    return UploadId
}

function UpdateImage(msg) {
    var ImageInfo = ImageExports[msg.id];

    if (!ImageInfo) {
        figma.notify(`Unable to find Image Node "${msg.id}" (check console for more info)`);
        console.warn(`Failed to find Image Node "${msg.id}":`, msg);
        return;
    } else if (typeof(msg.data) === "string") { // Image uploaded
        //ImageInfo.Node.setPluginData("OperationId", "");
        //figma.notify(`Failed to upload Image Node "${msg.id}": ${msg.data}`);
        console.warn(`Failed to upload Image Node "${msg.id}":`, msg);
        ImagesRemaining -= 1
        return;
    }
    
    let ModerationResult = msg.data.moderationResult

    if (Flags.AwaitModeration && ModerationResult && (ModerationResult.moderationState != "Approved" && ModerationResult.moderationState != "MODERATION_STATE_APPROVED")) {
        if (msg.co && Flags.ReuploadStuckImages) {
            ExportImage(ImageInfo.Node, ImageInfo.Properties, false, true)
            return;
        }else if (ModerationResult.moderationState === "Reviewing") {
            figma.notify(`Image Element ${msg.id} took too long to pass moderation, Image Id: ${msg.data.assetId || msg.data.path}`)
            console.warn(`Image Element ${msg.id} took too long to pass moderation:`, ModerationResult, msg);
        } else {
            figma.notify(`Image Element ${msg.id} failed moderation (check console for more info); moderation state: ${ModerationResult.moderationState}`);
            console.warn(`Image Element ${msg.id} failed moderation:`, ModerationResult, msg);
        }

        //ImagesRemaining -= 1; return;
    }
    
    if (ImageInfo.Properties._ReplacedBy) {
        ImageInfo.Properties = ImageInfo.Properties._ReplacedBy;
        ImageInfo.Node = ImageInfo.Properties._OriginalNode;
    }

    var Content = msg.data.imageContent || msg.data.assetId;

    if (!Content.match(/TransparentWhiteImagePlaceholder.png/)) {
        ImageInfo.Node.setPluginData("AssetId", Content);
        
        if (!Content.match(/rbxasset/)) {
            Content = "rbxassetid://" + Content
        }

        ImageInfo.Properties.Image = Content;
    }

    ImagesRemaining -= 1;
}

function UpdateOperationId(msg) {
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
    console.log("Checking IsDone, Images Remaning:", ImagesRemaining);
    if (ImagesRemaining === 0) {
        ImageUploads.splice(0, ImageUploads.length);
        return true
    }
    return false
}

const PropertyTypes = {// the only return value should be nothing or an object containing properties to update
    ["clipsContent"]: (Value, Object, Node) => {
        Object.ClipsDescendants = Value;
    },
    ["targetAspectRatio"]: (Value, Object, Node) => {
        if (!Value) return;
        Object._ApplyAspectRatio = true
    },
    ["fills"]: (Value, Object, Node) => {
        if (/*Value.length > 1 ||*/ Value == figma.mixed) {
            return console.warn(`Frame ${Object.Name} cannot have more than 1 fill`);
        } else if (Value.length === 0 /*|| Object._hasExport*/) { // if the export is exported white, _hasExport should be false so we can recover the per-item colours:
            Object.BackgroundTransparency = 0;
            return;
        }
        
        const Fill = Value[0];

        /*
            0: Black Fill                       BackgroundColor3 = Black; Transparency = 0
            1: Image 50% Transparency           Image = Image; ImageTransparency = 0.5
            2: Purple Fill 20% transparency      ImageColor3 = Purple (hue at 80%?)
        */
       
        //Object.Visible = Node.type === "GROUP" ? true : Fill.visible; // ensure a boolean, and always enable groups
        //Object.Visible = Fill.visible !== false; // ensure a boolean - REMOVED as a better way would be to set the opacity to 0

        // if (!Settings.UploadImages) {
        //     Properties.BackgroundTransparency = Properties.ImageTransparency || 0;
        //     if (Properties.ImageColor3) Properties.BackgroundColor3 = Properties.ImageColor3;
        //     return;
        // };
        
        if (Fill.type === "IMAGE" && (Settings.UploadImages || Flags.AlwaysExportImages)) {
            // Export image
            Object._ImageHash = Fill.imageHash;
            Object.Class = "ImageLabel"; // or ImageButton?!
            Object.ImageColor3 = {R: 1, G: 1, B: 1};

            // Images can't have backgrounds from what I can tell (in figma), unless image uploading is disabled, but exporting is enabled
            if (!Settings.UploadImages) Object.BackgroundTransparency = 0;

            ExportImage(Node, Object);

            if (Value[1] && Value[1].type === "GRADIENT_LINEAR") ConvertFill(Value[1], Object);
        } else if (Value.length > 1) return console.warn(`Frame ${Object.Name} cannot have more than 1 fill`);

        var [Color3, Transparency] = ConvertFill(Fill, Object);

        if (Object.Class === "TextLabel" || Object.Class === "TextButton") {
            Object.TextColor3 = Color3;
            Object.TextTransparency = Transparency; // we do TextTransparency * _Transparency in main.js - ConvertObject()
            if (Object.Class === "TextLabel") Object.BackgroundTransparency = 0;
        } else if (Object.Class === "ImageLabel" || Object.Class === "ImageButton") {
            Object.ImageColor3 = Color3;
            Object.ImageTransparency = Transparency; // we do TextTransparency * _Transparency in main.js - ConvertObject()
            if (Object.Class === "ImageLabel") Object.BackgroundTransparency = 0;
        } else {
            Object.BackgroundColor3 = Color3;
            Object.BackgroundTransparency = Transparency;
        }
    },
    ["cornerRadius"]: (Value, Object) => {
        if (Value !== 0 && Value !== figma.mixed) {
            Object._HasCorners = true;
            Object.Children.push({
                Class: "UICorner",
                Type: "UICorner",
                CornerRadius: {
                    S: 0,
                    O: Value,
                }
            });
        }
    },
    ["effects"]: (Value, Object, Node) => {
        if (!Settings.UploadImages || !Settings.UploadEffects) return; // UploadImages is disabled, ignore?

        Value.forEach(Effect => {
            function clamp(OldOffset, X, Y) {
                var NewOffset = {X: X, Y: Y};

                if (OldOffset) {
                    if (OldOffset.X > X) NewOffset.X = OldOffset.X;
                    if (OldOffset.Y > Y) NewOffset.Y = OldOffset.Y;
                }

                return NewOffset;
            }

            console.log(Object.EffectRadius, Effect)

            if (Effect.radius) {
                Object.EffectRadius = clamp(Object.EffectRadius, Effect.radius, Effect.radius);
            } else if (Effect.offset) {
                Object.EffectRadius = clamp(Object.EffectRadius, Effect.offset.x, Effect.offset.y);
            } 

            switch (Effect.type) {
                /*case "DROP_SHADOW":
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

                    break;*/
                default:
                    // Export as image
                    Object.Class = "ImageLabel"; // or ImageButton?!
                    Object.ImageColor3 = {R: 1, G: 1, B: 1};
                    Object._hasExport = true
                    //Object.BackgroundTransparency = 0; // Images can't have backgrounds from what I can tell (in figma)

                    ExportImage(Node, Object, null, null, true)
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

        var StrokeObject = {
            Class: "UIStroke",
            Name: "UIStroke",
            ApplyStrokeMode: Conversions.ApplyStrokeMode.indexOf(Object.Class === "TextLabel" ? "Contextual" : "Border"),
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
            LineJoinMode: Conversions.LineJoinModes.indexOf(Object._HasCorners ? "ROUND" : Node.strokeJoin),
            Thickness: Node.strokeWeight,
            Transparency: Stroke.opacity,
            _Transparency: Object._Transparency,

            Children: [],
        }

        var [Colour, Transparency] = ConvertFill(Stroke, StrokeObject);
        
        StrokeObject.Color = Colour;
        StrokeObject.Transparency *= Transparency;
        
        //Object._HasStroke = true;
        Object.Children.push(StrokeObject);
    },
    ["characters"]: (Value, Object, Node) => {
        var Segments = Node.getStyledTextSegments(["fills", "fontSize", "fontWeight", "textDecoration", "textCase"]);
        var Text = "";

        if (Segments.length > 1) {
            const TextCase = Node.textCase

            Segments.forEach(Segment => {
                var NewText = ""
    
                if (Segment.fills && Segment.fills.length !== 0) {
                    // TODO: Implement use of new funtion ConvertFill(Fill, Object?)
                    // ^ no, only SOLID colours can be supported with richtext
                    const Colour = {R: 1, G: 1, B: 1, A: 1}; // get the latest (a combination of all would be good)

                    if (Segment.fills[0].type !== "SOLID") console.warn(`Unsupported rich text base fill type "${Fill.type}" on text Node`, Node, "text segment:", Segment)

                    /*const MainFillColour = Segment.fills[0].color

                    console.log(MainFillColour);

                    Colour.R = MainFillColour.r
                    Colour.G = MainFillColour.g
                    Colour.B = MainFillColour.b

                    {
                        Segment.fills.forEach(Fill => {
                            if (Fill.type !== "SOLID") return console.warn(`Unsupported rich text fill type "${Fill.type}" on text Node`, Node, "text segment:", Segment);

                            console.log(Fill);

                            Colour.R *= Fill.color.r
                            Colour.G *= Fill.color.g
                            Colour.B *= Fill.color.b
                        })
                    }*/

                    Segment.fills.forEach(Fill => {
                        if (Fill.type !== "SOLID") return console.warn(`Unsupported rich text fill type "${Fill.type}" on text Node`, Node, "text segment:", Segment);

                        Colour.R *= Fill.color.r
                        Colour.G *= Fill.color.g
                        Colour.B *= Fill.color.b
                        Colour.A *= Fill.opacity
                    });

                    NewText += ` color="rgb(${Round(Colour.R * 255, 1) + "," + Round(Colour.G * 255, 1) + "," + Round(Colour.B * 255, 1)})"`

                    if (Colour.A !== 1) NewText += ` transparency="${Round(1 - Colour.A, 4)}"`
                };
    
                if (Object.TextSize == undefined || Segment.fontSize !== Object.TextSize) {
                    NewText += ` size="${Segment.fontSize * Flags.TextSizeAdjustment}"`;
                };
    
                if (Object.FontFace && Segment.fontWeight !== Object.FontFace.Weight) {
                    NewText += ` weight="${Segment.fontWeight}"`;
                };

                var Characters = Segment.characters;

                if (TextCase) {
                    switch (TextCase) {
                        case "UPPER": 
                            Characters = Characters.toUpperCase();
                            break;
                        case "LOWER": 
                            Characters = Characters.toLowerCase();
                            break;
                        case "TITLE":
                            Characters = Characters.replace(/\w\S*/g, function(Text) {
                                return Text.charAt(0).toUpperCase() + Text.substr(1).toLowerCase();
                            })
                
                            break;
                        case "ORIGINAL":
                        default:
                            break;
                    }
                }
    
                // We only want to add font tags if we have new data to add
                if (NewText.length > 0) Text += `<font ${NewText}>${Characters}</font>`
                else Text += Characters;
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
        
        const HorizontalAlignment = IsHorizontal ? Node.primaryAxisAlignItems : Node.counterAxisAlignItems || 0;
        const VerticalAlignment = !IsHorizontal ? Node.primaryAxisAlignItems : Node.counterAxisAlignItems || 0;

        const HorizontalCellPadding = IsHorizontal ? Node.itemSpacing : Node.counterAxisSpacing || 0;
        const VerticalCellPadding = !IsHorizontal ? Node.itemSpacing : Node.counterAxisSpacing || 0;

        const HorizontalCellSize = Node.children[0] ? Node.children[0].width : 100;
        const VerticalCellSize = Node.children[0] ? Node.children[0].height : 100;

        //console.print(`Vertical Cell Padding has ${IsHorizontal ? "Horizontal, " : "Vertical, "} padding (X,Y in px): ${HorizontalCellPadding}, ${VerticalCellPadding} Dominant Axis Padding: ${IsHorizontal ? HorizontalCellPadding : VerticalCellPadding}`)

        if (Node.layoutWrap !== "WRAP") {
            // LIst Layout

            Object.Children.push({
                Class: "UIListLayout",
                Name: "UIListLayout",
                Padding: {S: 0, O: IsHorizontal ? HorizontalCellPadding : VerticalCellPadding},
                FillDirection: FillDirection,
                SortOrder: 0,
                Wraps: false, // both can be true in roblox, but not in Figma to my knowledge (only vertical wrap)
    
                HorizontalAlignment: Conversions.HorizontalAlignment.indexOf(HorizontalAlignment),
                VerticalAlignment: Conversions.VerticalAlignment.indexOf(VerticalAlignment),
            })

            if (!Object.Name.match("scrl")) {
                Object.Name += "scrl"
            }

            return;
        }

        // Cell Layout

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
            // now that I think about it doesn't really serve much use in a grid, but good for Rows?
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

        // TODO: Finish support for UIListLayout (padding not working)

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

// function CalculateAngle(P0, P1, P2) { // https://stackoverflow.com/a/39673693
//     var Numerator = P1.x * (P0.x - P2.x) + P0.y * (P2.x - P1.x) + P2.y * (P1.x - P0.x);
//     var Denominator = (P1.x - P0.x) * (P0.x - P2.x) + (P1.y - P0.y) * (P0.y - P2.y);
    
//     console.log("Number, Denom:", Numerator, Denominator)

//     // Calculate angle in radians and convert it to degrees
//     var AngleDeg = (Math.atan(Numerator / Denominator) * 180) / Math.PI;

//     return AngleDeg < 0 ? AngleDeg + 180 : AngleDeg;
// }

// function CalculateAngle(P0, P1, P2) { // https://stackoverflow.com/a/17763495 // https://phrogz.net/angle-between-three-points
//     var a = Math.sqrt(Math.pow(P1.x - P0.x, 2) + Math.pow(P1.Y - P0.Y, 2));
//     var b = Math.sqrt(Math.pow(P1.X - P2.X, 2) + Math.pow(P1.Y - P2.Y, 2));
//     var c = Math.sqrt(Math.pow(P2.X - P0.X, 2) + Math.pow(P2.Y - P0.Y, 2));

//     return Math.acos((b * b + a * a - c * c) / (2 * b * a));
// }

const NodeTypes = { // Is this really needed? I could probably make it less repetative
    ["GROUP"]: (Node) => {
        let Properties = {
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
        let Properties = {
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
    ["COMPONENT"]: (Node) => {
        let Properties = {
            Class: "Frame",
            Name: Node.name,
            Active: true,
            Visible: Node.visible,
            BackgroundTransparency: 1,
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
    ["INSTANCE"]: (Node) => {
        let Properties = {
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
    /*["LINE"]: (Node) => { // TODO: Better support
        let Properties = {
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

        return Properties
    },*/
    ["RECTANGLE"]: (Node) => {
        let Properties = {
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

        if (Node.name.toLowerCase().match(/img/)) {
            ExportImage(Node, Properties);
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

            _HasCorners: true,
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

        let Properties = {
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
            TextSize: Node.fontSize !== figma.mixed ? Node.fontSize : 24,
            TextXAlignment: Conversions.TextXAlignments.indexOf(Node.textAlignHorizontal),
            TextYAlignment: Conversions.TextYAlignments.indexOf(Node.textAlignVertical),
            TextWrapped: true, // hmmm
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

        // TODO: a much better solution is needed for release
        if (Flags.TextScaled) {
            console.warn("!!WARNING!! TextScaled is not ready for release");

            // Not always wanted
            Properties.TextScaled = true;

            // (WIP) exactly what it says vv
            // const RenderBounds = Node.absoluteRenderBounds
            
            // Properties.Position.XO = Math.round(RenderBounds.x - 4);
            // Properties.Position.YO = Math.round(RenderBounds.y - 4);
            // Properties.Size.XO = Math.round(RenderBounds.width + 8);
            // Properties.Size.YO = Math.round(RenderBounds.height + 8);
        }

        return Properties;
    },
    ["VECTOR"]: (Node, Settings) => {
        // Calculate how many rectangles fit into the area

        if (Flags.ExportVectorsAsImage) {
            let Properties = {
                Class: "ImageLabel",
                Name: Node.name,
                Active: true,
                Visible: Node.visible,
                BackgroundTransparency: 0.0,
                ImageTransparency: 1 - Node.opacity,
                ImageColor3: {R: 255, G: 255, B: 255},
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

            ExportImage(Node, Properties);
            return Properties;
        } else if (!Flags.ExportVectors) {
            return;
        }

        console.warn("Exporting Vectors as non-images is not supported")
        return;
        /*const VectorNetwork = Node.vectorNetwork;
        const Vertices = VectorNetwork.vertices;

        var Checked = {};

        console.log("Exporting Vector")

        for (var i = 0; i < Vertices.length; i++) {
            for (var i2 = 0; i2 < Vertices.length; i2++) {
                if (i == i2) continue;

                for (var i3 = 0; i3 < Vertices.length; i3++) {
                    if (i == i3 || i2 == i3) continue;

                    var Angle = CalculateAngle(Vertices[i], Vertices[i2], Vertices[i3]);
                    
                    console.log(`verts ${i}, ${i2}, ${i3} angle: ${Angle}`)

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
        }*/
    },
    ["BOOLEAN_OPERATION"]: (Node, Settings) => { // Basically emulating a group
        if (Node.booleanOperation !== "UNION") {
            // TODO: Upload & Export as Image
            figma.notify("Only \"UNION\" Boolean operations can somehwat be converted") // ", exporting as image.."
            return;
        }

        // figma.notify("Booleans may not look the same in Roblox", {
        //     timeout: 2000,
        //     button: {
        //         text: "Goto Boolean",
        //         action: () => {
        //             figma.currentPage.selection = [Node];
        //         }
        //     }
        // })

        const Properties = {
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

    ["OTHER"]: (Node) => {
        console.warn("Unknwon type:", Node.type)
    }
}

function Round(Number, To) {
    return Math.round(Number * To) / To
}

function LoopTable(TObject) {
    let Xml = "";

    for (const [Key, Value] of Object.entries(TObject)) {
        if (Value === figma.mixed) Xml += `<${Key}>0</${Key}>`; // ignore symbols, default to 0
        else if (Key === "XO" || Key === "YO") Xml += `<${Key}>${Round(Value, 1)}</${Key}>`; // UDim(2) Offset is an int
        else if (Key === "XS" || Key === "YS" || Key === "X" || Key === "Y") Xml += `<${Key}>${Round(Value, 100000)}</${Key}>`; // UDim(2) Scale & Vector2 is an float
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
        } else if (Value.Family) {
            return `<Font name="${Name}">${LoopTable(Value)}</Font>`
        } else {
            console.error("[Figma to Roblox] Failed to sanitise table for property:" + Name, Value);
            return "";
        }
    }
}

function GetNodeProperties(Node, Settings, ParentObject) {
    const Properties = NodeTypes[Node.type || "OTHER"](Node, Settings);

    if (!Properties) return;
    if (Properties._Transparency === 0) Properties.Visible = false;
    if (ParentObject) {
        if (ParentObject._Transparency) { // Multiply Transparency with Parent Transparency/Pass through
            Properties._Transparency = ParentObject._Transparency * Properties._Transparency
        };
        
        if (!Settings.UploadImages && Properties.Class === "TextLabel" && ParentObject.Class.match("Button")) {
            if (!Flags.AlwaysExportImages) {
                Properties.Interactable = false;
            } else {
                //Properties.Text = "";
                //Properties.TextTransparency = 1;
            }
        }
    }

    if (Properties.Name.length > 99) {
        Properties.Name = Properties.Name.substr(0, 100);
    }
    
    // Loop Node properties
    Object.getOwnPropertyNames(Object.getPrototypeOf(Node)).forEach((i) => {
        if (PropertyTypes[i]) {
            PropertyTypes[i](Node[i], Properties, Node, ParentObject);
        }
    });
    
    Properties._OriginalPosition = Properties.Position;
    Properties._OriginalSize = Properties.Size;
    
    if (Properties.Rotation && Properties.Rotation !== 0 /*&& Properties.Size.XO !== 0 && Properties.Size.YO !== 0*/) {
        const BoundingBox = Node.absoluteBoundingBox;

        if (Properties.Size.XO !== 0) {
            var CX = BoundingBox.x + BoundingBox.width / 2;
            Properties.Position.XO = CX - Properties.Size.XO / 2;
            
        }
        
        if (Properties.Size.YO !== 0) {
            var CY = BoundingBox.y + BoundingBox.height / 2;
            Properties.Position.YO = CY - Properties.Size.YO / 2;
        }
    }

    return Properties;
}

module.exports = {
    GetNodeProperties,
    XMLTypes,
    Settings,
    UpdateImage,
    UpdateOperationId,
    GetImageFromOperation,
    IsDone
}