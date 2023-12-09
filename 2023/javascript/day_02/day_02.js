import {Game, Round, createGameObject} from './day_02_functions.js'
import fs from 'fs';
// import md document of data
const markdown = fs.readFileSync('./2023/javascript/day_02/day_02_input.md', 'utf8');
// separate each line into an array of strings
const gameData = markdown.split('\n');
// console.log(lines);

for (const game of gameData) {
  console.log(game);
  createGameObject(game)
}



// * process for 1 Game (This will be a for loop)
// index of game 
let i = 69
console.log(gameData[i]);

// Grabbing gameNumber (will be +1 of index)
let gameNumber = Number(gameData[i].split(": ")[0].split(" ").filter(Number))
let roundsInitialResult = gameData[i].split(": ")[1].split("; ") //.split(",")
let roundsFinalSplit = []

// create new 

for (let i = 0; i < roundsInitialResult.length; i++) {
  // create new Round object
  const newRound = new Round(i + 1)

  // split colors into an array
  let roundColors = roundsInitialResult[i].split(", ")
  // console.log(roundColors);
/*
  // extract color and and value
  for (const color of roundColors) {
    console.log(color)
    // check if it contains a color
    let isRed = color.match("red")
    let isGreen = color.match("green")
    let isBlue = color.match("blue")
    
    // set color value in round data
    if (isRed = "red") {
      let redResult = Number(color.split(' ').filter(Number))
      newRound.setRed(redResult)

      console.log(`IT'S ${isRed}: ${redResult}, original: ${color}`);
    }

    if (isGreen = "green") {
      let greenResult = Number(color.split(' ').filter(Number))
      newRound.setGreen(greenResult)

      console.log(`IT'S ${isGreen}: ${greenResult}, original: ${color}`);
    }

    if (isBlue = "blue") {
      let blueResult = Number(color.split(' ').filter(Number))
      newRound.setBlue(blueResult)

      console.log(`IT'S ${isBlue}: ${blueResult}, original: ${color}`);
    }
    
  }
  */
  
  roundsFinalSplit.push(newRound) 
}

console.log('gameNumber is:', gameNumber);
console.log('roundsFinalSplit is: ', roundsFinalSplit);

const newGame = new Game(gameNumber, roundsFinalSplit);

console.log('newGame is: \n', newGame);






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
