// @ts-nocheck
import fs from "fs";
import { formatData } from "./day_04_functions.js";
// import md document of data
const rawMarkdown = fs.readFileSync(
  "./2023/javascript/day_04/day_04_input.md",
  "utf8"
);

// split lines into string array items
const rawGameData = rawMarkdown.split("\n");
// console.log(rawGameData);
const formattedGameData = formatData(rawGameData);
// console.log(formattedGameData);



