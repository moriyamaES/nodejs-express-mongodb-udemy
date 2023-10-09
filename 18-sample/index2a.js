var http = require("http");

var server = http.createServer();
server.on("request", (request, response) => {

  var data = "Hello World";

  response.writeHead(200, {
    "content-Length": Buffer.byteLength(data),
    "Content-Type": "text/plain"
  });
  response.write(data, "utf8");
  response.end();
});
server.listen(3000);
