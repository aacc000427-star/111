const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {

    const ip =
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress ||
        "Unknown";

    const time = new Date().toLocaleString();

    fs.appendFileSync(
        "ips.txt",
        `${time} | ${ip}\n`
    );

    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("伺服器啟動");
    console.log("http://localhost:3000");
});