// @ts-nocheck
import fs from "fs";
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



function formatData(GameData) {

  for (const game of GameData) {
    let regexFilter = /\d+/g;

    let initialSplit = game.split("|");
    let numbersHave = initialSplit[1].match(regexFilter);

    let winningNumbers = initialSplit[0].match(regexFilter);

    // note* this removes the first number of the "winningNumbers array - it will always be the first number"
    let gameNumber = winningNumbers.shift();

    console.log("numbersHave is:");
    console.log(numbersHave);

    console.log("winningNumbers is:");
    console.log(winningNumbers);

    console.log(gameNumber);
    console.log("winningNumbers is:");
    console.log(winningNumbers);
  }


}
