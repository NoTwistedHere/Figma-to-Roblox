const Conversions = require("./Conversions");

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

const PropertyTypes = {
    ["fills"]: (Value, Object, Element) => {
        if (Value.length > 1 || Value == figma.mixed) {
            return console.warn(`Frame ${Object.Name} cannot have more than 1 fill`);
        } else if (Value.length === 0) {
            Object.BackgroundTransparency = 1;
            return;
        }

        const Fill = Value[0];

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
    ["strokes"]: (Value, Object, Element) => {
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
            LineJoinMode: Conversions.LineJoinModes.indexOf(Element.strokeJoin),
            Thickness: Element.strokeWeight,
            Transparency: Stroke.opacity,

            Children: [],
        }

        var [Colour, Transparency] = ConvertFill(Stroke, StrokeObject);

        console.log(Object, Colour, Transparency);
        StrokeObject.Color = Colour;
        StrokeObject.Transparency *= Transparency;

        Object.Children.push(StrokeObject);
    },
    ["characters"]: (Value, Object, Element) => {
        var Segments = Element.getStyledTextSegments(["fills", "fontSize", "fontWeight", "textDecoration", "textCase"]);
        var Text = "";

        Segments.forEach(Segment => {
            var NewText = ""

            if (Segment.fills && Segment.fills.length === 1) {
                var Fill = Segment.fills[0];
                // TODO: Implement use of new funtion ConvertFill(Fill, Object?)

                if (Fill.type == "SOLID") NewText += ` color="rgb(${Round(Fill.color.r * 255, 1) + "," + Round(Fill.color.g * 255, 1) + "," + Round(Fill.color.b * 255, 1)})"`
                else console.warn(`Unsupported rich text fill type "${Fill.type}" on text element`, Element)
            };

            if (!Object.TextSize || Segment.fontSize !== Object.TextSize) {
                NewText += ` size="${Segment.fontSize}"`;
            };

            if (Object.FontFace && Segment.fontWeight !== Object.FontFace.Weight) {
                NewText += ` weight="${Segment.fontWeight}"`;
            };

            if (NewText.length > 0) Text += `<font ${NewText}>${Segment.characters}</font>`; // We only want to add font tags if we have new data to add
        })

        Object.RichText = true;
        Object.Text = Text;
    },
    ["textDecoration"]: (Value, Object) => {
        if (Value === "UNDERLINE") Object.Text = `<u>${Object.Text}</u>`;
        else if (Value === "STRIKETHROUGH") Object.Text = `<s>${Object.Text}</s>`;
    },
    ["layoutMode"]: (Value, Object, Element) => {
        /*
            TODO: Support reverse ZIndex
        */
       
        const FillDirection = Conversions.FillDirection.indexOf(Value);
        const IsHorizontal = FillDirection === 0;

        // Get Padding and Alignment Offset

        const HorizontalCellPadding = IsHorizontal ? Element.itemSpacing : Element.counterAxisSpacing || Element.itemSpacing;
        const VerticalCellPadding = !IsHorizontal ? Element.itemSpacing : Element.counterAxisSpacing || Element.itemSpacing;

        const HorizontalAlignment = IsHorizontal ? Element.primaryAxisAlignItems : Element.counterAxisAlignItems || Element.primaryAxisAlignItems;
        const VerticalAlignment = !IsHorizontal ? Element.primaryAxisAlignItems : Element.counterAxisAlignItems || Element.primaryAxisAlignItems;

        // Get Size Offset
        //
        // It's annoying roblox enforces all children to be uniform in size
        // Could add a setting to toggle this on/off depending on what's needed
        const HorizontalCellSize = Element.children[0] ? Element.children[0].width : 100;
        const VerticalCellSize = Element.children[0] ? Element.children[0].height : 100;

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

const ElementTypes = { // Is this really needed? I could probably make it less repetative
    ["GROUP"]: (Element) => {
        var Properties = {
            Class: "Frame",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: 0,
            _Transparency: Element.opacity,
            BorderSizePixel: 0,

            Rotation: -Element.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Element.x,
                YS: 0,
                YO: Element.y
            },
            Size: {
                XS: 0,
                XO: Element.width,
                YS: 0,
                YO: Element.height
            },

            Children: [],
            Element: Element,
        }

        return Properties
    },
    ["FRAME"]: (Element) => {
        var Properties = {
            Class: "Frame",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: Element.opacity,
            _Transparency: Element.opacity,
            BorderSizePixel: 0,

            ClipsDescendants: Element.clipsContent,
            Rotation: -Element.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Element.x,
                YS: 0,
                YO: Element.y
            },
            Size: {
                XS: 0,
                XO: Element.width,
                YS: 0,
                YO: Element.height
            },

            Children: [],
            Element: Element,
        }

        return Properties
    },
    ["RECTANGLE"]: (Element) => {
        var Properties = {
            Class: "Frame",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: Element.opacity,
            _Transparency: Element.opacity,
            BorderSizePixel: 0,

            Rotation: -Element.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Element.x,
                YS: 0,
                YO: Element.y
            },
            Size: {
                XS: 0,
                XO: Element.width,
                YS: 0,
                YO: Element.height
            },

            Children: [],
            Element: Element,
        }

        return Properties;
    },
    ["ELLIPSE"]: (Element) => {
        // Note: Only supports circles (ellipses would have to be images)

        let Size = Math.min(Element.width, Element.height); // Will get the smallest of the two (no need to check if they are the same)

        return {
            Class: "Frame",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: Element.opacity,
            _Transparency: Element.opacity,
            BorderSizePixel: 0,

            Rotation: -Element.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Element.x + (Element.width - Size),
                YS: 0,
                YO: Element.y + (Element.height - Size)
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
            Element: Element,
        }
    },
    ["TEXT"]: (Element) => {
        var Font = Conversions.Fonts[Element.fontName.style];

        var Properties = {
            Class: "TextLabel",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: 0.0,
            _Transparency: Element.opacity,
            BorderSizePixel: 0,

            Rotation: -Element.rotation,
            ZIndex: 1,

            Text: Element.characters,
            TextSize: Element.fontSize !== figma.mixed ? Element.fontSize : 16,
            TextXAlignment: Conversions.TextXAlignments.indexOf(Element.textAlignHorizontal),
            TextYAlignment: Conversions.TextYAlignments.indexOf(Element.textAlignVertical),
            TextWrapped: true,
            TextTruncate: Conversions.TextTruncate.indexOf(Element.textTruncation),

            FontFace: {
                Family: `<url>rbxasset://fonts/families/${(Element.fontName !== figma.mixed ? Element.fontName.family : "Source Sans Pro").replace(/ /g, "")}.json</url>`,
                Weight: Font ? Font.Weight: 400,
                Style: Font ? Font.Style: "Regular"
            },

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Element.x,
                YS: 0,
                YO: Element.y
            },
            Size: {
                XS: 0,
                XO: Element.width,
                YS: 0,
                YO: Element.height
            },

            Children: [],
            Element: Element,
        }

        if (Element.textCase) {
            switch (Element.textCase) {
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
            }
        }

        return Properties;
    },
    ["VECTOR"]: (Element, Settings) => {
        // Calculate how many rectangles fit into the area

        if (!Settings.ExportVectors) {
            return;
        }

        const VectorNetwork = Element.vectorNetwork;
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
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: 0.0,
            _Transparency: Element.opacity,
            BorderSizePixel: 0,

            Rotation: -Element.rotation,
            ZIndex: 1,

            AnchorPoint: {
                X: 0,
                Y: 0,
            },
            Position: {
                XS: 0,
                XO: Element.x,
                YS: 0,
                YO: Element.y
            },
            Size: {
                XS: 0,
                XO: Element.width,
                YS: 0,
                YO: Element.height
            },

            Children: [],
            Element: Element,
        }
    },

    ["OTHER"]: (Element) => {
        console.warn("Unknwon type:", Element.type)
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

const XMLTypes = {
    ["token"]: (Name, Value) => {
        return `<token name="${Name}">${Value}</token>`
    },

    ["string"]: (Name, Value) => {
        return `<string name="${Name}">${EncodeStr(Value)}</string>`
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
    ElementTypes,
    XMLTypes
}