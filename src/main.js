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
    }
}

figma.showUI(__html__, {
    width: 250,
    height: 380,
    themeColors: true
});