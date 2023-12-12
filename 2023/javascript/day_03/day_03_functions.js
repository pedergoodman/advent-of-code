import { NumberData, SymbolData } from "./day_03_classes.js";

// sort for numbers in string
function filterNumbers(stringToSearch) {
  let regexFilter = /\d+/g;
  let resultArray = [];
  let match;

  while ((match = regexFilter.exec(stringToSearch)) != null) {
    // console.log(`Found ${match[0]} at index ${match.index}`);

    let numberData = new NumberData();

    numberData.value = Number(match[0]);
    numberData.index = match.index;
    numberData.length = match[0].length;

    // push to array
    resultArray.push(numberData);
  }
} // END filterNumbers

function filterSymbols(stringToSearch) {
  // NOT numbers or "."
  let regexFilter = /[^0-9.]/g;
  let resultArray = [];
  let match;

  // sort for numbers in string
  while ((match = regexFilter.exec(stringToSearch)) != null) {
    // console.log(`Found ${match[0]} at index ${match.index}`);

    let symbolData = new SymbolData();

    symbolData.value = match[0];
    symbolData.index = match.index;
    symbolData.length = match[0].length;

    // push to resultArray
    resultArray.push(symbolData);
  }
} // END filterSymbols

export {
  filterNumbers,
filterSymbols
}