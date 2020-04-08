const http = require("http");

// defines the url/hostname, and the port
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// creates the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World \n");
});

server.listen(port, hostname, () => {
  console.log("server is running");
});

/////
