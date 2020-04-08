const http = require("http");

const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// options to say what kind of request + where to send request
const options = {
  hostname: hostname,
  port: port,
  method: "GET",
};

// defines the request
const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(d);
  });
});

// defines what to do if there's a request error
req.on("error", (error) => {
  console.error(error);
});

// finishes the request so it sends
req.end();
