const toml = require("toml");
const fs = require("fs");

const fileContent = {
  gura: fs.readFileSync("./config.ura", "utf8"),
  toml: fs.readFileSync("./config.toml", "utf8"),
};

// console.dir(parse(fileContent.gura));
const config = toml.parse(fileContent.toml);

console.dir(JSON.parse(JSON.stringify(config)));
