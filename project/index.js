const fs = require("fs");
const data = {
  name: "Yash borda",
  age: 20,
  email: "yashborda123@gmail.com",
  profession: "Web devlopment",
  workplace: "surat infotech",
};

const jsonData = JSON.stringify(data);
fs.writeFile("mydata.json", jsonData, (err) => {
  console.log("done");
});

fs.readFile("mydata.json", "utf-8", (err, data) => {
    const orginal = JSON.parse(data);
    console.log(data);
    console.log(orginal);
})
