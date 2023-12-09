import {Game, Round, createGameObject} from './day_02_functions.js'
import fs from 'fs';
// import md document of data
const markdown = fs.readFileSync('./2023/javascript/day_02/day_02_input.md', 'utf8');
// separate each line into an array of strings
const rawGameData = markdown.split('\n');
// console.log(lines);



for (const game of rawGameData) {
  createGameObject(game)
}




  
  
  









/*
Want to know which games would **have been possible** if the bag contained only:
  12 red cubes
  13 green cubes
  14 blue cubes

/*
1. Split lines into readable values
  1. separate lines into an array
  2. split on "Game #: "
  - set to object {"gameNumber": ##}
  3. split everything after "Game # " on "; "
  4. for each item in resulting array
    - record roundNumber
    - split on "## text" pattern
    - set color to "RGB: 2" in constructor
  5. loop through results to calculate total

2. Check values for RGB
  if the number of cube that were pulled out is GREATER THAN the "test value", 
  then the game wasn't possible

2. 
*/




/*
* create new Game, access highest values 
const gameOne = new Game(testData[0].gameNumber, testData[0].rounds)

console.log(gameOne);


let redResult = gameOne.highestRed()
let greenResult = gameOne.highestGreen()
let blueResult = gameOne.highestBlue()

console.log('gameNumber is: ', testData[0].gameNumber);
console.log('redResult is: ', redResult);
console.log('greenResult is: ', greenResult);
console.log('blueResult is: ', blueResult);
*/
