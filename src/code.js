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

    Version 0.1.16
    By NoTwistedHere

    This plugin is free to use, report any bugs to me on Discord (NoTwistedHere#0001)
    (This is probably the worst code I've ever written, but it works)

    Limitations:
        Only supports linear gradients
        Only one fill colour per layer
        Effects are not supported (e.g. drop shadows, inner shadows, etc. May be added in the future)
        Vectors are not supported, only Rectangles, Ellipses, and Text (lines are partially supported)

    Known Issues:

*/

const INSTANCE_NAMES = [
    "BillboardGui",
    "CanvasGroup",
    "ScrollingFrame",
    "ImageButton",
    "ImageLabel",
    "ViewportFrame",
    "ScreenGui",
    "SurfaceGui",
    "TextButton",
    "TextLabel",
    "TextBox",

]

var HandledError = false;
var CurrentNotif;
var ImageExports = {};
var QueuedImages = 0;

function QuickClose(Message) {
    if (CurrentNotif !== undefined) CurrentNotif.cancel();

    HandledError = true;
    figma.notify(`Error: ` + Message, { timeout: 10000 });
    figma.closePlugin();

    throw new Error(Message);
}

function Notify(Message) {
    if (CurrentNotif !== undefined) CurrentNotif.cancel();

    CurrentNotif = figma.notify(Message);
}

function getGradientRotation(gradientTransform) {
    const a = gradientTransform[0][0];
    const b = gradientTransform[0][1];
    const angle = Math.atan2(b, a) * 180 / Math.PI;

    return angle >= 0 ? angle : angle + 360;
}

function LimitDecimals(Number, Decimals) { // Limit decimals to x places and round up/down
    if (typeof Number !== "number") return 0;
    if (isNaN(Number)) return 0;
    if (Decimals !== undefined && isNaN(Decimals)) Decimals = null;

    return parseFloat(Number.toFixed(Decimals));
}

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
    "Round",
    "Bevel",
    "Miter"
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

function Random() {
    return ((Math.random() * Math.random()) * 9e15) ^ Math.random(); // It's good enough
}

function ExportImage(Element, Properties, CustomExport) {
    QueuedImages++;

    const Name = CustomExport ? CustomExport.suffix : Element.name;

    Element.exportAsync(CustomExport || { format: "PNG", contentsOnly: true, constraint: { type: "SCALE", value: 2 } }).then(Bytes => {
        var UploadId = Random();

        while (ImageExports[UploadId] !== undefined) UploadId = Random();

        for (var i = 0; i < ImageExports.length; i++) {
            if (ImageExports[i].Bytes == Bytes) {
                UploadId = ImageExports[i].UploadId;
            }
        }

        Properties.UploadId = UploadId;

        ImageExports[UploadId] = {
            Bytes: Bytes, // Uint8Array
            UploadId: UploadId,
        };

        figma.ui.postMessage({
            type: "UploadImage",
            data: {
                ImageData: Bytes,
                UploadId: UploadId,
                ImageName: Name.replace(/EI[-]?/, ""),
                ImageFormat: CustomExport ? CustomExport.format : "PNG",
            },
        });
    });
}

const PropertyTypes = {
    ["children"]: (Element, Properties) => {
        if (Properties.NoChildren || Properties.Children == undefined || Properties.Class == "ImageLabel") return;

        for (var i = 0; i < Element.children.length; i++) {
            Properties.Children.push(GetMainProperties(Element.children[i], Properties));
        }

        /*
        // TODO: Re-implement masks
        var Mask = [];
        var Children = [];

        var children = Element.children // .reverse();

        for (var i = 0; i < children.length; i++) {
            if (children[i].isMask == true) {
                Mask.push(children[i]);
            } else {
                Children.push(children[i]);
            }
        }

        if (Mask.length > 1) {
            return QuickClose("Multiple masks are unsupported, on element: " + Element.name);
        } else if (Mask.length == 1) {
            var MaskProperties = ElementTypes["GROUP"](Mask[0], Properties) // GetMainProperties(Mask[0], Properties)

            MaskProperties.ClipsDescendants = true;

            for (var i = 0; i < Children.length; i++) {
                MaskProperties.Children.push(GetMainProperties(Children[i], MaskProperties));
            }

            Properties.Children.push(MaskProperties);
        }*/
    },
    ["exportSettings"]: (Element, Properties) => {
        const ExportSettings = Element.exportSettings[0];
        if (ExportSettings && Properties.Class !== "ImageLabel" && ExportSettings.suffix.match(/EI/)) {
            Properties.Class = "ImageLabel";
            Properties.ImageTransparency = Properties.BackgroundTransparency;
            Properties.BackgroundTransparency = 0;
            Properties.NoChildren = true;
            Properties.Children = undefined;

            if (ExportSettings.format !== "PNG" && ExportSettings.format !== "JPG") {
                return QuickClose("Unsupported image format: " + ExportSettings.format + ", on element: " + Element.name);
            }

            ExportImage(Element, Properties, ExportSettings);

            return true;
        }

        return false;
    },
    ["fills"]: (Element, Properties) => {
        if (Element.fills.length > 1) {
            return QuickClose("Multiple fills are unsupported, on element: " + Element.name);
        } else if (Element.fills.length == 0) {
            Properties.BackgroundColor3 = {R: 1, G: 1, B: 1}; // TODO: default to missing texture
        }

        const Filler = Element.fills[0];

        if (!Filler) return;

        switch (Filler.type) {
            case "SOLID":
                var Colour = {
                    R: Filler.color.r,
                    G: Filler.color.g,
                    B: Filler.color.b,
                };

                if (Properties.Class == "TextLabel") {
                    Properties.TextColor3 = Colour;
                } else {
                    Properties.BackgroundColor3 = Colour;
                }

                break;
            case "GRADIENT_LINEAR":
                if (Properties.Class == "TextLabel") {
                    Properties.TextColor3 = {R: 1, G: 1, B: 1};
                } else {
                    Properties.BackgroundColor3 = {R: 1, G: 1, B: 1};
                }

                const Transform = Filler.gradientTransform;
                const Rotation = getGradientRotation(Transform);

                Properties.Children.push({
                    Class: "UIGradient",
                    Type: "UIGradient",
                    Transparency: 1 - Filler.opacity,
                    Enabled: Filler.visible,
                    Colour: Filler.gradientStops.map((Stop) => {
                        return {
                            Colour: {
                                R: Stop.color.r,
                                G: Stop.color.g,
                                B: Stop.color.b,
                            },
                            TimePosition: Stop.position
                        }
                    }),
                    Transparency: Filler.gradientStops.map((Stop) => {
                        return {
                            Transparency: 1 - Stop.color.a, // Bastards for using RGBA (still love you though)
                            TimePosition: Stop.position
                        }
                    }),
                    Rotation: Rotation,
                    Children: []
                });

                break;
            case "IMAGE":
                if (Properties.Class !== "ImageLabel") {
                    Properties.Class = "ImageLabel";
                    Properties.BackgroundTransparency = 0;
                    Properties.ImageTransparency = Filler.opacity;

                    ExportImage(Element, Properties);
                }

                break;
            default:
                return QuickClose(`Unsupported fill type '${Filler.type}' for: ${Element.name}`);
        }
    },
    ["cornerRadius"]: (Element, Properties) => {
        if (Element.cornerRadius != 0) {
            Properties.Children.push({
                Class: "UICorner",
                Type: "UICorner",
                CornerRadius: {
                    S: 0,
                    O: Element.cornerRadius,
                },
                Children: []
            });
        }
    },
    ["fontName"]: (Element, Properties) => {
        const UsedFonts = Element.getStyledTextSegments(["fontName", "fontSize", "fontWeight", "fills"]);

        if (UsedFonts.length === 1) {
            Properties.Font = {
                Family: Element.fontName.family,
                Style: Element.fontName.style
            }
            return;
        }

        Properties.RichText = true;

        var PreviousFont;

        var NewText = "";

        function IsMulti(Font, property) {
            if (Element[property] !== figma.mixed || Element[property] === undefined || Element[property] === Font[property] || Font[property] === undefined) {
                return false;
            }

            return true;
        }

        function Check(Font) {
            const RblxFont = (Font.fontName && Fonts[Font.fontName.style]) || Fonts["Regular"];
            var NextTextSegment = "";
            var ExtraSegments = "";

            if (IsMulti(Font, "fontSize")) {
                NextTextSegment += `size="${Font.fontSize}" `;
            }

            if (IsMulti(Font, "fontName") && Font.fontName.family) {
                NextTextSegment += `family="rbxasset://fonts/families/${Font.fontName.family}.json" `;
            }

            if (IsMulti(Font, "fontName") && Font.fontName.style) {
                NextTextSegment += `style="${RblxFont.Style}" `;
            }

            if (IsMulti(Font, "fontWeight")) {
                NextTextSegment += `weight="${RblxFont.Weight}" `;
            }

            if (IsMulti(Font, "fills") && Font.fills.length > 0) {
                if (Font.fills[0].type !== "SOLID") {
                    console.warn("Gradient text is not supported.");
                } else {
                    var Colour = Font.fills[0].color;

                    NextTextSegment += `color="rgb(${LimitDecimals(Colour.r * 255)},${LimitDecimals(Colour.g * 255)},${LimitDecimals(Colour.b * 255)})" `;
                    NextTextSegment += `transparency="${1 - Font.fills[0].opacity}"`
                }
            }

            // End Segments
            // Special Segments

            if (IsMulti(Font, "textDecoration")) {
                switch (Font.textDecoration) {
                    case "UNDERLINE":
                        ExtraSegments += `<u>`;
                        break;
                    case "STRIKETHROUGH":
                        ExtraSegments += `<s>`;
                        break;
                }
            }

            // End Special Segments

            if (NextTextSegment.length > 0) NewText += `<font ${NextTextSegment}>`

            NewText += ExtraSegments + `${Font.characters}` + ExtraSegments.replace("<", "</");

            if (NextTextSegment.length > 0) NewText += `</font>`
        }

        for (var i = 0; i < UsedFonts.length; i++) {
            const Font = UsedFonts[i];

            Check(Font);
        }

        Properties.Text = "<![CDATA[" + NewText + "]]>";
    },
    ["strokes"]: (Element, Properties) => {
        if (Element.strokes.length == 0) {
            return;
        }
        const Stroke = Element.strokes[0];

        if ((Stroke.type !== "SOLID" && Stroke.type !== "GRADIENT_LINEAR") || Stroke.visible === false) return;

        if (Stroke.type === "GRADIENT_LINEAR") {
            const Transform = Stroke.gradientTransform;
            const Rotation = getGradientRotation(Transform);

            Properties.Children.push({
                Class: "UIStroke",
                Type: "UIStroke",
                Colour: {
                    R: 1,
                    G: 1,
                    B: 1,
                },
                Transparency: Element.opacity,
                Thickness: Element.strokeWeight,
                LineJoinMode: Element.strokeJoin.substring(0, 1).toUpperCase() + Element.strokeJoin.substring(1).toLowerCase(),
                Children: [{
                    Class: "UIGradient",
                    Type: "UIGradient",
                    Transparency: 1 - Stroke.opacity,
                    Enabled: Stroke.visible,
                    Colour: Stroke.gradientStops.map((Stop) => {
                        return {
                            Colour: {
                                R: Stop.color.r,
                                G: Stop.color.g,
                                B: Stop.color.b,
                            },
                            TimePosition: Stop.position
                        }
                    }),
                    Transparency: Stroke.gradientStops.map((Stop) => {
                        return {
                            Transparency: 1 - Stop.color.a, // Bastards for using RGBA
                            TimePosition: Stop.position
                        }
                    }),
                    Rotation: Rotation,
                    Children: []
                }]
            });

            return;
        }

        Properties.Children.push({
            Class: "UIStroke",
            Type: "UIStroke",
            Colour: {
                R: Stroke.color.r !== undefined ? Stroke.color.r : 1,
                G: Stroke.color.g !== undefined ? Stroke.color.g : 1,
                B: Stroke.color.b !== undefined ? Stroke.color.b : 1,
            },
            Transparency: Element.opacity,
            Thickness: Element.strokeWeight,
            LineJoinMode: Element.strokeJoin.substring(0, 1).toUpperCase() + Element.strokeJoin.substring(1).toLowerCase(),
            Children: []
        });
    }
}

const ElementTypes = {
    ["GROUP"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: 0,
            BorderSizePixel: 0,
            GroupOpacity: Element.opacity,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            _OriginalPosition: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.GroupOpacity = Parent.GroupOpacity * Properties.GroupOpacity; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["FRAME"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: Element.opacity,
            BorderSizePixel: 0,
            GroupOpacity: Element.opacity,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: -Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.GroupOpacity = Parent.GroupOpacity * Properties.GroupOpacity; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }

            Properties.BackgroundTransparency = Properties.GroupOpacity // simple fix
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        if (Element.name === "Container" || Element.name === "ScrollingFrame") {
            Properties.Class = "ScrollingFrame"

            const template = Element.children[0]

            const layoutInfo = Element.inferredAutoLayout
            const yAxis = Element.primaryAxisAlignItems
            const xAxis = Element.counterAxisAlignItems

            Properties.Children.push({
                Class: "UIGridLayout",
                Type: "UIGridLayout",
                CellSize: {
                    X: template.width,
                    Y: template.height
                },
                CellPadding: {
                    X: layoutInfo.itemSpacing,
                    Y: layoutInfo.itemSpacing
                },
                VerticalAlignment: yAxis === "CENTER" ? 0 : yAxis === "MIN" ? 1 : 2,
                HorizontalAlignment: xAxis === "CENTER" ? 0 : xAxis === "MIN" ? 1 : 2,
                FillDirection: layoutInfo.layoutMode === "VERTICAL" ? 1 : 0,
            })
        }

        if (Element.paddingTop !== 0 || Element.paddingRight !== 0 || Element.paddingBottom !== 0 || Element.paddingLeft !== 0) {
            Properties.Children.push({
                Class: "UIPadding",
                Type: "UIPadding",
                PaddingTop: Element.paddingTop,
                PaddingBottom: Element.paddingBottom,
                PaddingLeft: Element.paddingLeft,
                PaddingRight: Element.paddingRight,
            })
        }

        return Properties;
    },
    ["RECTANGLE"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: Element.opacity,
            BorderSizePixel: 0,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: -Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.BackgroundTransparency = Parent.GroupOpacity * Properties.BackgroundTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["ELLIPSE"]: (Element, Parent) => {
        var Properties = {
            Class: "Frame",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: Element.opacity,
            BorderSizePixel: 0,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: Element.rotation,
            Children: [
                {
                    Class: "UICorner",
                    Type: "UICorner",
                    CornerRadius: {
                        S: 1,
                        O: 0,
                    }
                }
            ],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.BackgroundTransparency = Parent.GroupOpacity * Properties.BackgroundTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["TEXT"]: (Element, Parent) => {
        /*
            === WARNING ===

            Some fonts are not supported by Roblox.

            If you don't see the text in Roblox, check the following:

                Check the output for a message saying "Temp read failed"
                if FontFace says "Temp read failed."" This means the font is not supported. (in a red boarder)
                if FontFace/Weight says "(unavailable)" This means the font style is not supported.
        */

                console.log(Element)
        var Properties = {
            Class: "TextLabel",
            Type: Element.type,
            Name: Element.name,
            AutomaticSize: Element.textAutoResize === "HEIGHT" ? 2 : Element.textAutoResize === "WIDTH" ? 1 : 0,
            TextWrapped: Element.textAutoResize === "HEIGHT",
            BackgroundTransparency: 0,
            BorderSizePixel: 0,
            TextTransparency: Element.opacity,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            TextSize: Element.fontSize == figma.mixed ? 0 : Element.fontSize,
            TextXAlignment: Element.textAlignHorizontal,
            TextYAlignment: Element.textAlignVertical,
            Text: Element.characters,
            Rotation: Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.TextTransparency = Parent.GroupOpacity * Properties.TextTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (PropertyTypes["exportSettings"](Element, Properties) === false) {
            for (const Property in Element) {
                if (Property in PropertyTypes) {
                    if (Property === "exportSettings") continue; // Already done
                    if (PropertyTypes[Property](Element, Properties) === false) return false;
                }
            }
        }

        return Properties;
    },
    ["OTHER"]: (Element, Parent) => {
        var Properties = {
            Class: "ImageLabel",
            Type: Element.type,
            Name: Element.name,
            BackgroundTransparency: 0,
            ImageTransparency: Element.opacity,
            Visible: Element.visible,
            Position: {
                X: Element.x,
                Y: Element.y
            },
            Size: {
                X: Element.width,
                Y: Element.height
            },
            Rotation: Element.rotation,
            Children: [],
            Parent: Parent,
            Element: Element,
        }

        if (Parent !== undefined) {
            if (Parent.GroupOpacity !== undefined) Properties.ImageTransparency = Parent.GroupOpacity * Properties.ImageTransparency; // maths :)
            if (Parent._OriginalPosition !== undefined) {
                Properties.Position.X -= Parent._OriginalPosition.X;
                Properties.Position.Y -= Parent._OriginalPosition.Y;
            }
        }

        if (Element["children"]) PropertyTypes["children"](Element, Properties);

        ExportImage(Element, Properties);

        return Properties;
    }
}

// ^^ Couldn't get this to work, so I just copied the code from Conversions.js

function CreateRobloxElement(Properties) { // Creates the roblox xml for the element
    var XML = "";

    function ExtendXML(String) {
        XML += String;
    }

    const oldClass = Properties.Class + "";

    const propertyName = Properties.Name ? Properties.Name : ""
    let includedInstanceName
    for (const name of INSTANCE_NAMES) {
        if (propertyName.includes(name)) {
            includedInstanceName = name
            break
        }
    }

    if (includedInstanceName) {
        Properties.Class = includedInstanceName
        Properties.Name = Properties.Name.replace(` ${includedInstanceName}`, "")
        Properties.Name = Properties.Name.replace(includedInstanceName, "")
    }

    ExtendXML(`<Item class="${Properties.Class}" referent="RBX0">`);
    ExtendXML(`<Properties>`);

    Properties.Class = oldClass

    // Add properties

    ExtendXML(`<string name="Name">${(Properties.Name || Properties.Class || "Unknown").replace("\n", "")}</string>`);



    if (Properties.BackgroundColor3 !== undefined) {
        var Colour = Properties.BackgroundColor3;

        for (const Property in Colour) {
            Colour[Property] = LimitDecimals(Colour[Property], 6);
        }

        ExtendXML(`<Color3 name="BackgroundColor3"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
    }

    if (Properties.TextColor3 !== undefined) {
        var Colour = Properties.TextColor3;

        for (const Property in Colour) {
            Colour[Property] = LimitDecimals(Colour[Property], 6);
        }

        ExtendXML(`<Color3 name="TextColor3"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
    }

    if (Properties.Colour !== undefined) {
        var Colour = Properties.Colour;

        if (Colour["R"] !== undefined) {
            for (const Property in Colour) {
                Colour[Property] = LimitDecimals(Colour[Property], 6);
            }

            ExtendXML(`<Color3 name="Color"><R>${Colour.R}</R><G>${Colour.G}</G><B>${Colour.B}</B></Color3>`);
        } else {
            var ColourSeq = "";
            var Previous;

            for (var i = 0; i < Colour.length; i++) {
                const ColourStop = Colour[i];
                var ColourVal = ColourStop.Colour;

                for (const Property in ColourVal) {
                    ColourVal[Property] = LimitDecimals(ColourVal[Property], 6);
                }

                if (i === 0 && ColourStop.TimePosition !== 0) ColourSeq += `0 ${ColourVal.R} ${ColourVal.G} ${ColourVal.B} 0 `; // Add the first keyframe (if it doesn't exist

                Previous = ColourStop;
                ColourSeq += `${ColourStop.TimePosition} ${ColourVal.R} ${ColourVal.G} ${ColourVal.B} 0 `;
            }

            if (Previous.TimePosition !== 1) ColourSeq += `1 ${Previous.Colour.R} ${Previous.Colour.G} ${Previous.Colour.B} 0 `; // Add the last keyframe (if it doesn't exist)

            ExtendXML(`<ColorSequence name="Color">${ColourSeq}</ColorSequence>`);
        }
    }

    if (Properties.Transparency !== undefined) {
        const Transparency = Properties.Transparency;

        if (!Array.isArray(Transparency)) ExtendXML(`<float name="Transparency">${1 - LimitDecimals(Properties.Transparency, 3)}</float>`);
        else {
            var NumberSequence = "";
            var Previous;

            for (var i = 0; i < Transparency.length; i++) {
                var TransparencyStop = Transparency[i];

                if (i === 0 && TransparencyStop.TimePosition !== 0) NumberSequence += `0 ${LimitDecimals(TransparencyStop.Transparency, 3)} 0 `; // Add the first keyframe (if it doesn't exist

                Previous = TransparencyStop;
                NumberSequence += `${TransparencyStop.TimePosition} ${LimitDecimals(TransparencyStop.Transparency, 3)} 0 `;
            }

            if (Previous.TimePosition !== 1) NumberSequence += `1 ${Previous.Transparency} 0 `; // Add the last keyframe (if it doesn't exist)

            ExtendXML(`<NumberSequence name="Transparency">${NumberSequence}</NumberSequence>`);
        }
    }

    if (Properties.Size !== undefined) {
        var Size = Properties.Size;
        ExtendXML(`<UDim2 name="Size"><XS>0</XS><XO>${LimitDecimals(Size.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Size.Y, 0)}</YO></UDim2>`);
    }

    if (Properties.Rotation !== undefined && Properties.Rotation !== 0) {
        ExtendXML(`<float name="Rotation">${LimitDecimals(Properties.Rotation, 3)}</float>`);

        if (Properties.Position !== undefined && Properties.Size !== undefined) {
            var Size = Properties.Size;
            var BoundingBox = Properties.Element.absoluteBoundingBox;

            Properties.Position = {
                X: BoundingBox.x + ((BoundingBox.width - Size.X) / 2),
                Y: BoundingBox.y + ((BoundingBox.height - Size.Y) / 2)
            }
        }
    }

    if (Properties.Position !== undefined) {
        var Position = Properties.Position;
        ExtendXML(`<UDim2 name="Position"><XS>0</XS><XO>${LimitDecimals(Position.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Position.Y, 0)}</YO></UDim2>`);
    }

    if (Properties.FillDirection !== undefined) ExtendXML(`<token name="FillDirection">${Properties.FillDirection}</token>`);
    if (Properties.HorizontalAlignment !== undefined) ExtendXML(`<token name="HorizontalAlignment">${Properties.HorizontalAlignment}</token>`);
    if (Properties.VerticalAlignment !== undefined) ExtendXML(`<token name="VerticalAlignment">${Properties.VerticalAlignment}</token>`);
    if (Properties.CellSize) ExtendXML(`<UDim2 name="CellSize"><XS>0</XS><XO>${LimitDecimals(Properties.CellSize.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Properties.CellSize.Y, 0)}</YO></UDim2>`);
    if (Properties.CellPadding) ExtendXML(`<UDim2 name="CellPadding"><XS>0</XS><XO>${LimitDecimals(Properties.CellPadding.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Properties.CellPadding.Y, 0)}</YO></UDim2>`);

    if (Properties.PaddingBottom) ExtendXML(`<UDim name="PaddingBottom"><S>0</S><O>${LimitDecimals(Properties.PaddingBottom, 0)}</O></UDim>`);
    if (Properties.PaddingTop) ExtendXML(`<UDim name="PaddingTop"><S>0</S><O>${LimitDecimals(Properties.PaddingTop, 0)}</O></UDim>`);
    if (Properties.PaddingLeft) ExtendXML(`<UDim name="PaddingLeft"><S>0</S><O>${LimitDecimals(Properties.PaddingLeft, 0)}</O></UDim>`);
    if (Properties.PaddingRight) ExtendXML(`<UDim name="PaddingRight"><S>0</S><O>${LimitDecimals(Properties.PaddingRight, 0)}</O></UDim>`);

    if (Properties.AutomaticSize !== undefined) ExtendXML(`<token name="AutomaticSize">${Properties.AutomaticSize}</token>`);
    if (Properties.BackgroundTransparency !== undefined) ExtendXML(`<float name="BackgroundTransparency">${1 - LimitDecimals(Properties.BackgroundTransparency, 3)}</float>`);
    if (Properties.Thickness !== undefined) ExtendXML(`<float name="Thickness">${LimitDecimals(Properties.Thickness, 0)}</float>`);
    if (Properties.LineJoinMode !== undefined) ExtendXML(`<Enum name="LineJoinMode">${LineJoinModes.indexOf(Properties.LineJoinMode)}</Enum>`);
    if (Properties.CornerRadius !== undefined) ExtendXML(`<UDim2 name="CornerRadius"><S>${LimitDecimals(Properties.CornerRadius.S, 0)}</S><O>${LimitDecimals(Properties.CornerRadius.O, 0)}</O></UDim2>`);
    if (Properties.BorderSizePixel !== undefined) ExtendXML(`<int name="BorderSizePixel">${LimitDecimals(Properties.BorderSizePixel, 0)}</int>`);
    if (Properties.ClipsDescendants !== undefined) ExtendXML(`<bool name="ClipsDescendants">${Properties.ClipsDescendants}</bool>`);
    if (Properties.TextTransparency !== undefined) ExtendXML(`<float name="TextTransparency">${1 - Properties.TextTransparency}</float>`);
    if (Properties.TextSize !== undefined) ExtendXML(`<int name="TextSize">${LimitDecimals(Properties.TextSize, 0)}</int>`);
    if (Properties.Text !== undefined) ExtendXML(`<string name="Text">${Properties.Text}</string>`);
    if (Properties.TextWrapped !== undefined) ExtendXML(`<bool name="TextWrapped">${Properties.TextWrapped}</bool>`);
    if (Properties.TextScaled !== undefined) ExtendXML(`<bool name="TextScaled">${Properties.TextScaled}</bool>`);
    if (Properties.TextStrokeTransparency !== undefined) ExtendXML(`<float name="TextStrokeTransparency">${1 - Properties.TextStrokeTransparency}</float>`);
    if (Properties.TextStrokeColor3 !== undefined) ExtendXML(`<Color3 name="TextStrokeColor3"><R>${LimitDecimals(Properties.TextStrokeColor3.R, 3)}</R><G>${LimitDecimals(Properties.TextStrokeColor3.G, 3)}</G><B>${LimitDecimals(Properties.TextStrokeColor3.B, 3)}</B></Color3>`);
    if (Properties.TextXAlignment !== undefined) ExtendXML(`<token name="TextXAlignment">${TextXAlignments.indexOf(Properties.TextXAlignment)}</token>`);
    if (Properties.TextYAlignment !== undefined) ExtendXML(`<token name="TextYAlignment">${TextYAlignments.indexOf(Properties.TextYAlignment)}</token>`);
    if (Properties.Font !== undefined) {
        const Font = Fonts[Properties.Font.Style] || Fonts["Regular"];
        const fontFamily = Properties.Font.Family.replace(/\s/g, '');
        ExtendXML(`<Font name="FontFace"><Family><url>rbxasset://fonts/families/${fontFamily}.json</url></Family><Weight>${Font.Weight}</Weight><Style>${Font.Style}</Style></Font>`);
    }
    if (Properties.RichText !== undefined) ExtendXML(`<bool name="RichText">${Properties.RichText}</bool>`);
    if (Properties.UploadId !== undefined && ImageExports[Properties.UploadId] !== undefined) ExtendXML(`<string name="Image"><url>${ImageExports[Properties.UploadId].ImageId}</url></string>`); // Image is exported
    else if (Properties.Image !== undefined) ExtendXML(`<string name="Image">${Properties.Image}</string>`); // Image is not exported
    if (Properties.ImageTransparency !== undefined) ExtendXML(`<float name="ImageTransparency">${1 - LimitDecimals(Properties.ImageTransparency, 3)}</float>`);
    //if (Properties.Position !== undefined) ExtendXML(`<UDim2 name="Position"><XS>0</XS><XO>${LimitDecimals(Properties.Position.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Properties.Position.Y, 0)}</YO></UDim2>`);
    //if (Properties.Size !== undefined) ExtendXML(`<UDim2 name="Size"><XS>0</XS><XO>${LimitDecimals(Properties.Size.X, 0)}</XO><YS>0</YS><YO>${LimitDecimals(Properties.Size.Y, 0)}</YO></UDim2>`);
    //if (Properties.Rotation !== undefined) ExtendXML(`<float name="Rotation">${LimitDecimals(Properties.Rotation, 3)}</float>`);
    if (Properties.Visible !== undefined) ExtendXML(`<bool name="Visible">${Properties.Visible}</bool>`);
    if (Properties.Enabled !== undefined) ExtendXML(`<bool name="Enabled">${Properties.Enabled}</bool>`);

    // End of properties

    ExtendXML("</Properties>");

    // Add children
    if (Properties.Children !== undefined && Properties.Children.length > 0 && Properties.NoChildren === undefined) {
        for (var i = 0; i < Properties.Children.length; i++) {
            ExtendXML(CreateRobloxElement(Properties.Children[i], i));
        }
    }

    return XML + "</Item>";
}

function ConvertToRoblox(Objects) { // Converts the code into roblox xml format
    var XML = '<!--\n\tGenerated by Figma to Roblox\n\tReport any bugs/issues to NoTwistedHere#6703\n-->\n\n<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><Meta name="ExplicitAutoJoints">true</Meta>';

    for (var i = 0; i < Objects.length; i++) {
        XML += CreateRobloxElement(Objects[i]);
    }

    return XML + '</roblox>';
}

function GetMainProperties(Object, Parent) {
    if (ElementTypes[Object.type] !== undefined) {
        return ElementTypes[Object.type](Object, Parent);
    } else return ElementTypes["OTHER"](Object, Parent);

    //return QuickClose(`Unsupported element type '${Object.type}' for: ${Object.name}`);
}

async function RunPlugin() {
    // Get selected elements

    var SelectedElements = figma.currentPage.selection;

    if (SelectedElements.length == 0) {
        return QuickClose("No elements selected");
    }

    // Get main properties

    Notify("Converting...")

    var Objects = [];

    for (var i = 0; i < SelectedElements.length; i++) {
        Objects.push(GetMainProperties(SelectedElements[i]));
    }

    Notify("Uploading Images...")

    while (QueuedImages > 0) await new Promise(resolve => setTimeout(resolve, 250));

    Notify("Formatting...");

    var XML = ConvertToRoblox(Objects);

    Objects = null;

    if (XML === false) {
        return;
    }

    figma.ui.postMessage({
        type: "Download",
        data: XML
    });
    XML = null;

    Notify("Successfully converted!");
}

figma.showUI(__html__);

figma.ui.onmessage = msg => {
    switch (msg.type) {
        case "exec":
            try {
                RunPlugin();
            } catch (e) {
                if (!HandledError) {
                    throw e;
                }

                console.warn(e);
            }
            break;
        case "close-plugin":
            figma.closePlugin();
            break;
        case "SetAsync":
            figma.clientStorage.setAsync(msg.key, msg.value);
            break;
        case "FetchAsync":
            figma.clientStorage.keysAsync().then(keys => {
                for (var i = 0; i < keys.length; i++) {
                    const Key = keys[i];
                    figma.clientStorage.getAsync(Key).then(value => {
                        figma.ui.postMessage({
                            type: "GetAsync",
                            data: {
                                key: Key,
                                value: value
                            }
                        });
                    });
                }
            });
            break;
        case "image-upload-success":
            ImageExports[msg.data.UploadId].ImageId = "rbxassetid://" + msg.data.response.assetId;
            QueuedImages--;
            break;
        case "image-upload-fail":
            QueuedImages--;
            console.warn(`Failed to upload image`);
            break;
    }
}
