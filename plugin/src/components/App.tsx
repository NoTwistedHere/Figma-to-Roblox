import { useEffect, useState } from "react";
import { postMessage, receiveMessage } from "../lib/messages";
import type { Form } from "../lib/types";

const formKeyToExternalKey: Record<keyof Form, string> = {
  apiKey: "CloudApiKey",
  userId: "UserId",
  proxy: "Proxy",
  uploadImages: "UploadImages",
  exportImages: "ExportImages",
};

export default function App() {
  const [listening, setListening] = useState(false);
  const [form, setForm] = useState<Form>({
    apiKey: "",
    userId: "",
    proxy: "",
    uploadImages: false,
    exportImages: false,
  });

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      try {
        if (!event.data) {
          return;
        }

        if (typeof event.data !== "object") {
          return;
        }

        if (!event.data["pluginMessage"]) {
          return;
        }

        if (event.data["pluginMessage"]["source"] && event.data["pluginMessage"]["source"] === "client") {
            return;
        }

        receiveMessage(form, event.data.pluginMessage);
      } catch {}
    }

    window.addEventListener("message", onMessage);
    setListening(true);

    return () => {
      window.removeEventListener("message", onMessage);
      setListening(false);
    };
  }, []);

  useEffect(() => {
    if (!listening) {
      return;
    }

    const timeout = setTimeout(
      () => postMessage("FetchAsync", undefined),
      1000
    );

    return () => clearTimeout(timeout);
  }, [listening]);

  const updateValue = <T extends Form, K extends keyof Form>(
    key: K,
    value: T[K]
  ) => {
    setForm({ ...form, [key]: value });
    postMessage("SetAsync", {
      key: formKeyToExternalKey[key],
      value,
    });
  };

  return (
    <div>
      <button
        onClick={() => {
          parent.postMessage({ pluginMessage: { type: "exec" } }, "*");
        }}
      >
        Convert Selected
      </button>
      <button
        onClick={() => {
          parent.postMessage({ pluginMessage: { type: "close-plugin" } }, "*");
        }}
      >
        Close Plugin
      </button>

      <button onClick={() => {
        postMessage("FetchAsync", undefined)
      }}>Fetch</button>

      <div>
        <label htmlFor="apikey">
          Cloud API key <small>(optional)</small>
        </label>
        <input
          type="text"
          id="apikey"
          value={form.apiKey}
          onChange={({ target: { value } }) => updateValue("apiKey", value)}
        />
      </div>

      <div>
        <label htmlFor="userid">User ID</label>
        <input
          type="text"
          id="userid"
          value={form.userId}
          onChange={({ target: { value } }) => updateValue("userId", value)}
        />
      </div>

      <div>
        <label htmlFor="proxy">Proxy</label>
        <input
          type="text"
          id="proxy"
          value={form.proxy}
          onChange={({ target: { value } }) => updateValue("proxy", value)}
        />
      </div>

      <div>
        <label htmlFor="uploadimages">Upload Images</label>
        <input
          type="checkbox"
          id="uploadimages"
          checked={form.uploadImages}
          onChange={({ target: { checked } }) =>
            updateValue("uploadImages", checked)
          }
        />
      </div>

      <div>
        <label htmlFor="exportimages">Export Images</label>
        <input
          type="checkbox"
          id="exportimages"
          checked={form.exportImages}
          onChange={({ target: { checked } }) =>
            updateValue("exportImages", checked)
          }
        />
      </div>
    </div>
  );
}
