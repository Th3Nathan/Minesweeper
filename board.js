// render, open(pos), initialize(size), populate, reset, isWon, revealBombs,
class Board {
  constructor(rows, cols){
    this.rows = rows;
    this.cols = cols;
    this.grid = Array.new(rows * cols);
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

  index(row, col){
    return (row - 1 * this.cols) + col - 1;
  }
}
