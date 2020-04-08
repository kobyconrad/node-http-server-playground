const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

const options = {
  hostname: hostname,
  port: port,
  method: "GET",
};

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
