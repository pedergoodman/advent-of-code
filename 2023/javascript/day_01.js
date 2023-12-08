const fs = require('fs');
// import md document of data
const markdown = fs.readFileSync('./data/day_01_input.md', 'utf8');
// separate each line into an array of strings
const lines = markdown.split('\n');
// console.log(lines);

const newSequenceKeys = []

/*
for (let i = 0; i < 10; i++) {
  // pull out all numbers and rebuild the string with only numbers 
  let numbersInLine = lines[i].match(/(\d+)/g)
  // only keep the first and list numbers
  // if there is only one number, and a second of the same number (it's both first and last)
  let buildNewString = numbersInLine[0] + numbersInLine[numbersInLine.length - 1]
  let numberToPush = Number(buildNewString)
  // add it to a new array
  newSequenceKeys.push(numberToPush)

  console.log('loop #', i + 1);
  console.log('numbersInLine is:', numbersInLine);
  console.log('numberToPush is:', numberToPush);

}
 */

// for each line
//   pull out all numbers and rebuild the string with only numbers 
//   only keep the first and list numbers
//   if there is only one number, and a second of the same number (it's both first and last)
//   add it to a new array


// let test = lines[3].match(/(\d+)/g)
let test = lines[453].split('').filter(Number)
// let test = test

console.log('test is:', test);

let buildNewString = test[0] + test[test.length - 1]
console.log('buildNewString is:', buildNewString);

  let numberToPush = Number(buildNewString)
console.log('numberToPush is:', numberToPush);

  newSequenceKeys.push(numberToPush)
console.log('newSequenceKeys is:', newSequenceKeys);






// sum total the new array