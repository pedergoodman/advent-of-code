// @ts-nocheck
import { Game } from "./day_04_classes.js";

function formatData(GameData) {
  let result = [];

  for (const game of GameData) {
    let regexFilter = /\d+/g;

    let initialSplit = game.split("|");
    let numbersHave = initialSplit[1].match(regexFilter);

    let winningNumbers = initialSplit[0].match(regexFilter);

    // note* this removes the first number of the "winningNumbers array - it will always be the first number"
    let gameNumber = winningNumbers.shift();

    const formattedGame = new Game();

    formattedGame.gameNumber = gameNumber;
    formattedGame.numbersHave = numbersHave;
    formattedGame.winningNumbers = winningNumbers;
    result.push(formattedGame);
  }
  
  console.log(result);
  return result;
}

export { formatData };
