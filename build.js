(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
const Conversions = require("./Conversions");

const PropertyTypes = {
    ["fills"]: (Value, Object, Return) => {
        if (Value.length > 1 || Value == figma.mixed) {
            return console.warn(`Frame ${Object.Name} cannot have more than 1 fill`);
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
        } else if (Return !== true) {
            Object.BackgroundColor3 = Color3;
            Object.BackgroundTransparency = Transparency;
        } else {
            return [Color3, Transparency]
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
    ["characters"]: (Value, Object, Element) => {
        var Segments = Element.getStyledTextSegments(["fills", "fontSize", "fontWeight", "textDecoration", "textCase"]);
        var Text = "";

        Segments.forEach(Segment => {
            Text += "<font"

            if (Segment.fills && Segment.fills.length === 1) {
                var Fill = Segment.fills[0];

                Text += ` color="rgb(${Round(Fill.color.r * 255, 1) + "," + Round(Fill.color.g * 255, 1) + "," + Round(Fill.color.b * 255, 1)})"`;
            };

            if (!Object.TextSize || Segment.fontSize !== Object.TextSize) {
                Text += ` size="${Segment.fontSize}"`;
            };

            if (!Object.FontFace || Segment.fontWeight !== Object.FontFace.Weight) {
                Text += ` weight="${Segment.fontWeight}"`;
            };

            Text += `>${Segment.characters}</font>`;
        })

        Object.RichText = true;
        Object.Text = Text;
    },
    ["textDecoration"]: (Value, Object) => {
        if (Value === "UNDERLINE") Object.Text = `<u>${Object.Text}</u>`;
        else if (Value === "STRIKETHROUGH") Object.Text = `<s>${Object.Text}</s>`;
    },
    ["textCase"]: (Value, Object) => {
        switch (Value) {
            case "UPPER": 
                Object.Text = Object.Text.toUpperCase();
                break;
            case "LOWER": 
                Object.Text = Object.Text.toLowerCase();
                break;
            case "TITLE":
                Object.Text = Object.Text.replace(/\w\S*/g, function(Text) {
                    return Text.charAt(0).toUpperCase() + Text.substr(1).toLowerCase();
                })

                break;
        }
    },
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
        var Font = Conversions.Fonts[Element.fontName.style];

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
            TextSize: Element.fontSize !== figma.mixed ? Element.fontSize : 14,
            TextXAlignment: Conversions.TextXAlignments[Element.textAlignHorizontal],
            TextYAlignment: Conversions.TextYAlignments[Element.textAlignVertical],
            TextWrapped: Element.textAutoResize == "HEIGHT" ? true : false,
            TextTruncate: Conversions.TextTruncate[Element.textTruncation],

            FontFace: {
                Family: `<url>rbxasset://fonts/families/${Element.fontName.family}.json</url>`,
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
},{"./Conversions":1}],3:[function(require,module,exports){
var CurrentNotification;

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

*/

const { widget } = figma;
const Conversions = require('./Conversions.js');
const { QuickClose, Notify } = require('./Utilities.js');
const { PropertyTypes, ElementTypes, XMLTypes} = require('./Converters.js');

var Scale = {
    X: 0.25,
    Y: 0.25,
}

function ConvertObject(Properties, ParentObject) {
    var XML = ""

    for (var [Key, Value] of Object.entries(Properties)) {
        switch (Key) {
            case "Element":
            case "Children":
            case "Class":
                break;
            case "BackgroundTransparency":
            case "TextSize":
            case "TextStrokeTransparency":
            case "TextTransparency":
                XML += XMLTypes.number(Key, Value, false);
                break;
            case "Rotation":
                if (ParentObject && ParentObject.Rotation) {
                    Value = Value - ParentObject.Rotation
                }

                XML += XMLTypes.number(Key, Value, false, 1000);
                break;
            default:
                //console.log(Key, Value, typeof(Value))
                
                if (XMLTypes[typeof(Value)]) XML += XMLTypes[typeof(Value)](Key, Value);
        }
    }

    return XML
}

function LoopElements(Elements, ParentObject) {
    var FileContent = "";

    for (var i = 0; i < Elements.length; i++) {
        var Element = Elements[i];
        var Properties = ElementTypes[Element.type || "OTHER"](Element); // Can't name it Object because of below v

        var ElementProperties = Object.getOwnPropertyNames(Object.getPrototypeOf(Element));

        ElementProperties.forEach((i) => {
            if (PropertyTypes[i]) {
                PropertyTypes[i](Element[i], Properties, Element);
            }
        });

        //Properties.Position.XO -= some math //*= Scale.X
        //Properties.Position.YO //*= Scale.Y
        //Properties.Size.XO *= Scale.X
        //Properties.Size.YO *= Scale.Y

        if (ParentObject && ParentObject.Position) {
            Properties.Position.XO -= ParentObject.Position.XO;
            Properties.Position.YO -= ParentObject.Position.YO;
        }

        if (Properties.Rotation && Properties.Rotation != 0) {
            var BoundingBox = Element.absoluteBoundingBox;

            var CX = BoundingBox.x + BoundingBox.width / 2;
            var CY = BoundingBox.y + BoundingBox.height / 2;

            Properties.Position.XO = CX - Properties.Size.XO / 2;
            Properties.Position.YO = CY - Properties.Size.YO / 2;
        }

        FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`

        var New = "";

        //FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n"

        if (Properties.Children) {
            Properties.Children.forEach(Child => {
                New += `<Item class="${Child.Class}" referent="RBX0">\n<Properties>\n${ConvertObject(Child, Properties)}\n</Properties>\n</Item>`
            });
        }
        if (Element.children) New += LoopElements(Element.children, Properties);

        //if (!ParentObject) {
        //    Properties.Position.XO = 0;
        //    Properties.Position.YO = 0;
        //}

        FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + New;

        FileContent += "</Item>\n";
        Properties = null;
    }

    return FileContent
}

async function ConvertElements() {
    var SelectedElements = figma.currentPage.selection;

    if (SelectedElements.length == 0) QuickClose("No elements selected");

    // Start Converting Elements

    var FileContent = '<!--\n\tGenerated by Figma to Roblox\n\tReport any bugs/issues to me (notwistedhere)\n-->\n\n<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><Meta name="ExplicitAutoJoints">true</Meta>\n';

    FileContent += LoopElements(SelectedElements) + "</roblox>";

    // figma.ui.postMessage({
    //     type: "Download",
    //     data: FileContent
    // });

    console.log(FileContent);

    Notify("Successfully exported")

    return true
}

//ConvertElements();

figma.ui.onmessage = msg => {
    switch (msg.type) {
        case "run":
            console.log("[FTR] Starting");
            ConvertElements();
            console.log("[FTR] Done");

            break;
    }
}

figma.showUI(__html__);
},{"./Conversions.js":1,"./Converters.js":2,"./Utilities.js":3}]},{},[4]);
