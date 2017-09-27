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
    const row, col = str[0], str[str.length - 1];
    return {row, col};
  };

  getMove(){
    return new Promise((res, rej) => {
      const rl = readline();
      rl.question('Select a row and column eg "1 1" is top left corner', (input) => {
        rl.close();
        try {
          if (input == 'hello'){
            rej("Lets go to the catch block in printMove");
          } else if (input == 'bobby') {
            throw "Lets go to the catch block in getMove";
          } else res(input);
        } catch(e){
          console.log("Invalid entry, please enter in the form 2 4 where two is the row and 4 is the column");
          printMove();
        }
      });
    });
    return rl.question('Select a row and column eg "1 1" is top left corner', (input) => {
      rl.close();
      try {
        const rowCol = this.inputToRowCol();
      } catch(e){
        console.log("Invalid entry, please enter in the form 2 4 where two is the row and 4 is the column");
        this.getMove();
      }
    }
  }

  parseMove(rowCol){
    const idx = this.board.idxFromRowCol(rowCol);
    if (this.board.validIdx(idx)) {
      return pos;
    }
    else {
      console.log("Invalid space, try again");
      return this.getMove();
    }
  }

  playTurn(){
  }
}
// let g = new Game(8);
module.exports = {
  g: Game
}
// let g = new Game(9)
