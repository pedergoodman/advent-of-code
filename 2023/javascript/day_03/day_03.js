// @ts-nocheck
import fs from "fs";
import { filterNumbers, filterSymbols } from "./day_03_functions.js";
import { EngineRow } from "./day_03_classes.js";
// import md document of data
const markdown = fs.readFileSync(
  "./2023/javascript/day_03/day_03_input.md",
  "utf8"
);

// split lines into string array items
const rawEngineData = markdown.split("\n");
// console.log('Single line in data is:', rawEngineData[4]);

// * filtering data into usable format
let filteredEngineData = [];

// create an array of EngineData objects with filtered number and symbol arrays
for (let i = 0; i < rawEngineData.length; i++) {
  let row = new EngineRow();

  row.row = i + 1;
  row.values = filterNumbers(rawEngineData[i]);
  row.symbols = filterSymbols(rawEngineData[i]);

  // console.log(rawEngineData[i]);
  // console.log(row);
  filteredEngineData.push(row);
}

let testGroup = 2;
// for (let i = 0; i < testGroup; i++) {
//   // print map for each set of values
//   for (let i = 0; i < testGroup; i++) {
//     console.log(rawEngineData[i]);
//   }

//   console.log(filteredEngineData[i]);
// }

for (let i = 0; i < testGroup; i++) {
  console.log(rawEngineData[i]);
}

// find index and length of symbols
// find index and length of numbers

// compare number index + length to symbol index

// if sybmol is

// if (symbol <= startingIndex - 1 || symbol >= endingIndex + 1) {
// }

// hold the added values
let total = 0;

// for each ROW
for (let i = 0; i < filteredEngineData.length; i++) {
  let currentRow = filteredEngineData[i];
  let currentRowSymbols = filteredEngineData[i].symbols;
  let previousRowSymbols = [];
  let nexRowSymbols = [];

  if (i - 1 >= 0) {
    previousRowSymbols = filteredEngineData[i - 1].symbols;
  }

  if (i + 1 < filteredEngineData.length) {
    nexRowSymbols = filteredEngineData[i + 1].symbols;
  }

  // console.log('currentRowSymbols is: ', currentRowSymbols);
  // console.log('previousRowSymbols is: ', previousRowSymbols);
  // console.log('nexRowSymbols is: ', nexRowSymbols);

  let symbolsToCheck = [
    ...previousRowSymbols,
    ...currentRowSymbols,
    ...nexRowSymbols,
  ];
  console.log(symbolsToCheck);

  // map through the values
  console.log(`ROW: ${i+1}`);
  
  for (const number of currentRow.values) {

    let value = number.value
    let startIndex = number.index - 1
    let endingIndex = number.index + number.length


    console.log(value);
    // console.log(startIndex);
    // console.log(endingIndex);

    for (const symbol of symbolsToCheck) {
      // console.log(symbol);
      let symbolIndex = symbol.index;

      

      if (symbolIndex >= startIndex && symbolIndex <= endingIndex){
        console.log(`they're touching!!! Value is:`, number.value);
        
        total += Number(number.value)
      }      

    }


  }

  // if a has a symbol touching it from either side
  // add it to the total

  // only add current rows values
  // but check the symbol locations of the line above and below
}


console.log(total);
