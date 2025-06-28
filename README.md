# [Figma to Roblox](https://www.figma.com/community/plugin/1221497650571322872)

If you encounter any bugs/issues please let me know through [github](https://github.com/NoTwistedHere/Figma-to-Roblox/issues) or [discord](https://discord.gg/DWCGss4vry)


## How to build:
Install [Browserify](https://browserify.org/#install) with node: `npm install browserify`, or yarn: `yarn install browserify`
Build with node: `npm run build`, or yarn: `yarn run build`

## How to use:
1) Download this repo (Code -> Download as Zip)
2) Open up figma
3) In the upper left corner, open up `Figma/File -> Plugins -> Development -> Manage plugins in development`
4) Select **Import new plugin from manifest** and open up manifest.json

## Uploading Images:
1) Navigate to your [Open Cloud API Keys](https://create.roblox.com/dashboard/credentials?activeTab=ApiKeysTab) and create a new API Key, or edit an existing one
2) **Access Permission**: Add permission "assets" with Read & Write access
3) **Security**: Add **your** ip address to the allow list, you can otherwise add `0.0.0.0/0` to allow all IPs however this is **not reccomended** unless you have a dynamic ip and consistently running into issues
4) Copy your api key and enter it into the `Cloud API Key` field, along with your UserId in the next field (or GroupId, toggle with `Upload to Group`)
2) Enable `Upload Images` and you should be good to go

4) Generate your new Api Key, copy it and in Figma to Roblox, enter/pate it into the `Cloud Api Key` field, along with your UserId in the next field (or GroupId, toggle with `Upload to Group`)

## Buttons & Scrollng Frame
For a scrollingFrame: include 'Scroll' in the name of the frame/container
For a TextButton: include 'Button' in the name of the Text element & parent group/frame (Backgrounds can be added with a child rectangle named 'Background', does not support gradients)
For a ImageButton: include 'Button' in the name of the Image

<br>

## Currently Supported:
NOTE: This might be missing some things

### Rectangle
* Background Transparency/Solid Colour
* Stroke (**ONLY** using UIStroke)
* Gradient
    * Only supports linear gradients
    * May also apply to any strokes
* Corners (in px)
* Rotation

### Ellipse
* Same properties as a Rectangle with a corner radius set to 1 scale
* Must be an even circle (height & width are the same)

### Text
* Rich Text
* Text Transparency
* Text Colour
* Text Stroke (**ONLY** using UIStroke)
    * Transparent text will not look the same when exported to roblox, as the UIStroke's border is visible inside of any semi-transparent text ([e.g.](https://cdn.thisstuff.xyz/Uploads/Figma-Invisible-Text-Example.png))
* Text Gradient
    * Only supports linear gradients
    * Will also apply to any strokes
    * Does not support Rich Text
    * Does not support Text Button
* Rotation
* Auto Resizing (?)
* Text Alignment
* Text Decoration
* Text Case
* Text Font
* Text Wrapping
* Text Truncation
* Text Button (include either "Button" or "BTN" in the name, does not support gradients)

### Images
* Image Transparency/Colour
* Text Gradient
    * Only supports linear gradients
    * Will also apply to any strokes
    * NOTE: any transparency cannot be done in figma (to my knowledge), and will likely not look the same
* Rotation
* Image Button (include either "Button" or "BTN" in the name)
* Optionally, any nodes can be exported as Images by including `IMG` in the name (not case sensitive)

### Buttons
    Both Text and Image buttons are suppported,
    rename both the Text/Image & parent (Frame, Container or Group) to include "Button" or "BTN" anywhere in the name, not case sensitive.
    if "BTN" is used it will be removed from the exported name, "Button" will not be removed.
    
    see the examples below:
![TextButton example](https://cdn.thisstuff.xyz/Uploads/Figma-TextButton-Example.png)
![ImageButton example](https://cdn.thisstuff.xyz/Uploads/Figma-ImageButton-Example.png)

### Scrolling Frame
    have "Scroll" or "SCRL" in the name, not case sensitive
    List Layouts are supported


### Images
    All nodes support this tag,
    include either "Image" or "IMG" in the name, not case sensitive

### UI List & UI Grids

<br>

## General guidance:

### Creating Frames
There are two ways to create a Roblox Frame

> #### Option 1:
> Use a Frame (<kbd>F</kbd>).

![Image Node parented to a Frame](https://cdn.thisstuff.xyz/Uploads/Figma-4K-Frame-Example.png)

> #### Option 2:
> A Rectangle/Circle/Image named "Background" inside of a Group (select Nodes(s) and <kbd>Ctrl</kbd>+<kbd>G</kbd>), the Group will receive the visual properties of Background.
> NOTE: Currently this means it is expected the Background & Group to be the same size

!["Background" Frame and Image grouped inside of Group](https://cdn.thisstuff.xyz/Uploads/Figma-FHD-Group-Example.png)