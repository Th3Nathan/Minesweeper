'use strict'
//reset, status, initialize(board), isWon, getMove, playMove, updateStatus (points, frozen), getTileValue,
const readline = () => {
  return require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

class Game {
  constructor(board){
    this.board = board;
  }

  inputToRowCol(str){
    const splitStr = "1 33".split(" ");
    if (splitStr.length != 2) throw "Invalid Input";
    const row, col = parseInt(splitStr[0]), parseInt(splitStr[1]);
    if (isNaN(row) || isNaN(col)) throw "Not nums";
    return {row, col};
  };

  getMove(){
    return new Promise((res, rej) => {
      const rl = readline();
      rl.question('Select a row and column eg "1 1" is top left corner', (input) => {
        rl.close();
        try {
          const rowCol = this.inputToRowCol(input);
          res(rowCol);
        } catch(e){
          console.log("Invalid entry, please enter in the form 2 4 where two is the row and 4 is the column");
          this.playTurn();
        }
      });
    });
  }

  parseRowCol(rowCol){
    try const idx = this.board.index(rowCol);
    catch(e) {
      console.log("Selected space is not on the board! Try again");
      this.playTurn();
    }
  }

  makeMove(){
    console.log("YOU MADE A MOVVVE SUCCESS");
  }

  async playTurn(){
    const rowCol = await this.getMove();
    const idx = await this.parseRowCol(rowCol);
    const tile = this.board.grid[idx]
    if (tile.isHidden)
      const action = tile.getAction();//flag or open
    else {
      console.log("Nah yo, this spot has already been opened!")
      return playTurn();
    }
    this.makeMove(idx, action);
  }
}
// let g = new Game(8);
module.exports = {
  g: Game
}
// let g = new Game(9)
