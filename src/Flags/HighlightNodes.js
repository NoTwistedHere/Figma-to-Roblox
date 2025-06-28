const Debounce = require("debounce");

var HighlightedNodes = [];
var CurrentGroup;
var RecentMoves = {}
var IsFirst;

const NodeChangeDebounce = Debounce((data) => {
    if (data.nodeChanges) {
        data.nodeChanges.forEach(nodeChange => {
            if (RecentMoves[nodeChange]) return;
            RecentMoves[nodeChange] = true

            if (nodeChange.origin == "LOCAL"
                && nodeChange.type == "PROPERTY_CHANGE"
                && nodeChange.properties.find(p => p == "name" || p == "x" || p == "y" || p == "height" || p == "width")
                && !HighlightedNodes.find(hen => hen == nodeChange.node)
            ) {
                if (nodeChange.node.name.match(/btn|button|scrl|scroll|img|image/i)) HighlightNode(nodeChange.node);
                else if (NodeId) nodeChange.node.setPluginData("NodeId", "");
            }
        })

        if (IsFirst) {
            IsFirst = false
            setTimeout(() => {
                RecentMoves = [];
                IsFirst = true
            }, 500)
        }
    }
}, 2000)

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
        textWidth: 132,
    }
}

for (var [type, value] of Object.entries(Types)) {
    Types[value.alt] = value;
}

function HighlightNode(node) {
    const TypeFlags = node.name.toLowerCase().match(/btn|button|img|image|scrl|scroll/g);
    
    if (!TypeFlags || node.parent && node.parent.name.match(/btn|button|img|image/i)) return;

    var NodeId = node.name.match(/[%d]+:[%d]+/);

    if (NodeId) {
        NodeId = NodeId[0]
        var ReuseHighlight;

        HighlightedNodes = HighlightedNodes.filter((Node) => {
            if (Node.parent) {
                if (Node.name.match(NodeId)) {
                    ReuseHighlight = true;

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

                return false
            }

            return true
        });

        if (ReuseHighlight) return;
    } else NodeId = node.id;

    node.setPluginData("NodeId", ""); // NodeId

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
    HighlightedNodes.push(HighlightRect);
    HighlightRect.name = NodeId + "B";
    HighlightRect.x = node.absoluteBoundingBox.x - 2;
    HighlightRect.y = node.absoluteBoundingBox.y - 2;
    HighlightRect.resize(node.width + 4, node.height + 4);
    HighlightRect.fills = [];
    HighlightRect.strokes = [{
        type: "SOLID",
        color: FirstNode.color,
        opacity: FirstNode.opacity || 0.8,
    }];
    HighlightRect.strokeWeight = 3;
    HighlightRect.strokeAlign = "OUTSIDE";
    
    const BodyRect = figma.createRectangle();
    HighlightedNodes.push(BodyRect);
    BodyRect.name = NodeId + "C";
    BodyRect.x = node.absoluteBoundingBox.x;
    BodyRect.y = node.absoluteBoundingBox.y + node.height + 8;
    BodyRect.resize(0, 0);
    BodyRect.cornerRadius = 4;
    BodyRect.fills = [{
        type: "SOLID",
        color: FirstNode.color,
        opacity: 0.8,
    }];

    const BodyTextRect = figma.createText();
    HighlightedNodes.push(BodyTextRect);
    BodyTextRect.name = NodeId + "T";
    BodyTextRect.x = node.absoluteBoundingBox.x + 10;
    BodyTextRect.y = node.absoluteBoundingBox.y + node.height + 8;
    BodyTextRect.resize(0, 0);
    BodyTextRect.fills = [{
        type: "SOLID",
        color: FirstNode.textColor || {r: 1, g: 1, b: 1},
        opacity: 1,
    }];

    figma.loadFontAsync(BodyTextRect.fontName).then(() => {
        //if (TypeFlags[1] == "img") TODO: have 'Image Button' and not Image and/or Button, or have multiple texts in the Y axis

        BodyTextRect.fontSize = 18
        BodyTextRect.characters = Text //"BUTTON"
        BodyTextRect.resize(TextWidth, TextHeight); // Math.max(TextWidth, Math.min(node.width - 20, 200))
        BodyRect.resize(TextWidth + 20, TextHeight + 4);
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

        return node.name.match(/btn|button|scrl|scroll|img|image/i);
    })

    if (CurrentGroup && CurrentGroup.parent) CurrentGroup.remove();
    CurrentGroup = undefined
    HighlightedNodes = []

    nodes.forEach(HighlightNode);

    CurrentGroup = figma.group(HighlightedNodes, figma.currentPage);
    CurrentGroup.name = "FigmaToRoblox_TEMP"
    CurrentGroup.locked = true;
    NodeChangeDebounce.clear();
}

function close() {
    if (CurrentGroup && CurrentGroup.parent) CurrentGroup.remove();
    HighlightedNodes = undefined;
    CurrentGroup = undefined;
}

figma.currentPage.on("nodechange", NodeChangeDebounce);

module.exports = {
    name: "ShowHighlights",
    start: HighlightNodes,
    stop: close,
}