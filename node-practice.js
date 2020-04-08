const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;
const port2 = 4000;

console.log("port CL: ", port);

const options = {
  hostname: hostname,
  port: port,
  method: "GET",
};

const options2 = {
  hostname: hostname,
  port: port2,
  method: "GET",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello there! (write)\n");
  res.end("Hello World! (end)\n");
});

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello there 2.0! (write)\n");
  res.end("Hello World 2.0! (end)\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}`);
});

server2.listen(port2, hostname, () => {
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

const req2 = http.request(options2, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

req2.on("error", (error) => {
  console.error(error);
});

req2.end();
req.end();
