'use strict'
//reset, status, initialize(board), isWon, getMove, playMove, updateStatus (points, frozen), getTileValue,
class Game {
  constructor(board){
    this.board = board;
  }

  parsePos(str){

  };

  getMove(){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Select a row and column eg 1 1 is top left corner', (input) => {
      rl.close();
      try {
        let pos = new Position(input);
        this.board.validate(pos); //will throw error if no good
        return pos;
      } catch (e){
        console.log("Invalid space, try again");
        return this.getMove();
      }
    });
  }

  validateMove(position){

  }

  playTurn(){
    //should call itself after getting
  }
}
// let g = new Game(8);
module.exports = {
  g: Game
}
// let g = new Game(9)
