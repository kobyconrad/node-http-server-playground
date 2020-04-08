const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const options = {
  hostname: hostname,
  port: port,
  method: "GET",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World! (end)\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}`);
});

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
