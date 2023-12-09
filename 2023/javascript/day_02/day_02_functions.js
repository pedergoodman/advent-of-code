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
  let roundsFinalSplit = [];

  console.log(gameNumber);
  // console.log(roundsInitial);
  // console.log(roundsFinalSplit);

  for (let i = 0; i < roundsInitial.length; i++) {
    // create new Round 
    const newRound = new Round(i + 1)
    console.log(newRound);

    // split colors into an array
    let roundColors = roundsInitial[i].split(", ")
    console.log(roundColors);
  }
}

function extractRoundColors(roundData) {
  console.log(roundData);
  
}

export { Game, Round, createGameObject };
