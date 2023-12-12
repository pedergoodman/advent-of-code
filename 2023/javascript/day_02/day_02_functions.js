// @ts-nocheck

// Game Data Constructor
class Game {
  constructor(game, rounds) {
    this.gameNumber = game;
    this.rounds = rounds;
  }
  gameNumber;
  rounds;

  highestRed() {

    let highest = 0;
    for (const round of this.rounds) {
      let roundRed = round.colors.red;

      if (roundRed > highest) {
        highest = roundRed;
      }
    }

    return highest;
  }

  highestGreen() {
    let highest = 0;

    for (const round of this.rounds) {
      let roundGreen = round.colors.green;

      if (roundGreen > highest) {
        highest = roundGreen;
      }
    }

    return highest;
  }

  highestBlue() {
    let highest = 0;

    for (const round of this.rounds) {
      let roundBlue = round.colors.blue;

      if (roundBlue > highest) {
        highest = roundBlue;
      }
    }

    return highest;
  }
}
// Game Round Data Constructor
class Round {
  constructor(roundNumber) {
    this.roundNumber = roundNumber;
  }

  roundNumber;
  colors = {
    red: 0,
    green: 0,
    blue: 0,
  };

  setRed(redValue) {
    this.colors.red = redValue;
  }

  setGreen(greenValue) {
    this.colors.green = greenValue;
  }

  setBlue(blueValue) {
    this.colors.blue = blueValue;
  }
}

function createGameObject(game) {
  // console.log(game);
  // Grabbing gameNumber & initial split of rounds
  let gameNumber = Number(game.split(": ")[0].split(" ").filter(Number));
  let roundsInitial = game.split(": ")[1].split("; ");
  let roundsFormatted = [];

  // loop through each round and format the colors
  for (let i = 0; i < roundsInitial.length; i++) {
    // create new Round
    const newRound = new Round(i + 1);

    // split colors into an array
    let roundColors = roundsInitial[i].split(", ");
    
    // format color and value, returns as a Round object
    let result = extractRoundColors(roundColors, newRound);
    
    // push formatted rounds to roundFormatted array
    roundsFormatted.push(result);
  }

  const newGame = new Game(gameNumber, roundsFormatted);

  return newGame;
  // console.log("\nFinal Form");
  // console.log(newGame.gameNumber);
  // console.log(newGame.rounds);
}; // END createGameObject

function extractRoundColors(roundColors, newRound) {
  // loop through the colors of each round
  for (const color of roundColors) {
    // grab color if it exists
    let isRed = color.match("red");
    let isGreen = color.match("green");
    let isBlue = color.match("blue");

    // add color to round if it exists
    if (isRed) {
      let redResult = Number(color.split(" ").filter(Number));
      newRound.setRed(redResult);
      // console.log(`IT'S ${isRed}: ${redResult}, original: ${color}`);
    }

    if (isGreen) {
      let greenResult = Number(color.split(" ").filter(Number));
      newRound.setGreen(greenResult);
      // console.log(`IT'S ${isGreen}: ${greenResult}, original: ${color}`);
    }

    if (isBlue) {
      let blueResult = Number(color.split(" ").filter(Number));
      newRound.setBlue(blueResult);
      // console.log(`IT'S ${isBlue}: ${blueResult}, original: ${color}`);
    }
  };

  // return round with color values added, if color wasn't present it's treated as 0
  return newRound;
} // END extractRoundColors

export { Game, Round, createGameObject };
