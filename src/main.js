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

    // Loop Nodes
    for (var i = 0; i < Nodes.length; i++) {
        const Node = Nodes[i];
        const NodeData = Node.getPluginDataKeys();

        // TODO Check for a previous export
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
        
        //console.log("Node Properties:", Properties)
        
        if (Flags.ApplyAspectRatio && (Node.type == "GROUP" || Node.Type == "FRAME")) {
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
        
        
        Properties._OriginalPosition = Properties.Position;
        Properties._OriginalSize = Properties.Size;
        //Properties.Position.XO -= some math //*= Scale.X
        //Properties.Position.YO //*= Scale.Y
        //Properties.Size.XO *= Scale.X
        //Properties.Size.YO *= Scale.Y
        if (Properties.Rotation && Properties.Rotation !== 0) {
            const BoundingBox = Node.absoluteBoundingBox;

            var CX = BoundingBox.x + BoundingBox.width / 2;
            var CY = BoundingBox.y + BoundingBox.height / 2;

            Properties.Position.XO = CX - Properties.Size.XO / 2;
            Properties.Position.YO = CY - Properties.Size.YO / 2;
        }
        

        //console.log("Props:", Properties, "Parent:", ParentObject)
        //console.log("Node:", Node);
        
        if (Node.type === "BOOLEAN_OPERATION") { // No ~Temp added as a NodeType & create as if a group
            figma.notify("Boolean Operations might give undesired results", {timeout: 1800})
            // Booleans are treated as groups
            // FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
            // FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + LoopNodes(Node.children, Properties);
            // FileContent += "</Item>\n";
        }
        
        if (Properties.Name == "Background" && ParentObject) {
            console.log("Got Background with ParentObject which is a Group", Properties, ParentObject);

            ParentObject.BackgroundColor3 = Properties.BackgroundColor3;
            ParentObject.BackgroundTransparency = Properties.BackgroundTransparency;
            ParentObject.BorderSizePixel = Properties.BorderSizePixel;
            //ParentObject.Rotation = Properties.Rotation; // this now looks like a bad idea
            
            if (Properties.Children) {
                FileContent += LoopChildren(Properties.Children, Properties)

                // Properties.Children.forEach(Child => {
                //     var XMLProperties = ConvertObject(Child, Properties);
                    
                //     FileContent += `<Item class="${Child.Class}" referent="RBX0">\n${Child.Children ? LoopChildren(Child.Children) : ""}<Properties>\n${XMLProperties}\n</Properties></Item>\n`
                // });
            }

            continue;
        }

        // Finish up and Convert Properties
        
        //
        // Create Item element, loop/add children (if applicable)
        
        FileContent += `<Item class="${Properties.Class}" referent="RBX0">\n<Properties>\n`
        var New = "";
        
        if (Properties.Children) {
            New += LoopChildren(Properties.Children, ParentObject);
        }
        if (Node.children) New += LoopNodes(Node.children, Properties);
        
        if (ParentObject) {
            // Get Position relative to Parent
            Properties.Position.XO -= ParentObject._OriginalPosition.XO;
            Properties.Position.YO -= ParentObject._OriginalPosition.YO;
            
            if (ParentObject._Transparency) { // Multiply Transparency with Parent Transparency/Pass through
                Properties._Transparency = ParentObject._Transparency * Properties._Transparency
            }
            
            // Convert Offset (Pixels) to Scale
            // What am I going to do about anchor points :()
            // ^^ I do actually have 2 potential ideas
            
            if (Flags.ConvertOffsetToScale) {
                const SX = ParentObject._OriginalSize.XO;
                const SY = ParentObject._OriginalSize.YO;
                
                Properties.Position.XS = Properties.Position.XO / SX;
                Properties.Position.YS = Properties.Position.YO / SY;
                Properties.Size.XS = Properties._OriginalSize.XO / SX;
                Properties.Size.YS = Properties._OriginalSize.YO / SY;
                
                Properties.Position.XO = 0;
                Properties.Position.YO = 0;
                Properties.Size.XO = 0;
                Properties.Size.YO = 0;
            }
        } else if (!Flags.UseSelectionPositionRelativeToScene) {
            // Set Position of upmost Element (most likely a Group) to (0,0)
            Properties.Position.XO = 0;
            Properties.Position.YO = 0;
        }
        
        FileContent += ConvertObject(Properties, ParentObject) + "\n</Properties>\n" + New;
        
        FileContent += "</Item>\n";
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

    await new Promise((resolve, reject) => {
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

function CreateFrame() {
    const CenterOfScreen = figma.viewport.center;
    const SizeX = 1920;
    const SizeY = 1080;
    
    // const Background = figma.createRectangle();
    // Background.x = CenterOfScreen.x - SizeX / 2;
    // Background.y = CenterOfScreen.y - SizeY / 2;

    // Background.name = "Background";
    // Background.resize(SizeX, SizeY);
    // Background.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
    
    // const Group = figma.group([Background], figma.currentPage);
    // Group.name = "HD (4:9)"

    //

    const Frame = figma.createFrame();
    Frame.x = CenterOfScreen.x - SizeX / 2;
    Frame.y = CenterOfScreen.y - SizeY / 2;

    Frame.resize(SizeX, SizeY);
    Frame.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
    Frame.name = "HD (4:9)"
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
            SizeY = 1080;
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

    Frame.resize(SizeX, SizeY);
    Frame.fills = [{ type: "SOLID", color: { r: 0.2, g: 0.2, b: 0.2 } }];
    Frame.name = `${Preset} (${SizeX}x${SizeY})`
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
        case "CreatePreset":
            console.log("Creating Preset:", msg.preset);
            CreatePreset(msg.preset);
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