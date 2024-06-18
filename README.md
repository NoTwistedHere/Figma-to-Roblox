# Figma to Roblox

If you encounter any bugs/issues please let me know through [github](https://github.com/NoTwistedHere/Figma-to-Roblox/issues) or [discord](https://discord.com/users/361124141518159882)


## How to build:
Make sure you have [browserify](https://browserify.org) installed `npm install browserify`

Open up a terminal and run `npm run build`

## How to use:
1) Download this repo (Code -> Download as Zip)
2) Open up figma
3) In the upper left corner, open up `Figma/File -> Plugins -> Development -> Manage plugins in development`
4) Select **Import new plugin from manifest** and open up manifest.json

<br>

## Currently Supported:
NOTE: This might be missing some things

### Rectangle
* Background Transparency/Colour
* Stroke (**ONLY** using UIStroke)
* Gradient
    * Only supports linear gradients
    * May also apply to any strokes
* Corners (in px)
* Rotation

### Ellipse
* Must be an even circle (height == width)
* Has the same properties as Rectangles (with a corner radius scaled to 1)

### Text
* Text Transparency/Colour
* Text Stroke (**ONLY** using UIStroke)
* Text Gradient
    * Only supports linear gradients
    * Will also apply to any strokes
    * Does not support rich text
* Rotation
* Auto Resizing (?)
* Text Alignment
* Text Decoration
* Text Case
* Text Font
* Text Wrapping
* Text Truncation