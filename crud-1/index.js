const fs = require('fs');

// fs.mkdirSync("text");

fs.writeFileSync("bio.txt", "Create new file!!");
fs.appendFileSync("bio.txt", "add some new Text!!");

fs.renameSync("bio.txt", "Mybio.txt");

const data = fs.readFileSync("Mybio.txt", "utf8")
console.log(data.toString());

// fs.unlinkSync('Mybio.txt');