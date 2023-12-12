import fs from "fs";

// import md document of data
const markdown = fs.readFileSync(
  "./2023/javascript/day_03/day_03_input.md",
  "utf8"
);

const rawEngineData = markdown.split("\n");

console.log(rawEngineData[4]);

let test = rawEngineData[4].match(/\d+/g)


let array = []
let re = /\d+/g
let match 

while ((match = re.exec(rawEngineData[4])) != null) {
  
  console.log(`match is: `, match);
  console.log(`Found ${match[0]} at index ${match.index}`);

const buildObject = {
  value: match[0],
  index: match.index,
  length: match[0].length
}

// console.log(buildObject);

  array.push(buildObject)
}

console.log(array);

console.log(test);



// find index and length of symbols
// find index and length of numbers

// compare number index + length to symbol index  