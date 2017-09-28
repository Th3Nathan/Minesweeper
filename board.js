// render, open(pos), initialize(size), populate, reset, isWon, revealBombs,
const Tile = require("./tile.js").Tile;
class Board {
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;
    this.grid = new Array(rows * cols);
    //for now set all to no bomb, eventually do it randomly
    for (let i = 0; i < this.grid.length; i++){
      this.grid[i] = new Tile(false);
    }
  }

  isOpen(idx){
    return this.grid[idx].isRevealed;
  }

  validate(idx){
    if (this.isOnBoard(idx) && this.grid(idx).isHidden)
      return;
    else throw "Out of bounds";
  }

  surrounding(idx){
    const north = idx-cols, south = idx+cols, east = idx+1, west = idx-1;
    const allPos = [north-1, north, north+1, east, south+1, south, south-1, west];
    return allPos.filter(this.isOnBoard);
  }


  isOnBoard(idx){
    return idx >= 0 && idx < this.grid.length;
  }

  index(rowCol){
    //throw error if off the board
    const idx = ((rowCol.row - 1) * this.cols) + rowCol.col - 1;
    if (idx < 0 || idx > this.grid.length - 1)
      throw "out of bounds";
    else
      return idx;
  }
}

module.exports = { Board };
