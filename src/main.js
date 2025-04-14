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
        Implement Settings (kinda reversed that in recent updates)
        Finish implementing Image uploading (DONE?)
        Better ui (DONE?)
        Update that damn README
        Remove the old/unneeded todos
*/

const Conversions = require('./Conversions.js');
const { Flags, QuickClose, Notify } = require('./Utilities.js');
const { PropertyTypes, NodeTypes, XMLTypes, Settings, UpdateImage, UpdateOperationId, GetImageFromOperation, IsDone } = require('./Converters.js');

var RunDebounce = false;

function ConvertObject(Properties, ParentObject) {
    var XML = ""

    for (var [Key, Value] of Object.entries(Properties)) {
        switch (Key) {
            case "Node":
            case "Children":
            case "Class":
            case "_IsButton":
            case "_HasGradient":
                break;
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
            case "Transparency":
            case "TextStrokeTransparency":
            case "TextTransparency":
                // Should always be parented to a group as only groups and sections allow children
                Value = Properties._Transparency * Value;

                XML += XMLTypes.number(Key, 1 - Value, false, 10000);
                break
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
                //console.log(Key, Value, typeof(Value))
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
    var FileContent = "";

    const SortedNodes = []

    //if (ParentObject) {
        for (var i = 0; i < Nodes.length; i++) {
            const Node = Nodes[i];
    
            if (Node.name === "Background") {
                SortedNodes[i] = SortedNodes[0];
                SortedNodes[0] = Node;
            } else SortedNodes[i] = Node;
        }
    //}

    // Loop Nodes
    for (var i = 0; i < SortedNodes.length; i++) {
        const Node = SortedNodes[i];

        if (Flags.IgnoreInvisible && !Node.visible) continue;
        
        const Properties = NodeTypes[Node.type || "OTHER"](Node, Settings); // Can't name it Object because of below v
        
        if (!Properties) continue;
        if (Properties._Transparency === 0) Properties.Visible = false;
        if (ParentObject) {
            if (ParentObject._Transparency) { // Multiply Transparency with Parent Transparency/Pass through
                Properties._Transparency = ParentObject._Transparency * Properties._Transparency
            };

           /* Properties._OriginalPosition = {
                XS: Properties.Position.YS,
                XO: Properties.Position.XO,
                YS: Properties.Position.YS,
                YO: Properties.Position.YO,
            };*/
        }/*else if (!ParentObject && Node.type == "FRAME") Properties._OriginalPosition = {
            XS: 0,
            XO: 0,
            YS: 0,
            YO: 0,
        };*/

        //const BoundingBox = Node.absoluteBoundingBox // DO NOT RE-IMPLEMENT WITHOUT RE-ARRANGING
        // Properties.Position = {
        //     XS: 0,
        //     XO: BoundingBox.x,
        //     YS: 0,
        //     YO: BoundingBox.y,
        // }
        // Properties.Size = {
        //     XS: 0,
        //     XO: BoundingBox.width,
        //     YS: 0,
        //     YO: BoundingBox.height,
        // }
        
        // Loop Node properties
        var NodeProperties = Object.getOwnPropertyNames(Object.getPrototypeOf(Node));
        
        NodeProperties.forEach((i) => {
            if (PropertyTypes[i]) {
                PropertyTypes[i](Node[i], Properties, Node);
            }
        });
        
        Properties._OriginalPosition = Properties.Position;
        Properties._OriginalSize = Properties.Size;
        //Properties._OriginalSize = Properties.Size;
        //Properties.Position.XO -= some math //*= Scale.X
        //Properties.Position.YO //*= Scale.Y
        //Properties.Size.XO *= Scale.X
        //Properties.Size.YO *= Scale.Y
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
        

        //console.log("Props:", Properties, "Parent:", ParentObject)
        //console.log("Node:", Node);
        
        if (Node.type === "BOOLEAN_OPERATION") { // No ~Temp added as a NodeType & create as if a group
            figma.notify("Boolean Operations may give undesired results", {timeout: 1800})
            // Booleans are treated as groups
            // FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
            // FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + LoopNodes(Node.children, Properties);
            // FileContent += "</Item>\n";
        }
        
        
        const lowercaseName = Properties.Name.toLowerCase();
        const removeNameAbriv = lowercaseName.match("btn") || lowercaseName.match("scrl");

        if (lowercaseName == "background" && ParentObject) {
            ParentObject._HasGradient = Properties._HasGradient;
            ParentObject.BackgroundColor3 = Properties.BackgroundColor3;
            ParentObject.BackgroundTransparency = Properties.BackgroundTransparency;
            ParentObject.BorderSizePixel = Properties.BorderSizePixel;
            //ParentObject.Rotation = Properties.Rotation; // this now looks like a bad idea
            
            if (Properties.Children) {
                FileContent += LoopChildren(Properties.Children, Properties);
            }

            continue;
        } else if (removeNameAbriv && removeNameAbriv[0] === "btn" || lowercaseName.match("button")) { // Convert to button
            if (removeNameAbriv) Properties.Name = Properties.Name.replace(/btn/i, "");

            if (ParentObject && ParentObject._IsButton) { // update parent button
                if (Properties.Class === "TextLabel") {
                    // if the parent object meets certain criteria (listed below) then we should keep the TextLabel within the button and remove the TextButton's text
                    // No (Background/Text) Gradient
                    // Must be TextButton
                    
                    if (Properties._HasGradient !== true && ParentObject._HasGradient !== true) {
                        console.log("update TextButton Text", Properties)
                        ParentObject.Class = "TextButton"
    
                        Object.entries(Properties).forEach(([key, value]) => {
                            if (key.match("^Text")) ParentObject[key] = value
                        })
    
                        ParentObject.FontFace = Properties.FontFace
    
                        // if (Properties.Children) {
                        //     FileContent += LoopChildren(Properties.Children, ParentObject)
                        // }
                        
                        //ParentObject.Text = Properties.Text
        
                        continue;
                    } else {
                        console.log("TextLabel doesn't meet criteria to update parent TextButton")
                    }
                } else if (Properties.Class === "ImageLabel") {
                    if (Properties._HasGradient !== true && ParentObject._HasGradient !== true) {
                        console.log("update ImageButton Image", Properties)
                        ParentObject.Class = "ImageButton"
    
                        Object.entries(Properties).forEach(([key, value]) => {
                            if (key.match("^Image")) ParentObject[key] = value
                        })
                        continue;
                    } else {
                        console.log("TextLabel doesn't meet criteria to update parent TextButton")
                    }
                }
            } else if (Properties.Class === "Frame" || Properties.Class === "ImageLabel" || Properties.Class === "TextLabel") {
                // Only Intended to support ImageLabel, TextLabel, Frame
                // now what if the Class is none of these?
                //console.log("convert to button", Properties, ParentObject)
                Properties._IsButton = true;

                if (Properties.Class === "ImageLabel") Properties.Class = "ImageButton"
                else if (Properties.Class === "TextLabel") Properties.Class = "TextButton"
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

        // Finish up and Convert Properties

        
        //
        // Create Item element, loop/add children (if applicable)
        
        var New = "";
        
        if (Properties.Children) {
            New += LoopChildren(Properties.Children, ParentObject);
        }
        // Loop all Node Children
        if (Node.children) New += LoopNodes(Node.children, Properties);
        
        // Calculate Aspect Ratio and Scale
        if (Flags.ApplyAspectRatio) {
            if (Properties.Class === "ScrollingFrame") console.warn("Cannot Apply UIAspectRatioConstraint to a ScrollingFrame that scrolls")
            else {
                var AspectRatio = Math.round((Properties.Size.XO / Properties.Size.YO) * 100000) / 100000;
                
                if (Node.width != 0 && Node.height != 0 && AspectRatio) {
                    Properties.Children.push({
                        Class: "UIAspectRatioConstraint",
                        AspectRatio: AspectRatio,
                        AspectType: 1,
                        DominantAxis: Properties.Size.XO > Properties.Size.YO ? 1 : 0
                    })
                }
            }
        }

        if (ParentObject) {
            if (ParentObject._OriginalPosition && ParentObject.Node.type !== "FRAME" && ParentObject.Node.type !== "INSTANCE") {
                // Get Position relative to Parent
                Properties.Position.XO = Properties.Position.XO - ParentObject._OriginalPosition.XO;
                Properties.Position.YO = Properties.Position.YO - ParentObject._OriginalPosition.YO;
            }
            
            // Convert Offset (Pixels) to Scale
            // What am I going to do about anchor points :()
            // ^^ I do actually have 2 potential ideas

            const PSX = ParentObject.Size.XO;
            const PSY = ParentObject.Size.YO;

            if (Flags.DetectAnchorPoint) {
                var PX = Properties.Position.XO;
                var PY = Properties.Position.YO;
                var SX = Properties.Size.XO;
                var SY = Properties.Size.YO;

                var AX = 0;
                var AY = 0;
                
                var LeftX = PX / PSX
                var RightX = (PX + SX) / PSX
                var LeftY = PY / PSY
                var RightY = (PY + SY) / PSY
                
                // Can do X + SX  
                //
                //

                var Test2X = LeftX + RightX
                var Test2Y = LeftY + RightY

                //console.log(Properties, LeftX, RightX, Test2)
                //console.log(PX, SX, ParentObject)

                // if (LeftX > 0.5) {
                //     AX = 1
                // } else if (TestRx > 0.5) {
                //     AX = 0
                // } else if (TestRx >= 0 && TestRx) { // Should maybe be matching if (Lx) - (1 - Rx)
                //     AX = 0.5
                // }

                // AX = Test2 / 2

                if (Test2X > 1.5) {
                    AX = 1;
                } else if (Test2X > 0.5) {
                    AX = 0.5;
                } else {
                    AX = 0;
                }

                if (Test2Y > 1.5) {
                    AY = 1;
                } else if (Test2Y > 0.5) {
                    AY = 0.5;
                } else {
                    AY = 0;
                }

                //console.log(AX, AY)

                if (AX || AY) {
                    Properties.AnchorPoint = {
                        X: AX,
                        Y: AY
                    }

                    // Properties.Position.YO += Properties.Size.YO * AY;
                    // Properties.Position.XO += Properties.Size.XO * AX;
                }
            }
            
            if (Flags.ConvertOffsetToScale) {
                //console.log(Properties.Position, "X:", PSX, "Y:", PSY)
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

                /*if (Properties.AnchorPoint) {
                    const AX = Properties.AnchorPoint.X
                    Properties.Position.XS = AX
                    //Properties.Position.XO = Properties.Position.XO;

                    Properties.Position.XO = -(Properties.Position.XO + Properties.Size.XO * AX);
                    Properties.Position.YO = 0;
                    Properties.Size.XO = 0;
                    Properties.Size.YO = 0;
                } else {*/
                //}

                // if (Properties.AnchorPoint) {
                //     Properties.Position.XO += Properties.Size.XO * Properties.AnchorPoint.X;
                //     Properties.Position.YS -= Properties.AnchorPoint.Y;
                // }
            }
        } else if (!Flags.UseSelectionPositionRelativeToScene) {
            // Set Position of upmost Element (most likely a Group) to (0,0)
            Properties.Position.XO = 0;
            Properties.Position.YO = 0;
        }
        
        FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
        FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + New;
        FileContent += "</Item>\n";
        New = null;
    }

    return FileContent
}

async function ConvertNodes() {
    var SelectedNodes = figma.currentPage.selection;

    if (SelectedNodes.length == 0) return QuickClose("No Nodes selected");

    // Start Converting Nodes

    var FileContent = '<!--\n\tGenerated by Figma to Roblox\n\tReport any bugs/issues to notwistedhere on discord/github\n-->\n\n<roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4"><Meta name="ExplicitAutoJoints">true</Meta>\n';

    var Nodes = LoopNodes(SelectedNodes);

    // wait for all images to be uploaded
    await new Promise((resolve, reject) => {
        function Timeout() {
            if (IsDone()) return resolve();

            setTimeout(Timeout, 500);
        }

        Timeout()
    })

    const ImageOperations = Nodes.replace(/{OP-([0-9a-zA-Z-:]+)}/g, (_, Id) => {
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
            return QuickClose("Preset doesn't exist");
    }

    const Frame = figma.createFrame();
    Frame.x = CenterOfScreen.x - SizeX / 2;
    Frame.y = CenterOfScreen.y - SizeY / 2;

    Frame.setRelaunchData({
        "export": "Export with FigmaToRoblox"
    });

    Frame.resize(SizeX, SizeY);
    Frame.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
    Frame.name = `${Preset} (${SizeX}x${SizeY})`
}

function RunPlugin() { // this is technecally a codegen plugin?
    if (RunDebounce) return;

    RunDebounce = true
    console.log("[FTR] Starting");
    ConvertNodes();
    console.log("[FTR] Done");
    
    setTimeout(() => {
        RunDebounce = false
    }, 2500)
    //RunDebounce = false
}

//ConvertNodes();

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
        case "SetAsync":
            if (Settings[msg.key] !== undefined) Settings[msg.key] = msg.value;
            // vv DEBUGGING vv
            if (Flags[msg.key] !== undefined) Flags[msg.key] = msg.value;

            figma.clientStorage.setAsync(msg.key, msg.value);
            break;
        case "CreatePreset":
            CreatePreset(msg.preset);
            break;
    }
}

figma.showUI(__html__, {
    width: 260,
    height: 380,
    themeColors: true
});

const FetchPromise = new Promise((resolve, reject) => {    
    figma.clientStorage.keysAsync().then(Keys => {
        var Done = 0;
        var StoredSettings = {};
        
        for (var i = 0; i < Keys.length; i++) {
            const Key = Keys[i];

            figma.clientStorage.getAsync(Key).then(Value => {
                StoredSettings[Key] = Value;
                Done += 1;

                if (Settings[Key] !== undefined) Settings[Key] = Value;
                // vv DEBUGGING vv
                else if (Flags[Key] !== undefined) Flags[Key] = Value;
                
                if (Done == Keys.length) {
                    Done = null;
                    resolve(StoredSettings);
                }
            })
        }
    })
});

FetchPromise.then((StoredSettings) => figma.ui.postMessage({
    type: "LoadSettings",
    settings: StoredSettings
}));

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