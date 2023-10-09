var fs = require("fs");

process.chdir(__dirname);
fs.readFile("./data/sample.json", "utf8", (error, data) => {
  if (error) {
    console.log(error.message);
    return;
  }
  console.log(data);
});