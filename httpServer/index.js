const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("Hello Create your local server.");
  } else if (req.url == "/about") {
    res.end("<h1> Server create by yash borda. </h1>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 page not found. Page doesn't not exist. </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
