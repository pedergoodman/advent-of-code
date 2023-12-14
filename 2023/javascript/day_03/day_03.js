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

// * Log results from part 1 and part 2 functions
// log the part number total
// console.log("Part Number total is: ", findPartNumbers());


for (let index = 0; index < 6; index++) {
  console.log(rawEngineData[index]);
}

// log the gear ratio total
console.log("Gear Ratio total is: ", findGearRatios());

for (let index = 0; index < 6; index++) {
  console.log(rawEngineData[index]);
}


// PART 1

function findPartNumbers() {
  // hold the added values
  let partNumberTotal = 0;

  // for each ROW
  for (let i = 0; i < filteredEngineData.length; i++) {
    let currentRow = filteredEngineData[i];
    let currentRowSymbols = filteredEngineData[i].symbols;
    let previousRowSymbols = [];
    let nexRowSymbols = [];

    // previous row stays an empty array if index is less than 0
    if (i - 1 >= 0) {
      previousRowSymbols = filteredEngineData[i - 1].symbols;
    }

    // previous row stays an empty array if index is more than the length of the array
    if (i + 1 < filteredEngineData.length) {
      nexRowSymbols = filteredEngineData[i + 1].symbols;
    }

    // Checking that captured rows are passed correctly
    // console.log('previousRowSymbols is: ', previousRowSymbols);
    // console.log('currentRowSymbols is: ', currentRowSymbols);
    // console.log('nexRowSymbols is: ', nexRowSymbols);

    // merge all symbols to compare with numbers
    let symbolsToCheck = [
      ...previousRowSymbols,
      ...currentRowSymbols,
      ...nexRowSymbols,
    ];

    // loop through the values
    for (const number of currentRow.values) {
      let numberValue = number.value;
      let startIndex = number.index - 1;
      let endingIndex = number.index + number.length;

      // console.log(value);
      // console.log(startIndex);
      // console.log(endingIndex);

      for (const symbol of symbolsToCheck) {
        // console.log(symbol);
        let symbolIndex = symbol.index;

        if (symbolIndex >= startIndex && symbolIndex <= endingIndex) {
          // console.log(`they're touching!!! Value is:`, numberValue);

          partNumberTotal += Number(numberValue);
        }
      }
    }
  }

  return partNumberTotal;
}

// PART 2

function findGearRatios() {
  // hold the added values
  let gearRatioTotal = 0;

  // for each ROW
  // filteredEngineData.length
  for (let i = 0; i < 3; i++) {
    let currentRow = filteredEngineData[i];
    let currentRowNumbers = filteredEngineData[i].values;
    let previousRowNumbers = [];
    let nexRowNumbers = [];
    
    // previous row stays an empty array if index is less than 0
    if (i - 1 >= 0) {
      previousRowNumbers = filteredEngineData[i - 1].values;
    }

    // previous row stays an empty array if index is more than the length of the array
    if (i + 1 < filteredEngineData.length) {
      nexRowNumbers = filteredEngineData[i + 1].values;
    }

    // Checking that captured rows are passed correctly
    // console.log('previousRowNumbers is: ', previousRowNumbers);
    // console.log('currentRowNumbers is: ', currentRowNumbers);
    // console.log('nexRowNumbers is: ', nexRowNumbers);
    
    // merge all symbols to compare with numbers
    let numbersToCheck = [
      ...previousRowNumbers,
      ...currentRowNumbers,
      ...nexRowNumbers,
    ];
    // console.log(numbersToCheck);

const symbolsToCheck = currentRow.symbols.filter(symbol => symbol.value === '*')
// console.log('checking FILTERED row symbols @ lvl-1: ', symbolsToCheck);


    
    // loop through the symbol values and see what numbers are touching a '*' symbol
    console.log(`Row ${i+1}`);
    for (const symbol of symbolsToCheck) {
      // console.log('symbol in symbolsToCheck: ', symbol);
      let symbolIndex = symbol.index
      
      // checking if a number touches a symbol
      for (const number of numbersToCheck) {
        // console.log(symbol);
        let numberValue = number.value;
        let startIndex = number.index - 1;
        let endingIndex = number.index + number.length;
        
        
        if (symbolIndex >= startIndex && symbolIndex <= endingIndex) {
          console.log(`they're touching!!! SYMBOL index is:`, symbolIndex);
          console.log(`NUMBER index range is ${startIndex}-${endingIndex}`);
          console.log(`they're touching!!! Value is:`, numberValue);


          //
          gearRatioTotal += Number(numberValue);
        }
      } 

    }
    
  }

  return gearRatioTotal;
}