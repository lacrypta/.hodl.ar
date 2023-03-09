const toml = require("toml");
const yaml = require("yaml");
const fs = require("fs");

const fileContent = {
  toml: fs.readFileSync("./config.toml", "utf8"),
  yaml: fs.readFileSync("./config.yml", "utf8"),
};

// console.dir(parse(fileContent.gura));
const config = yaml.parse(fileContent.yaml);

console.dir(config);
