import fs from "fs";

// import md document of data
const markdown = fs.readFileSync(
  "./2023/javascript/day_03/day_03_input.md",
  "utf8"
);

// split lines into string array items
const rawEngineData = markdown.split("\n");
// console.log(rawEngineData[4]);




// to pull number data from 1 row
// filterNumberData
let filterNums = /\d+/g
let filterSymbols = /[^0-9.]/g
let array = []
let match 

while ((match = filterSymbols.exec(rawEngineData[4])) != null) {
  
  // console.log(`match is: `, match);
  console.log(`Found ${match[0]} at index ${match.index}`);
// data to pull from match
const buildObject = {
  value: match[0],
  index: match.index,
  length: match[0].length
}
// push to array
  array.push(buildObject)
}

console.log(array);
console.log(filterSymbols.exec(rawEngineData[4]));





// find index and length of symbols
// find index and length of numbers

// compare number index + length to symbol index  