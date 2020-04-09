const http = require("http");
const { parse } = require("querystring");

//creates the server, it takes a request and a response
const server = http.createServer((req, res) => {
  // tells the server what to do if the request is a POST
  if (req.method === "POST") {
    collectRequestData(req, (result) => {
      console.log(result);
      res.end(result.age);
      //   res.end(`Parsed data belonging to ${result.fname}`);
    });
  }
  // tells the server what to do for anything besides a POST request (default load)
  else {
    res.end(`
            <!doctype html>
            <html>
            <body>
                <form action="/" method="post">
                    <input type="text" name="fname" /><br />
                    <input type="number" name="age" /><br />
                    <input type="file" name="photo" /><br />
                    <button>Save</button>
                </form>
            </body>
            </html>
        `);
  }
});

// tells the server to listen to port 3000
server.listen(3000);

function collectRequestData(request, callback) {
  const FORM_URLENCODED = "application/x-www-form-urlencoded";
  if (request.headers["content-type"] === FORM_URLENCODED) {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk.toString();
    });
    request.on("end", () => {
      callback(parse(body));
    });
  } else {
    callback(null);
  }
}
