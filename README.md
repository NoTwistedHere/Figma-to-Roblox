# Figma to Roblox

If you encounter any bugs/issues please let me know through [github](https://github.com/NoTwistedHere/Figma-to-Roblox/issues) or [discord](https://discord.com/users/361124141518159882)


## How to build:
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
* Stroke
* Gradient
    * Only supports linear gradients
    * May also apply to any strokes
* Corners
* Rotation

### Ellipse
* Must be a circle (height = width)
* Just a frame with a ui corner

### Text
* Text Transparency/Colour
* Text Stroke
* Text Gradient
    * Only supports linear gradients
    * May also apply to any strokes
* Rotation
* Auto Resizing (?)
* Text Alignment
* Text Decoration
* Text Case
* Text Font
* Text Wrapping
* Text Truncation