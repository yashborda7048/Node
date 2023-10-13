// const fs = require("fs");

// const data = {
//   name: "Yash borda",
//   age: 20,
//   email: "yashborda123@gmail.com",
//   profession: "Web devlopment",
//   workplace: "surat infotech",
// };

// const jsonData = JSON.stringify(data);
// fs.writeFile("mydata.json", jsonData, (err) => {
//   console.log("done");
// });

// fs.readFile("mydata.json", "utf-8", (err, data) => {
//     const orginal = JSON.parse(data);
//     console.log(data);
//     console.log(orginal);
// })

const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync(`${__dirname}/user/mydata.json`, "utf-8");

  if (req.url == "/") {
    res.end("Hello Create your local server.");
  } else if (req.url == "/about") {
    res.end("<h1> about us. </h1>");
  } else if (req.url == "/contact") {
    res.end("<h1> contact us. </h1>");
  } else if (req.url == "/user") {
      res.writeHead(200, { "Content-type": "application/json" });

    // fs.readFile(`${__dirname}/user/mydata.json`, "utf-8", (err, data) => {
    //   res.end(data);
    // });
    res.end(data);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 page not found. Page doesn't not exist. </h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
});
