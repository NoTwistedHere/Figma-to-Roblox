const Conversions = require("./Conversions");

const PropertyTypes = {
    ["fills"]: (Value, Object) => {
        if (Value.length > 1) {
            return console.warn(`Frame ${Properties.Name} cannot have more than 1 fill`);
        } else if (Value.length === 0) {
            Object.BackgroundTransparency = 1;
            return;
        }

        const Fill = Value[0];

        var Transparency = 0;
        var Color3 = {};

        switch (Fill.type) {
            case "SOLID":
                Transparency = 1 - Fill.opacity;
                Color3 = {
                    R: Fill.color.r,
                    G: Fill.color.g,
                    B: Fill.color.b,
                };

                break;
            case "GRADIENT_LINEAR":
                Transparency = 1 - Fill.opacity;
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

        if (Object.Class == "TextLabel") {
            Object.TextColor3 = Color3;
            Object.TextTransparency = Transparency;
        } else {
            Object.BackgroundColor3 = Color3;
            Object.BackgroundTransparency = Transparency;
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
    ["strokes"]: (Value, Object) => {
        if (Value.length > 1) return console.warn(`Frame ${Object.Name} cannot have more than 1 stroke`);
        else if (Value.length === 0) {
            return;
        }

        var Stroke = Value[0];

        Object.Children.push({
            Class: "UIStroke",
            Name: "UIStroke",
            ApplyStrokeMode: "Contextual",
            Color: {
                R: Stroke.color.r,
                G: Stroke.color.g,
                B: Stroke.color.b
            },
            LineJoinMode: Conversions.LineJoinModes.indexOf(Element.strokeJoin),
            Thickness: Element.strokeWeight,
            Transparency: 1 - Stroke.opacity,
        });
    },
    ["textDecoration"]: (Value, Object) => {
        if (Value === "UNDERLINE") Object.Text = `<u>${Object.Text}</u>`;
        else if (Value === "STRIKETHROUGH") Object.Text = `<s>${Object.Text}</s>`;
    },
    ["textCase"]: (Value, Object) => {
        switch (Value) {
            case "UPPERCASE": 
                Object.Text = Object.Text.toUpperCase();
                break;
            case "LOWERCASE": 
                Object.Text = Object.Text.toLowerCase();
                break;
            case "TITLE":
                Object.Text = Object.Text.replace(/\w\S*/g, function(Text) {
                    return Text.charAt(0).toUpperCase() + Text.substr(1).toLowerCase();
                })

                break;
        }
    }
}

const ElementTypes = { // Is this really needed? I could probably make it less repetative
    ["GROUP"]: (Element) => {
        var Properties = {
            Class: "Frame",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: 1.0,
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
            BackgroundTransparency: 1 - Element.opacity,
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
    ["RECTANGLE"]: (Element) => {
        var Properties = {
            Class: "Frame",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: 1 - Element.opacity,
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
            BackgroundTransparency: 1 - Element.opacity,
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
        var Properties = {
            Class: "TextLabel",
            Name: Element.name,
            Active: true,
            Visible: Element.visible,
            BackgroundTransparency: 1,
            BorderSizePixel: 0,

            Rotation: -Element.rotation,
            ZIndex: 1,

            Text: Element.characters,
            TextXAlignment: Conversions.TextXAlignments[Element.textAlignHorizontal],
            TextYAlignment: Conversions.TextYAlignments[Element.textAlignVertical],
            TextWrapped: Element.textAutoResize == "HEIGHT" ? true : false,

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
        else Xml += `<${Key}>${Round(Value, 1000)}</${Key}>`;
    }

    return Xml;
}

const XMLTypes = {
    ["token"]: (Name, Value) => {
        return `<token name="${Name}">${Value}</token>`
    },

    ["string"]: (Name, Value) => {
        return `<string name="${Name}">${Value}</string>`
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
        }
    }
}

module.exports = {
    PropertyTypes,
    ElementTypes,
    XMLTypes
}