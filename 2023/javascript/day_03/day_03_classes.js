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

class NumberData {
  value;
index;
length;

}

class SymbolData {
  value;
index;
length;

}

export {
  NumberData,
  SymbolData
}