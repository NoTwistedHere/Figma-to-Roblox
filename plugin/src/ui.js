import JSZip from "jszip";

var CloudApiKey = "";
var UserId = "";
var Proxy = "";
var UploadImages = false;
var ExportImages = false;

document.getElementById("closeplugin").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "close-plugin" } }, "*");
};
document.getElementById("convselect").onclick = () => {
  parent.postMessage({ pluginMessage: { type: "exec" } }, "*");
};
document.getElementById("apikey").onchange = () => {
  CloudApiKey = document.getElementById("apikey").value;
  parent.postMessage(
    {
      pluginMessage: {
        type: "SetAsync",
        key: "CloudApiKey",
        value: CloudApiKey,
      },
    },
    "*"
  );
};
document.getElementById("userid").onchange = () => {
  UserId = document.getElementById("userid").value;
  parent.postMessage(
    { pluginMessage: { type: "SetAsync", key: "UserId", value: UserId } },
    "*"
  );
};
document.getElementById("prox").onchange = () => {
  Proxy = document.getElementById("prox").value;
  parent.postMessage(
    { pluginMessage: { type: "SetAsync", key: "Proxy", value: Proxy } },
    "*"
  );
};
document.getElementById("uploadImages").onchange = () => {
  UploadImages = document.getElementById("uploadImages").checked;
  parent.postMessage(
    {
      pluginMessage: {
        type: "SetAsync",
        key: "UploadImages",
        value: UploadImages,
      },
    },
    "*"
  );
};
document.getElementById("exportImages").onchange = () => {
  ExportImages = document.getElementById("exportImages").checked;
  parent.postMessage(
    {
      pluginMessage: {
        type: "SetAsync",
        key: "ExportImages",
        value: ExportImages,
      },
    },
    "*"
  );
};

parent.postMessage({ pluginMessage: { type: "FetchAsync" } }, "*");

const DownloadLink = document.getElementById("download");
var Images = [];

function DownloadImages() {
  let Zip = new JSZip();

  for (let i = 0; i < Images.length; i++) {
    var Image = Images[i];
    Zip.file(
      `image-${Image.ImageName}(${i}).png`,
      new Blob([Image.ImageData.buffer], { type: "image/png" })
    );
  }

  Zip.generateAsync({ type: "blob" }).then((Content) => {
    DownloadLink.href = URL.createObjectURL(Content);
    DownloadLink.download = "images.zip";
    DownloadLink.click();
  });

  Images = [];
}

onmessage = async (event) => {
  const { type, data } = event.data.pluginMessage;

  switch (type) {
    case "Download":
      DownloadLink.href =
        "data:text/xml;charset=utf-8," + encodeURIComponent(data);
      DownloadLink.download = "export.rbxmx";
      DownloadLink.click();

      DownloadImages();
      break;
    case "UploadImage":
      const Form = new FormData();
      const blob = new Blob([data.ImageData.buffer], { type: "image/png" });

      if (ExportImages) {
        Images.push(data);
      }

      if (CloudApiKey == "" || UserId == "" || !UploadImages) {
        parent.postMessage(
          {
            pluginMessage: {
              type: "image-upload-fail",
              data: "Cloud API Key is not set",
            },
          },
          "*"
        );
        return;
      }

      Form.append(
        "request",
        JSON.stringify({
          assetType: "Image",
          displayName: "Exported Image",
          description: "Exported from Figma using Figma to Roblox",
          creationContext: {
            creator: {
              userId: parseFloat(UserId),
            },
          },
        })
      );
      Form.append("fileContent", blob, "export.png");

      try {
        fetch(
          Proxy.match(
            /http:\/\/((localhost:[0-9]+)|([a-z]+[\.]*[a-z]*\.[a-z]+))\/.*/
          )
            ? Proxy
            : "https://silenteye.thisstuff.xyz/FigmaToRobloxProxy",
          {
            method: "POST",
            headers: {
              "x-api-key": CloudApiKey,
            },
            body: Form,
          }
        )
          .then((Response) => {
            if (Response.status !== 200) {
              parent.postMessage(
                {
                  pluginMessage: {
                    type: "image-upload-fail",
                    data: "Cloud API Key is not valid",
                  },
                },
                "*"
              );
              return;
            }

            return Response.json();
          })
          .then((Response) => {
            if (Response.error) {
              parent.postMessage(
                {
                  pluginMessage: {
                    type: "image-upload-fail",
                    data: Response.error.message,
                  },
                },
                "*"
              );
            } else {
              Response.UploadId = data.UploadId;
              parent.postMessage(
                {
                  pluginMessage: {
                    type: "image-upload-success",
                    data: Response,
                  },
                },
                "*"
              );
            }
          })
          .catch((Error) => {
            console.warn(Error);
          });
      } catch (Error) {
        parent.postMessage(
          {
            pluginMessage: {
              type: "image-upload-fail",
              data: "An unexpected error occured, is the proxy url correct?",
            },
          },
          "*"
        );
        console.warn(Error);
      }
      break;
    case "GetAsync":
      switch (data.key) {
        case "CloudApiKey":
          document.getElementById("apikey").value = data.value;
          CloudApiKey = data.value;
          break;
        case "UserId":
          document.getElementById("userid").value = data.value;
          UserId = data.value;
          break;
        case "ExportImages":
          document.getElementById("exportImages").checked = data.value;
          ExportImages = data.value;
          break;
        case "UploadImages":
          document.getElementById("uploadImages").checked = data.value;
          UploadImages = data.value;
          break;
        case "Proxy":
          document.getElementById("prox").value = data.value;
          Proxy = data.value;
          break;
      }
      break;
  }
};
