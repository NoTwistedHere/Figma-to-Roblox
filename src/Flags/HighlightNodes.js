
const { Flags } = require('../Utilities.js');

var HighlightedNodes = [];
var CurrentGroup;

const Types = {
    btn: {
        text: "Button",
        color: {r: 0.25, g: 0.5, b: 0.8},
        opacity: 0.94,
        textWidth: 57,
    },
    img: {
        text: "Image",
        color: {r: 0.4, g: 0.9, b: 0.5},
        textColor: {r: 0.1, g: 0.1, b: 0.1},
        opacity: 0.94,
        textWidth: 52,
    },
    scrl: {
        text: "Scrolling Frame",
        color: {r: 0.8, g: 0.8, b: 0.4},
        opacity: 0.94,
        textWidth: 132,
    }
}

function HighlightNode(node) {
    const TypeFlags = node.name.toLowerCase().match(/btn|img|scrl/g);
    
    if (!TypeFlags || node.parent && node.parent.name.match(/btn|button|img|image/i)) return;

    const NodeId = node.name.replace(/btn|scrl|img/ig, "") + node.id;

    node.setPluginData("NodeId", NodeId);

    const NodeType = Types[TypeFlags[0]]
    const HighlightRect = figma.createRectangle();
    HighlightedNodes.push(HighlightRect);
    HighlightRect.name = NodeId;
    HighlightRect.x = node.absoluteBoundingBox.x - 2;
    HighlightRect.y = node.absoluteBoundingBox.y - 2;
    HighlightRect.resize(node.width + 4, node.height + 4);
    HighlightRect.fills = [];
    HighlightRect.strokes = [{
        type: "SOLID",
        color: NodeType.color,
        opacity: NodeType.opacity || 0.8,
    }];
    HighlightRect.strokeWeight = 3;
    HighlightRect.strokeAlign = "OUTSIDE";

    const BodyRect = figma.createRectangle();
    HighlightedNodes.push(BodyRect);
    BodyRect.name = NodeId;
    BodyRect.x = node.absoluteBoundingBox.x;
    BodyRect.y = node.absoluteBoundingBox.y + node.height + 8;
    BodyRect.resize(0, 0);
    BodyRect.cornerRadius = 4;
    BodyRect.fills = [{
        type: "SOLID",
        color: NodeType.color,
        opacity: 0.8,
    }];

    const BodyTextRect = figma.createText();
    HighlightedNodes.push(BodyTextRect);
    BodyTextRect.name = NodeId;
    BodyTextRect.x = node.absoluteBoundingBox.x + 10;
    BodyTextRect.y = node.absoluteBoundingBox.y + node.height + 8;
    BodyTextRect.resize(0, 0);
    BodyTextRect.fills = [{
        type: "SOLID",
        color: NodeType.textColor || {r: 1, g: 1, b: 1},
        opacity: 1,
    }];

    figma.loadFontAsync(BodyTextRect.fontName).then(() => {
        BodyTextRect.fontSize = 18
        BodyTextRect.characters = NodeType.text //"BUTTON"
        BodyTextRect.resize(NodeType.textWidth, 20); // Math.max(NodeType.textWidth, Math.min(node.width - 20, 200))
        BodyRect.resize(NodeType.textWidth + 20, 24);
    });

    if (CurrentGroup && CurrentGroup.parent) {
        CurrentGroup.appendChild(HighlightRect);
        CurrentGroup.appendChild(BodyRect);
        CurrentGroup.appendChild(BodyTextRect);
    }
}

function HighlightNodes() {
    const nodes = figma.currentPage.findAll(node => {
        if (node.name === "FigmaToRoblox_TEMP") CurrentGroup = node;
        return node.name.match(/btn|scrl|img/i);
    })

    if (CurrentGroup && CurrentGroup.parent) CurrentGroup.remove();
    CurrentGroup = undefined
    HighlightedNodes = []

    nodes.forEach(HighlightNode);

    CurrentGroup = figma.group(HighlightedNodes, figma.currentPage);
    CurrentGroup.name = "FigmaToRoblox_TEMP"
}

function close() {
    if (CurrentGroup && CurrentGroup.parent) CurrentGroup.remove();
    HighlightedNodes = undefined;
    CurrentGroup = undefined;
}

figma.currentPage.on("nodechange", (data) => {
    if (data.nodeChanges) {
        data.nodeChanges.forEach(nodeChange => {
            if (nodeChange.origin == "LOCAL" && nodeChange.type == "PROPERTY_CHANGE" && nodeChange.properties.find(p => p == "name") && !HighlightedNodes.find(hen => hen == nodeChange.node)) {
                const NodeId = nodeChange.node.getPluginData("NodeId");

                if (NodeId) {
                    HighlightedNodes = HighlightedNodes.filter((Node) => {
                        if (Node.parent) {
                            if (Node.name === NodeId) {
                                Node.remove();
                            }

                            return false
                        }

                        return true
                    });
                }
                
                if (nodeChange.node.name.match(/btn|scrl|img/i)) HighlightNode(nodeChange.node);
                else if (NodeId) nodeChange.node.setPluginData("NodeId", "");
            }
        })
    }
})

module.exports = {
    name: "ShowHighlights",
    start: HighlightNodes,
    stop: close,
}