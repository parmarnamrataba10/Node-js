import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

    fs.readFile("index.html", (err, data) => {

        if (err) {
            return res.end("Fail to load file");
        }

        res.writeHead(200, { "content-type": "text/html" });
        res.end(data);

    });
});

const port = 1111;

server.listen(port, (err) => {
    if (err) {
        console.log(err);
    }

    console.log(`server running on ${port}`);
});