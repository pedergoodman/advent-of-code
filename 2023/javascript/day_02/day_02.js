import { Game, Round, createGameObject } from "./day_02_functions.js";
import fs from "fs";

// import md document of data
const markdown = fs.readFileSync(
  "./2023/javascript/day_02/day_02_input.md",
  "utf8"
);
// separate each line into an array of strings
const rawGameData = markdown.split("\n");
// array to store formatted game data
const formattedGameData = [];
// array to store successful games
let successfulGames = 0;

// create formatted game data
for (const game of rawGameData) {
  formattedGameData.push(createGameObject(game));
  // console.log(createGameObject(game));
}

// max possible values for colors
let maxRed = 12;
let maxGreen = 13;
let maxBlue = 14;

// fin which games were possible given the max possible values
for (const game of formattedGameData) {
  // console.log('highest red is:', game.highestRed());
  // console.log('highest green is:', game.highestGreen());
  // console.log('highest blue is:', game.highestBlue());

  // console.log(game.rounds);
  console.log("highestRed is:", game.highestRed());
  console.log("highestGreen is:", game.highestGreen());
  console.log("highestBlue is:", game.highestBlue());

  let highestRed = game.highestRed();
  let highestGreen = game.highestGreen();
  let highestBlue = game.highestBlue();

  if (maxRed < highestRed) {
    console.log(
      `FAIL: # of available reds (${maxRed}) is less than the highest amount of reds pulled (${highestRed})`
    );
  } else if (maxGreen < highestGreen) {
    console.log(
      `FAIL: # of available greens (${maxGreen}) is less than the highest amount of greens pulled (${highestGreen})`
    );
  } else if (maxBlue < highestBlue) {
    console.log(
      `FAIL: # of available blues (${maxBlue}) is less than the highest amount of blues pulled (${highestBlue})`
    );
  } else {
    console.log(game.gameNumber);

    successfulGames += game.gameNumber;
    // return game.gameNumber;
  }
}

console.log('\n\nsuccessfulGames = ', successfulGames);



