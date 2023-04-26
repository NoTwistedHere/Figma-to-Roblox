import { z } from "zod";
import { Form } from "./types";

const outboundMessages = {
  SetAsync: z.object({
    key: z.string(),
    value: z.string().or(z.boolean()),
  }),
  FetchAsync: z.undefined(),
  "image-upload-fail": z.object({
    data: z.string(),
  }),
  "image-upload-success": z.object({
    data: z.any(),
  }),
};

export const postMessage = <
  T extends typeof outboundMessages,
  K extends keyof typeof outboundMessages
>(
  type: K,
  payload: z.infer<T[K]>
) => {
  console.log(type, payload);
  window.postMessage({
    pluginMessage: {
      type,
      ...payload,
      source: "client"
    },
  }, "*");
};

const inboundMessages = {
  Download: z.string(),
  GetAsync: z.object({
    key: z.string(),
    value: z.unknown(),
  }),
  UploadImage: z.object({
    ImageData: z.any(),
    UploadId: z.number(),
    ImageName: z.string(),
  }),
};

const inboundMessageSchema = z.object({
  type: z.enum(["Download", "GetAsync", "UploadImage"]),
  data: z.any(),
});

export const receiveMessage = (state: Form, raw: unknown) => {
  console.log(raw);
  const message = inboundMessageSchema.parse(raw);

  switch (message.type) {
    case "Download":
      const downloadData = inboundMessages["Download"].parse(message.data);

      const link = document.createElement("a");

      link.href =
        "data:text/xml;charset=utf-8," + encodeURIComponent(downloadData);
      link.download = "export.rbxmx";
      link.click();

      link.remove();

      break;
    case "GetAsync":
      break;
    case "UploadImage":
      const uploadImageData = inboundMessages["UploadImage"].parse(
        message.data
      );
      const form = new FormData();
      const blob = new Blob([uploadImageData.ImageData.buffer], {
        type: "image/png",
      });

      if (state.exportImages) {
        // TODO: Image export logic
      }

      if (state.apiKey == "" || state.userId == "" || !state.uploadImages) {
        postMessage("image-upload-fail", { data: "Cloud API Key is not set" });
        return;
      }

      form.append(
        "request",
        JSON.stringify({
          assetType: "Image",
          displayName: "Exported Image",
          description: "Exported from Figma using Figma to Roblox",
          creationContext: {
            creator: {
              userId: parseFloat(state.userId),
            },
          },
        })
      );
      form.append("fileContent", blob, "export.png");

      try {
        fetch(
          state.proxy.match(
            /http:\/\/((localhost:[0-9]+)|([a-z]+[\.]*[a-z]*\.[a-z]+))\/.*/
          )
            ? state.proxy
            : "https://silenteye.thisstuff.xyz/FigmaToRobloxProxy",
          {
            method: "POST",
            headers: {
              "x-api-key": state.apiKey,
            },
            body: form,
          }
        )
          .then((Response) => {
            if (Response.status !== 200) {
              postMessage("image-upload-fail", {
                data: "Cloud API Key is not set",
              });
              return;
            }

            return Response.json();
          })
          .then((Response) => {
            if (Response.error) {
              postMessage("image-upload-fail", {
                data: "Cloud API Key is not set",
              });
            } else {
              postMessage("image-upload-success", { data: Response });
            }
          })
          .catch((Error) => {
            console.warn(Error);
          });
      } catch (Error) {
        postMessage("image-upload-fail", {
          data: "An unexpected error occured, is the proxy url correct?",
        });
        console.warn(Error);
      }

      break;
  }
};
