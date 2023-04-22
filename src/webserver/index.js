const PORT = 3000;
const SizeLimit = 50 * 1024 * 1024; // 50MB

const express = require("express");
const cors = require("cors");
const axios = require("axios");
const multer = require("multer");

const app = express();
const upload = multer({
    limits: {
        fileSize: SizeLimit,
        fieldSize: SizeLimit
    }
});
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

var Pending = 0;

async function AwaitUpload(req, res, Path, Retry) {
    if (Retry) await sleep(250);

    axios({
        method: "get",
        url: `https://apis.roblox.com/assets/v1/${Path}`,
        headers: {
            "x-api-key": req.headers["x-api-key"],
        }
    }).then(Response => {
        if (!Response.data.done) return AwaitUpload(req, res, Path, true);

        Pending -= 1;

        return res.json(Response.data);
    }).catch(e => {
        Pending -= 1;
        console.log(e);
        return res.sendStatus(500);
    });
}

app.options("/FigmaToRobloxProxy", cors());

app.post("/FigmaToRobloxProxy", cors(), upload.fields([
    { name: "request", maxCount: 1 },
    { name: "fileContent", maxCount: 1 }
]), async function (req, res, next) {
    try {
        if (!req.body.request || !req.files || !req.files.fileContent || !req.files.fileContent[0]) return res.sendStatus(400);

        Pending += 1;

        const File = req.files.fileContent[0];

        const NewBlob = new Blob([File.buffer], { type: File.mimetype })
        const NewBody = new FormData();
        NewBody.append("request", req.body.request);
        NewBody.append("fileContent", NewBlob);

        axios({
            method: "post",
            url: "https://apis.roblox.com/assets/v1/assets",
            data: NewBody,
            headers: {
                "x-api-key": req.headers["x-api-key"],
            }
        }).then(async Response => {
            if (Response.status !== 200) {
                Pending -= 1;
                return res.sendStatus(Response.status);
            }

            AwaitUpload(req, res, Response.data.path);
        }).catch(e => {
            Pending -= 1;
            console.log(e);
            return res.sendStatus(500);
        });
    } catch (e) {
        Pending -= 1;
        console.log(e)
        res.status(500).send(e);
    }
})

app.get("/FigmaToRobloxProxy", (req, res) => {
    res.json({
        "status": "ok",
        "pending": Pending,
    });
});

app.listen(PORT, () => {
    console.log(`Proxy Server started on port ${PORT}`);
    console.log(`Enter the following in the Figma plugin: \x1b[32mhttp://localhost:${PORT}/FigmaToRobloxProxy\x1b[0m`)
})