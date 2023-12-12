import fs from "fs";
import { filterNumbers, filterSymbols } from "./day_03_functions.js";
// import md document of data
const markdown = fs.readFileSync(
  "./2023/javascript/day_03/day_03_input.md",
  "utf8"
);

// split lines into string array items
const rawEngineData = markdown.split("\n");
// console.log(rawEngineData[4]);

filterNumbers(rawEngineData[78])
filterSymbols(rawEngineData[78])

for (const line of rawEngineData) {
  filterSymbols(line)
}

// to pull number data from 1 row
// filterNumberData





// find index and length of symbols
// find index and length of numbers

// compare number index + length to symbol index  