'use strict'
const Board = require("./board.js").Board;
const Tile = require("./tile.js").Tile;
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
    const splitStr = str.split(" ");
    if (splitStr.length != 2) throw "Invalid Input";
    const row = parseInt(splitStr[0]);
    const col = parseInt(splitStr[1]);
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
    return this.board.index(rowCol);
  }

  makeMove(){
    console.log("YOU MADE A MOVVVE SUCCESS");
  }

  async playTurn(){
    const rowCol = await this.getMove();
    let idx;
    try {
      idx = this.parseRowCol(rowCol);
    } catch(e){
      console.log("Selected space is not on the board! Try again");
      return this.playTurn();
    }
    const tile = this.board.grid[idx];
    let action;
    if (tile.isHidden)
      action = await tile.getAction();//flag or open
    else {
      console.log("Nah yo, this spot has already been opened!")
      return playTurn();
    }
    this.makeMove(idx, action);
  }
}
const board = new Board(10, 10);
const game = new Game(board);
game.playTurn();
// let g = new Game(8);

// let g = new Game(9)
