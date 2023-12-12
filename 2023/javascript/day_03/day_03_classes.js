class EngineRow {
  constructor(roundNumber) {
    this.roundNumber = roundNumber;
  }

  row;
  values = [];
  symbols = [];

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