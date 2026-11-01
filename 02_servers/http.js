
import http from "http";

const server = http.createServer((req, res) => {
  res.write("hello from server");
  res.end();
});

const port = 310507;

server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  console.log("server running on port 310507");
});