// const fs = require('fs');
import fs from 'fs';
// import md document of data
const markdown = fs.readFileSync('./data/day_01_input.md', 'utf8');
// separate each line into an array of strings
const lines = markdown.split('\n');
// console.log(lines);

const newSequenceKeys = []
// let sequenceTotal = 0

// * CODE Day 1 - Part 1

for (let i = 0; i < lines.length; i++) {
  // pull out all numbers and rebuild the string with only numbers 
  let numbersInLine = lines[i].split('').filter(Number)
  // only keep the first and last numbers.
  // If there is only one number, add a second of the same number (it's both first and last)
  let buildNewString = numbersInLine[0] + numbersInLine[numbersInLine.length - 1]
  let numberToPush = Number(buildNewString)
  // add it to a new array
  newSequenceKeys.push(numberToPush)
  // sequenceTotal = 
  // console.log('TEST LOOP');
  // console.log('loop #', i + 1);
  // console.log('numbersInLine is:', numbersInLine);
  // console.log('numberToPush is:', numberToPush);
}
// sum total the new array
const initialValue = 0
let sequenceTotal = newSequenceKeys.reduce(
  (accumulator, currentValue) => accumulator + currentValue, initialValue 
)
console.log(sequenceTotal);


/*

* TEST Day 1 - Part 1

let test = lines[453].split('').filter(Number)
console.log('test is:', test);

let buildNewString = test[0] + test[test.length - 1]
console.log('buildNewString is:', buildNewString);

let numberToPush = Number(buildNewString)
console.log('numberToPush is:', numberToPush);

  newSequenceKeys.push(numberToPush)
console.log('newSequenceKeys is:', newSequenceKeys);

*/








