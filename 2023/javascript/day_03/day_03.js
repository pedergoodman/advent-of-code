import fs from "fs";

// import md document of data
const markdown = fs.readFileSync(
  "./2023/javascript/day_03/day_03_input.md",
  "utf8"
);

const rawEngineData = markdown.split("\n");

console.log(rawEngineData[0]);

rawEngineData[0]