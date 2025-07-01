const { Debounce } = require("../Utilities");

var HighlightedNodes = [];
var NodeHighlightsTEMP = [];
var CurrentGroup;
var RecentMoves = {}
var IsFirst = true;

const Types = {
    button: {
        text: "Button",
        alt: "btn",
        color: {r: 0.25, g: 0.5, b: 0.8},
        textWidth: 57,
    },
    image: {
        text: "Image",
        alt: "img",
        color: {r: 0.4, g: 0.9, b: 0.5},
        textColor: {r: 0.1, g: 0.1, b: 0.1},
        textWidth: 52,
    },
    scroll: {
        text: "Scrolling Frame",
        alt: "scrl",
        color: {r: 0.8, g: 0.8, b: 0.4},
        textColor: {r: 0.1, g: 0.1, b: 0.1},
        textWidth: 132,
    }
}

for (var [type, value] of Object.entries(Types)) {
    Types[value.alt] = value;
}

function HighlightNode(node, rm) {
    if (!NodeHighlightsTEMP || !node.parent || node.parent.name.match(/btn|button|img|image/i)) return;

    const TypeFlags = rm === true ? false : node.name.toLowerCase().match(/btn|button|img|image|scrl|scroll/g);
    const NodeId = "@FTR" + node.id;

    if (node.children) node.children.forEach(childNode => HighlightNode(childNode, rm));

    if (rm === true || HighlightedNodes.find(N => N === node)) {
        var ReuseHighlight;

        NodeHighlightsTEMP = NodeHighlightsTEMP.filter((Node) => {
            try {
                if (Node.parent && Node.name.substr(0, Node.name.length - 1) == NodeId) {
                    ReuseHighlight = true;

                    if (!TypeFlags) return Node.remove();

                    switch (Node.name.substr(-1, 1)) {
                        case "B": // Background
                            Node.x = node.absoluteBoundingBox.x - 2;
                            Node.y = node.absoluteBoundingBox.y - 2;
                            Node.resize(node.width + 4, node.height + 4);
                            break;
                        case "C": // Text Background (Card)
                            Node.x = node.absoluteBoundingBox.x;
                            Node.y = node.absoluteBoundingBox.y + node.height + 8;
                            break;
                        case "T": // Text
                            Node.x = node.absoluteBoundingBox.x + 10;
                            Node.y = node.absoluteBoundingBox.y + node.height + 8;
                            break;
                    }
                }
            } catch (error) {
                console.warn(Node, error);
            }

            return true
        });

        if (ReuseHighlight) return;
    };

    if (!TypeFlags) return;

    node.setPluginData("NodeId", ""); // NodeId
    HighlightedNodes.push(node);
    
    var TextHeight = 0;
    var TextWidth = 0;
    var Text = "";
    var FirstNode;

    for (var i=0; i< TypeFlags.length; i++) {
        const NodeType = Types[TypeFlags[i]];

        if (NodeType.textWidth > TextWidth) TextWidth = NodeType.textWidth;
        if (i == 0) FirstNode = NodeType;
        else Text += "\n";

        TextHeight += 20;
        Text += NodeType.text;
    }
    
    const HighlightRect = figma.createRectangle();
    NodeHighlightsTEMP.push(HighlightRect);
    HighlightRect.name = NodeId + "B";
    HighlightRect.x = node.absoluteBoundingBox.x - 1;
    HighlightRect.y = node.absoluteBoundingBox.y - 1;
    HighlightRect.resize(node.width + 2, node.height + 2);
    HighlightRect.fills = [];
    HighlightRect.strokes = [{
        type: "SOLID",
        color: FirstNode.color,
        opacity: FirstNode.opacity || 0.85,
    }];
    HighlightRect.strokeWeight = 3;
    HighlightRect.strokeAlign = "OUTSIDE";
    
    const BodyRect = figma.createRectangle();
    NodeHighlightsTEMP.push(BodyRect);
    BodyRect.name = NodeId + "C";
    BodyRect.x = node.absoluteBoundingBox.x;
    BodyRect.y = node.absoluteBoundingBox.y + node.height + 8;
    BodyRect.resize(0, 0);
    BodyRect.cornerRadius = 4;
    BodyRect.fills = [{
        type: "SOLID",
        color: FirstNode.color,
        opacity: 0.85,
    }];

    const BodyTextRect = figma.createText();
    NodeHighlightsTEMP.push(BodyTextRect);
    BodyTextRect.name = NodeId + "T";
    BodyTextRect.x = node.absoluteBoundingBox.x + 10;
    BodyTextRect.y = node.absoluteBoundingBox.y + node.height + 8;
    BodyTextRect.resize(0, 0);
    BodyTextRect.fills = [{
        type: "SOLID",
        color: FirstNode.textColor || {r: 1, g: 1, b: 1},
        opacity: 1,
    }];

    if (CurrentGroup && CurrentGroup.parent) {
        CurrentGroup.appendChild(HighlightRect);
        CurrentGroup.appendChild(BodyRect);
        CurrentGroup.appendChild(BodyTextRect);
    }

    figma.loadFontAsync(BodyTextRect.fontName).then(() => {
        //if (TypeFlags[1] == "img") TODO: have 'Image Button' and not Image and/or Button, or have multiple texts in the Y axis

        BodyTextRect.fontSize = 18
        BodyTextRect.characters = Text //"BUTTON"
        BodyTextRect.resize(TextWidth, TextHeight); // Math.max(TextWidth, Math.min(node.width - 20, 200))
        BodyRect.resize(TextWidth + 20, TextHeight + 4);
    });
}

const NodeChangeDebounce = Debounce((data) => {
    if (data && data.nodeChanges) {
        if (IsFirst) {
            IsFirst = false
            setTimeout(() => {
                RecentMoves = [];
                IsFirst = true
            }, 500)
        }

        data.nodeChanges.forEach(nodeChange => {
            if (RecentMoves[nodeChange.node] || nodeChange.origin !== "LOCAL") return;
            RecentMoves[nodeChange.node] = true;

            switch (nodeChange.type) {
                case "PROPERTY_CHANGE":
                    if (nodeChange.properties
                        && nodeChange.properties.find(p => p == "name" || p == "x" || p == "y" || p == "height" || p == "width")
                        && !NodeHighlightsTEMP.find(hen => hen == nodeChange.node)
                    ) {
                        HighlightNode(nodeChange.node);
                    }
                    break;
                case "CREATE":
                    if (!nodeChange.properties) figma.currentPage.appendChild(CurrentGroup);
                    HighlightNode(nodeChange.node);
                    break;
                case "DELETE":
                    HighlightNode(nodeChange.node, true);
                    break;
                default:
                    break;
            }
        })
    }
}, 800, {
    immediate: true
})

function HighlightNodes() {
    RecentMoves = []
    NodeHighlightsTEMP = []

    const nodes = figma.currentPage.findAll(node => {
        if (node.name === "FigmaToRoblox_TEMP") {
            node.remove();
            return;
        } else if (node.name.match(/@FtR[0-9]+:[0-9]+/i)) {
            NodeHighlightsTEMP.push(node)
            return;
        }
        
        return node.name.match(/btn|button|scrl|scroll|img|image/i);
    });
    
    figma.currentPage.on("nodechange", NodeChangeDebounce);
    
    if (CurrentGroup) {
        try {
            CurrentGroup.remove();
        } catch (e) {}
        CurrentGroup = undefined
    }

    for (var i=0; i< NodeHighlightsTEMP.length; i++) {
        NodeHighlightsTEMP[i].remove();
    }
    
    NodeHighlightsTEMP = [];
    nodes.forEach(HighlightNode);
    
    CurrentGroup = figma.group(NodeHighlightsTEMP, figma.currentPage);
    CurrentGroup.name = "FigmaToRoblox_TEMP"
    CurrentGroup.locked = true;
    NodeChangeDebounce.clear();
}

function close() {
    figma.currentPage.off("nodechange", NodeChangeDebounce);
    NodeHighlightsTEMP = undefined;
    
    if (CurrentGroup) {
        try {
            CurrentGroup.remove();
        } catch (e) {}
        CurrentGroup = undefined
    }
}

module.exports = {
    name: "ShowHighlights",
    start: HighlightNodes,
    stop: close,
}