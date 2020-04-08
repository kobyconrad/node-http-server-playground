const http = require("http");
const fs = require("fs");

// defines the url/hostname, and the port
const hostname = "127.0.0.1";
const port = process.env.PORT || 3000;

// creates the server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  var pages = fs.readdirSync("./pages");

  req.url.toString();
  req.url.substring(1);
  var formattedUrl = req.url + ".html";

  fs.readFile(`./pages/${formattedUrl}`, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    res.write(data);
    res.end();
  });

  console.log(pages);

  //   if (req.url === "/") {
  //     fs.readFile("mainpage.html", (err, data) => {
  //       if (err) throw err;
  //       res.write(data);
  //       res.end();
  //     });
  //     return;
  //   }

  //   if (req.url === "/contact") {
  //     fs.readFile("contact.html", (err, data) => {
  //       if (err) throw err;
  //       res.write(data);
  //       res.end();
  //     });
  //     return;
  //   }

  //   res.write("404 not found");
  //   res.statusCode = 404;

  //   res.end();
});

// tells the server which port to listen to
server.listen(port, hostname, () => {
  console.log("server is running");
});
