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
        Better ui (DONE?)
        Update that damn README
        Remove the old/unneeded todos
        [Clip] Masks (i.e. VECTOR masks - liklely requires being converted to an img)
        Add a help page in the plugin, containing tips & guidance
        Look into automatically converting layout mode into scrolling frames?
        Add a way to disable/enable uploading effects on frames
*/

const Conversions = require('./Conversions.js');
const { Flags, NotifyError, Notify } = require('./Utilities.js');
const { GetNodeProperties, XMLTypes, Settings, UpdateImage, UpdateOperationId, GetImageFromOperation, IsDone } = require('./Converters.js');
const HighlightNodes = require("./Flags/HighlightNodes.js");

var RunDebounce = false;

function ConvertObject(Properties, ParentObject) {
    var XML = ""

    for (var [Key, Value] of Object.entries(Properties)) {
        if (Value == null || Value == undefined) continue;

        switch (Key) {
            case "Node":
            case "Children":
            case "Class":
            case "_IsButton":
            case "_HasGradient":
            case "_HasCorners":
            case "_HasStroke":
                break;
            case "ScaleType":
            case "DominantAxis":
            case "AspectType":
            case "TextTruncate":
            case "TextXAlignment":
            case "TextYAlignment":
            case "HorizontalAlignment":
            case "VerticalAlignment":
            case "SortOrder":
            case "FillDirection":
            case "LineJoinModes":
            case "ScrollingDirection":
            case "MarketplaceFonts":
            case "AutomaticCanvasSize":
                XML += XMLTypes.token(Key, Value)
                break;
            case "Text":
                XML += XMLTypes.cdata(Key, Value)
                break;
            case "Image":
                XML += XMLTypes.content(Key, Value)
                break;
            case "BackgroundTransparency":
            case "Transparency": //can be either a number OR NumberSequence
            case "TextStrokeTransparency":
            case "TextTransparency":
            case "ImageTransparency":
                // Should always be parented to a group as only groups and sections allow children
                if (typeof(Value) == "number") {
                    Value = Properties._Transparency * Value;
                    XML += XMLTypes.number(Key, 1 - Value, false, 10000);
                    break;
                } else if (Value[0] && Value[0].Transparency !== undefined) {
                    var Sequence = ""

                    Value.forEach(Stop => {
                        Sequence += `${Stop.TimePosition} ${Stop.Transparency} 0 `;
                    });
                    XML += `<NumberSequence name="${Key}">${Sequence}</NumberSequence>`
                    break;
                }
            case "TextSize":
                XML += XMLTypes.number(Key, Value * Flags.TextSizeAdjustment, false, 20);
                break;
            case "Rotation":
                if (ParentObject && ParentObject.Rotation) {
                    Value = Value - ParentObject.Rotation
                }

                XML += XMLTypes.number(Key, Value, false, 1000);
                break;
            default:
                if (Key.substring(0, 1) == "_") break;

                if (XMLTypes[typeof(Value)]) XML += XMLTypes[typeof(Value)](Key, Value);
                break;
        }
    }

    return XML
}

function LoopChildren(Children, ParentObject) {
    var New2 = "";

    Children.forEach(Child => {
        var XMLProperties = ConvertObject(Child, ParentObject);

        New2 += `<Item class="${Child.Class}" referent="RBX0">\n${Child.Children ? LoopChildren(Child.Children) : ""}<Properties>\n${XMLProperties}\n</Properties></Item>\n`
    });

    return New2
}

function LoopNodes(Nodes, ParentObject) {
    let FileContent = "";
    let LocalLayoutOrder = 0;

    const SortedNodes = []

    //if (ParentObject) {
        for (var i = 0; i < Nodes.length; i++) {
            const Node = Nodes[i];

            if (Node && Node.name) {
                if (Node.name.toLowerCase() === Flags.GroupBackgroundFrameName) {
                    SortedNodes[i] = SortedNodes[0];
                    SortedNodes[0] = Node;
                } else SortedNodes[i] = Node;
            }
        }
    //}

    // Loop Nodes
    for (var i = 0; i < SortedNodes.length; i++) {
        const Node = SortedNodes[i];
        if (Flags.IgnoreInvisible && !Node.visible) continue;

        const Properties = GetNodeProperties(Node, Settings, ParentObject); // Can't name it Object because of below v

        //console.log("Props:", Properties, "Parent:", ParentObject)
        //console.log("Node:", Node);
        if (!Properties) continue;
        Properties._OriginalNode = Node;
        if (Settings.ApplyLayoutOrder) {
            Properties.LayoutOrder = LocalLayoutOrder;
            LocalLayoutOrder += 1;
        }

        if (Node.type === "BOOLEAN_OPERATION") { // No ~Temp added as a NodeType & create as if a group
            figma.notify("Boolean Operations may give undesired results", {timeout: 1800})
            // Booleans are treated as groups
            // FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
            // FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + LoopNodes(Node.children, Properties);
            // FileContent += "</Item>\n";
        }

        // Calculate Aspect Ratio and Scale
        if (Properties._ApplyAspectRatio || Flags.ApplyAspectRatio) {
            if (Properties.Class === "ScrollingFrame") console.warn("Cannot Apply UIAspectRatioConstraint to a ScrollingFrame that scrolls")
            else {
                var AspectRatio = Math.round((Properties.Size.XO / Properties.Size.YO) * 100000) / 100000;

                if (Node.width != 0 && Node.height != 0 && AspectRatio) {
                    Properties.Children.push({
                        Class: "UIAspectRatioConstraint",
                        AspectRatio: AspectRatio,
                        AspectType: 0,
                        DominantAxis: Properties.Size.XO > Properties.Size.YO ? 0 : 1
                    });
                }
            }
        }

        const lowercaseName = Properties.Name.toLowerCase();
        const removeNameAbriv = lowercaseName.match("btn") || lowercaseName.match("scrl");

        if (lowercaseName.match(/\|anchor/)) {
            Properties._ApplyAnchorPoint = true;
            Properties.Name = Properties.Name.replace(/\|anchor/i, "");
        }

        if (ParentObject && (lowercaseName == Flags.GroupBackgroundFrameName /*|| (
            Node.type === "RECTANGLE" && Properties.BackgroundTransparency == 0
            && Properties.Position.XO == ParentObject.Position.XO
            && Properties.Position.YO == ParentObject.Position.YO
            && Properties.Size.XO == ParentObject.Size.XO
            && Properties.Size.YO == ParentObject.Size.YO)
        */)) { // Convert parent object into the new background
            Object.entries(Properties).forEach(([key, value]) => {
                if (key.match("^_")) ParentObject[key] = value;
            });
            //ParentObject._HasGradient = Properties._HasGradient;
            //ParentObject._HasCorners = Properties._HasCorners;

            ParentObject.BackgroundColor3 = Properties.BackgroundColor3;
            ParentObject.BackgroundTransparency = Properties.BackgroundTransparency;
            ParentObject.BorderSizePixel = Properties.BorderSizePixel;
            ParentObject.Image = Properties.Image;
            //ParentObject.Rotation = Properties.Rotation; // this now looks like a bad idea

            if (Properties.Class !== "Frame") ParentObject.Class = Properties.Class;
            Properties._ReplacedBy = ParentObject;

            if (Properties.Children) {
                FileContent += LoopChildren(Properties.Children, Properties);
            }

            continue;
        } else if (removeNameAbriv && removeNameAbriv[0] === "btn" || lowercaseName.match("button")) {
            if (removeNameAbriv) Properties.Name = Properties.Name.replace(/btn/i, "");

            if (ParentObject && ParentObject._IsButton) { // update parent button
                console.log("parent is button, we is", Properties.Class, Properties._HasGradient, Properties._hasExport, ParentObject._HasGradient, ParentObject._hasExport);
                if (Properties.Class === "TextLabel") {
                    // if the parent object meets certain criteria (listed below) then we should keep the TextLabel within the button and remove the TextButton's text
                    // No (Background/Text) Gradient
                    // Must be TextButton

                    if ((!Properties._hasExport || Properties._HasGradient !== true) && ParentObject._HasGradient !== true) {
                        ParentObject.Class = "TextButton"

                        // if the text button (background) has a stroke, it cadnnot be Contextual otherwise it will apply to the text
                        ParentObject.Children.forEach(Child => {
                            if (Child.Class === "UIStroke") {
                                Child.ApplyStrokeMode = Conversions.indexOf("Border");
                            }
                        })

                        Object.entries(Properties).forEach(([key, value]) => {
                            if (key.match("^Text")) ParentObject[key] = value
                        })

                        ParentObject.FontFace = Properties.FontFace

                        // if (Properties.Children) {
                        //     FileContent += LoopChildren(Properties.Children, ParentObject)
                        // }

                        //ParentObject.Text = Properties.Text

                        //continue;
                    } else {
                        console.log("TextLabel doesn't meet criteria to update parent TextButton")
                    }
                } else if (Properties.Class === "ImageLabel" || Properties.Class === "ImageButton") {
                    if ((Properties._hasExport || Properties._HasGradient !== true) && ParentObject._HasGradient !== true) {
                        ParentObject.Class = "ImageButton"

                        if (Properties.EffectRadius) {
                            ParentObject.EffectRadius = ParentObject.EffectRadius ? clamp(ParentObject.EffectRadius, Properties.EffectRadius.X, Properties.EffectRadius.Y) : Properties.EffectRadius;
                        }

                        Object.entries(Properties).forEach(([key, value]) => {
                            if (key.match("^Image")) ParentObject[key] = value
                        })
                        continue;
                    } else {
                        console.log("ImageLabel doesn't meet criteria to update parent ImageButton")
                    }
                }
            } else if (Properties.Class === "Frame" || Properties.Class === "ImageLabel" || Properties.Class === "TextLabel") {
                Properties._IsButton = true;

                if (Properties.Class === "ImageLabel") Properties.Class = "ImageButton"
                else /*if (Properties.Class === "TextLabel")*/ {
                    // Remove text from non-TextLabels (Frames, Groups, Components, Instances)
                    if (Properties.Class !== "TextLabel") {
                        Properties.Text = "";
                        Properties.TextSize = 0;
                        Properties.TextTransparency = 1;
                    };

                    Properties.Class = "TextButton";
                }
            } else console.warn(`[Figma to Roblox] FAILED to convert element "${Properties.Name}" into a button as class "${Properties.Class}" is none of the following: Frame, ImageLabel, TextLabel`)
        } else if (removeNameAbriv && removeNameAbriv[0] === "scrl" || lowercaseName.match("scroll")) {  // Convert to Scrolling Frame
            if (removeNameAbriv) Properties.Name = Properties.Name.replace(/scrl/i, "");

            if (Node.type !== "FRAME" && Node.type !== "GROUP" && Node.Type !== "COMPONENT" && Node.Type !== "INSTANCE") {
                console.warn("[Figma to Roblox] Cannot convert a non-Group/Frame to a ScrollingFrame");
            } else {
                Properties.Class = "ScrollingFrame"
                Properties.CanvasSize = {
                    XS: 0,
                    XO: 0,
                    YS: 0,
                    YO: 0,
                }

                var ListDirection = "XY"

                Properties.Children.forEach((Child) => {
                    if (Child.Class == "UIListLayout") {
                        ListDirection = Child.FillDirection === "HORIZONTAL" ? "X" : "Y"
                    }
                })

                Properties.AutomaticCanvasSize = Conversions.AutomaticCanvasSize.indexOf(ListDirection) // Should prefrebly be either or
                Properties.ScrollingEnabled = true
                Properties.Interactable = true
                Properties.Selectable = true
                Properties.ScrollingDirection =  Conversions.ScrollingDirection.indexOf(ListDirection)  // Should prefrebly be either or
                Properties.VerticalScrollBarInset = 0 //Conversions.ScrollBarInset.indexOf("SCROLLBAR")
                Properties.HorizontalScrollBarInset = 0 //Conversions.ScrollBarInset.indexOf("SCROLLBAR")
            }
        }

        // Misc
        var New = "";

        if (!Properties._hasExport) {
            if (Properties.Children) {
                New += LoopChildren(Properties.Children, ParentObject);
            }
            // Loop all Node Children
            if ((Properties._hasExport || !Properties.Image) && Node.children) New += LoopNodes(Node.children, Properties);
        }

        const ConvertAnchorPoint = function(SizeX, SizeY) {
            var AX = (Properties.Position.XO + Properties.Size.XO / 2) / SizeX;
            var AY = (Properties.Position.YO + Properties.Size.YO / 2) / SizeY;

            if (!isNaN(AX) && !isNaN(AY)) {
                if (Flags.SnapAnchorPoint) {
                    const Snap = Flags.SnapAnchorPoint == true ? 0.5 : Flags.SnapAnchorPoint;

                    AX = Math.round(AX / Snap) * Snap;
                    AY = Math.round(AY / Snap) * Snap;
                }

                Properties.AnchorPoint = {
                    X: AX,
                    Y: AY
                }

                Properties.Position.YO += Properties.Size.YO * AY;
                Properties.Position.XO += Properties.Size.XO * AX;
            }
        }

        if (ParentObject) {
            if (ParentObject._OriginalPosition && ParentObject.Node.type !== "FRAME" && ParentObject.Node.type !== "INSTANCE" && ParentObject.Node.type !== "COMPONENT") {
                // Get Position relative to Parent
                Properties.Position.XO = Properties.Position.XO - ParentObject._OriginalPosition.XO;
                Properties.Position.YO = Properties.Position.YO - ParentObject._OriginalPosition.YO;
            }

            const PSX = ParentObject.Size.XO;
            const PSY = ParentObject.Size.YO;
            // Convert Anchor Point
            if (Flags.ApplyAnchorPoint || Properties._ApplyAnchorPoint) ConvertAnchorPoint(PSX, PSY);

            // Convert Offset (Pixels) to Scale
            if (Flags.ConvertOffsetToScale) {
                Properties.Position.XS = Properties.Position.XO / PSX;
                Properties.Position.YS = Properties.Position.YO / PSY;
                Properties.Size.XS = Properties.Size.XO / PSX;
                Properties.Size.YS = Properties.Size.YO / PSY;

                if (Flags.ScrollFrame_ScaleDominantAxis && ParentObject.Class === "ScrollingFrame") {
                    if (Properties.Size.XS < Properties.Size.YS) { // X is smaller than Y
                        Properties.Size.XS = 0; // remove X scale, keep offset
                        Properties.Size.YO = 0; //remove Y offset, keep scale
                    } else { // Y is smaller or equal to X
                        Properties.Size.YS = 0; // remove Y scale, keep offset
                        Properties.Size.XO = 0; // remove X offset, keep scale
                    }
                } else {
                    // Properties.Position.XO = 0;
                    // Properties.Position.YO = 0;
                    Properties.Size.XO = 0;
                    Properties.Size.YO = 0;
                }

                // if (Flags.OffsetFromScale) {
                //     console.warn("Offset from Scale is a work in progress, expect issues")
                //     // WIP
                //     // Split into 3, Round to nearest
                //     var PXS = Properties.Position.XS;

                //     const AX = Properties.AnchorPoint ? Properties.AnchorPoint.X : 0;
                //     const AY = Properties.AnchorPoint ? Properties.AnchorPoint.Y : 0;

                //     if (PXS <= 0.45) PXS = 0;
                //     else if (PXS <= 0.55) PXS = 0.5;
                //     else if (PXS <= 1) {
                //         PXS = 1;
                //         //Properties.Position.XO = Properties.Position.XO - PSX;
                //     };

                //     Properties.Position.XS = PXS;

                //     // Repeat for Y
                //     var PYS = Properties.Position.YS;

                //     if (PYS <= 0.45) PYS = 0;
                //     else if (PYS <= 0.55) PYS = 0.5;
                //     else if (PYS <= 1) {
                //         PYS = 1;
                //         //Properties.Position.YO = Properties.Position.YO - PSY;
                //     };

                //     Properties.Position.YS = PYS;
                //     Properties.Position.XO -= ((PSX - Properties.Size.X * AX) * PXS);
                //     Properties.Position.YO -= ((PSY - Properties.Size.Y * AY) * PYS);
                // } else {
                     Properties.Position.XO = 0;
                     Properties.Position.YO = 0;
                // }
            }
        } else if (!Flags.UseSelectionPositionRelativeToScene) {
            // Set Position of upmost Element (most likely a Group) to (0,0)
            Properties.Position.XO = 0; //-= Node.x;
            Properties.Position.YO = 0; //-= Node.y;
        } else if (Node.parent && Node.parent.type !== "PAGE") {
            // Convert user-selected frame to scale
            if (Flags.ApplyAnchorPoint || Properties._ApplyAnchorPoint) ConvertAnchorPoint(Node.parent.width, Node.parent.height);

            if (Flags.ConvertOffsetToScale) {
                const PSX = Node.parent.width
                const PSY = Node.parent.height

                //console.log(Properties.Position, "X:", PSX, "Y:", PSY)
                Properties.Position.XS = Properties.Position.XO / PSX
                Properties.Position.YS = Properties.Position.YO / PSY
                Properties.Size.XS = Properties.Size.XO / PSX;
                Properties.Size.YS = Properties.Size.YO / PSY;

                Properties.Position.XO = 0;
                Properties.Position.YO = 0;
                Properties.Size.XO = 0;
                Properties.Size.YO = 0;
            }
        }

        // Adjust element Size & Position to account for effects
        if (Properties.EffectRadius) {
            const EffectRadius = Properties.EffectRadius;
            EffectRadius.X *= 2;
            EffectRadius.Y *= 2;

            Properties.Position.XO += (Properties.AnchorPoint.X - 0.5) * EffectRadius.X;
            Properties.Position.YO += (Properties.AnchorPoint.Y - 0.5) * EffectRadius.Y;
            Properties.Size.XO += EffectRadius.X;
            Properties.Size.YO += EffectRadius.Y;


            /*const CornerRadiusOffset = Node.cornerRadius && Node.cornerRadius !== figma.mixed ? Node.cornerRadius * 2 : 0;
            const X = EffectRadius.X + CornerRadiusOffset;
            const Y = EffectRadius.Y + CornerRadiusOffset;

            const SizeX = Properties.Size.XS * Node.parent.width
            const SizeY = Properties.Size.YS * Node.parent.height

            // Compare image size and frame/node size?

            Properties.ScaleType = 1;
            Properties.SliceCenter = {
                X0: X, // Left
                Y0: Y, // Top
                X1: SizeX - X, // Right
                Y1: SizeY - Y, // Bottom,
            }

            console.log(X, Y);
            console.log(Properties.SliceCenter, SizeX, SizeY)
            */
        }

        // Convert to XML
        FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
        FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + New;
        FileContent += "</Item>\n";
        New = null;
    }

    return FileContent
}

function CreatePreset(Preset) {
    const CenterOfScreen = figma.viewport.center;
    var SizeX;
    var SizeY;

    switch (Preset) {
        case "Full HD":
            SizeX = 1920;
            SizeY = 1080;
            break;
        case "2K":
            SizeX = 2048;
            SizeY = 1440;
            break;
        case "1440p":
            SizeX = 2560;
            SizeY = 1440;
            break;
        case "4K":
            SizeX = 3840;
            SizeY = 2160;
            break;
        default:
            return NotifyError("Preset doesn't exist");
    }

    const Frame = figma.createFrame();
    Frame.x = CenterOfScreen.x - SizeX / 2;
    Frame.y = CenterOfScreen.y - SizeY / 2;
    Frame.resize(SizeX, SizeY);
    Frame.lockAspectRatio();
    Frame.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
    Frame.name = `${Preset} (${SizeX}x${SizeY})`
    Frame.setRelaunchData({
        "export": "Export with FigmaToRoblox"
    });
}

async function RunPlugin() { // this is technecally a codegen plugin?
    if (RunDebounce) return;
    if (figma.currentPage.selection.length == 0) return NotifyError("No Nodes selected");

    RunDebounce = true
    console.log("[FTR] Starting");
    Notify("Figma to roblox is exporting, support can be found at https://discord.gg/DWCGss4vry", { timeout: 12000 })

    // Start Converting Nodes
    let FileContent = '<!--\n\tGenerated by Figma to Roblox\n\tReport any bugs/issues to notwistedhere on discord/github\n-->\n\n<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><Meta name="ExplicitAutoJoints">true</Meta>\n';
    let Nodes;
    try {
        Nodes = LoopNodes(figma.currentPage.selection);

        // wait for all images to be uploaded
        await new Promise((resolve, reject) => {
            function Timeout() {
                if (IsDone()) return resolve();
                else setTimeout(Timeout, 500);
            }

            Timeout()
        })
    } catch (e) {
        NotifyError("Figma to Roblox experienced an unexpected error, please make a bug report in discord https://discord.gg/DWCGss4vry;" + e);
    }

    if (Nodes) {
        try {
            const ImageOperations = Nodes.replaceAll(/{FTR_([0-9a-zA-Z -:]+)}/g, (_, Id) => {
                var ExportedImage = GetImageFromOperation(Id);
                return ExportedImage.Properties.Image;
            });

            FileContent += ImageOperations + "</roblox>";

            figma.ui.postMessage({
                type: "Download",
                data: FileContent
            });

            Notify("Successfully exported");
        } catch (e) {
            NotifyError("Figma to Roblox experienced an unexpected error, please make a bug report in discord https://discord.gg/DWCGss4vry;" + e);
        }
    }
    console.log("[FTR] Done");

    setTimeout(() => {
        RunDebounce = false
    }, 2500)
    //RunDebounce = false

}

figma.skipInvisibleInstanceChildren = true;
figma.on("close", () => {
    HighlightNodes.stop();
});

const ImageUploadErrorSuggestions = {
    "PERMISSION_DENIED": "Ensure Uploader Type (User or Group), Id and API Key are correct and active"
}

figma.ui.onmessage = msg => {
    switch (msg.type) {
        case "run":
            RunPlugin();
            break;
        case "UpdateOperationId":
            UpdateOperationId(msg);
            break;
        case "ImageUploaded":
            UpdateImage(msg);
            break;
        case "AbortUpload":
            UpdateImage(undefined, true);
            break;
        case "UploadError":
            const Suggestion = ImageUploadErrorSuggestions[msg.code];
            const ErrorMsg = msg.code ? msg.code + ': ' + msg.message : msg.message;

            NotifyError(`FAILED to upload image, got error ${ErrorMsg}${Suggestion ? ",\r\n" + Suggestion : ""}. Help can found in discord server https://discord.gg/DWCGss4vry`, false, {
                timeout: 5000,
                error: true,
            });
            break;
        case "Notify":
            if (msg.error) NotifyError(msg.message);
            else Notify(msg.message);
            break;
        case "SetAsync":
            if (msg.value === null || msg.value === undefined) return;
            if (Settings[msg.key] !== undefined) Settings[msg.key] = msg.value;
            // vv DEBUGGING vv
            else if (Flags[msg.key] !== undefined) Flags[msg.key] = msg.value;

            if (msg.key == HighlightNodes.name) {
                if (msg.value === true) HighlightNodes.start()
                else HighlightNodes.stop();
            }

            if (!msg.no_save) figma.clientStorage.setAsync(msg.key, msg.value);
            break;
        case "CreatePreset":
            CreatePreset(msg.preset);
            break;
    }
}

figma.showUI(__html__, {
    width: 300,
    height: 380,
    themeColors: true
});

new Promise((resolve, reject) => {
    figma.clientStorage.keysAsync().then(Keys => {
        var Done = 0;
        var StoredSettings = Flags;

        for (const [key, value] of Object.entries(Settings)) {
            StoredSettings[key] = value;
        }

        for (var i = 0; i < Keys.length; i++) {
            const Key = Keys[i];

            figma.clientStorage.getAsync(Key).then(Value => {
                Done += 1;

                if (Value !== undefined && Value !== null && Value !== "") {
                    switch (Key) {
                        // Migrate old settings
                        case "UploadToGroup": // [TEMPORARY(?) - Migrated on 28/06/2025]
                            Flags.UploaderType = Value ? "group" : "user";
                            StoredSettings.UploaderType =  Flags.UploaderType;
                            StoredSettings[Key] = undefined;
                        // Delete unwanted settings (including old)
                        case "ForceUploadImages":
                        case "ReuploadStuckImages":
                            figma.clientStorage.deleteAsync(Key);
                            break;
                        default:
                            StoredSettings[Key] = Value;
                            if (Settings[Key] !== undefined) Settings[Key] = Value;
                            // vv DEBUGGING vv
                            else if (Flags[Key] !== undefined) Flags[Key] = Value;
                            else console.warn(`[Figma to Roblox] Unknown Settings/Flag "${Key}", value: ${Value}`)
                            break;
                    }
                }

                if (Done == Keys.length) {
                    Done = null;
                    resolve(StoredSettings);
                }
            })
        }
    })
}).then((StoredSettings) => {
    if (Flags.ShowHighlights) {
        HighlightNodes.start();
    } else {
        figma.currentPage.findAll(node => {
            if (node.name === "FigmaToRoblox_TEMP") {
                node.remove();
            }
        });
    }

    figma.ui.postMessage({
        type: "LoadSettings",
        settings: StoredSettings
    })
});

// TODO: Visualise Buttons & Scrolling frames? I can't believe annotations are paid :(
// figma.on("close", () => {
//     Visualisers.forEach(Node => Node.remove())
// })

switch (figma.command) {
    case "export":
        RunPlugin();
        break;
    case "":
        break;
    default:
        console.warn(`[Figma To Roblox] Unknown command "${figma.command}"`)
}