const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

console.log("port CL: ", port);

const options = {
  hostname: hostname,
  port: port,
  method: "GET",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello there! (write)\n");
  res.end("Hello World! (end)\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}`);
});

// http.get(options, (res) => {
//   console.log(res);
// });

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
