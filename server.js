const http = require("http");
const fs = require("fs");

// defines the url/hostname, and the port
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// creates the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "image/png");

  fs.readFile("kobyscreen.png", (err, data) => {
    if (err) throw err;
    // console.log(data);
    res.write(data);

    res.end();
  });

  //   console.log(req);

  //   if (req.url === "/hello-world") {
  //     setInterval(() => {
  //       res.write("<div className='hello'>Hello World \n</div>");
  //     }, 1000);
  //     return;
  //   }
});

// tells the server which port to listen to
server.listen(port, hostname, () => {
  console.log("server is running");
});
