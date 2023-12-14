// @ts-nocheck
import fs from "fs";
import { countPoints, formatData } from "./day_04_functions.js";
// import md document of data
const rawMarkdown = fs.readFileSync(
  "./2023/javascript/day_04/day_04_input.md",
  "utf8"
);

// split lines into string array items
const rawGameData = rawMarkdown.split("\n");
// console.log(rawGameData);
const formattedGameData = formatData(rawGameData);
// console.log(formattedGameData);

// RESULTS
console.log("Winning count total is: ", countWinningGames(formattedGameData));

// PART 1
function countWinningGames(formattedGameData) {
  let winningCountTotal = 0;
  // let loops = 1; // ! for testing

  for (const game of formattedGameData) {
    let winningCount = 0;
    let matches = [];

    // ! for testing
    // if (loops > 15) {
    //   break;
    // }
    // console.log("Game " + loops);
    // loops++;
    // ! END for testing

    let winningNumbers = game.winningNumbers;
    let haveNumbers = game.numbersHave;

    // check winning
    winningNumbers.forEach(winningNum => {
      haveNumbers.includes(winningNum) && matches.push(winningNum);
    });

    console.log("Number of Wins: ", matches.length);

    // tally scores
    let points = countPoints(matches);

    winningCountTotal += points;
  }
  return winningCountTotal;
}
