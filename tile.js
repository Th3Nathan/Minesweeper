// isFlagged, isHidden, isBomb, setBomb,
class Tile {
  constructor(isBomb){
    this.isFlagged = false;
    this.isHidden = true;
    this.isBomb = isBomb;
  }

  toggleFlag(){
    if (!this.hidden)
      return;
    else if (this.flagged){
      Tile.prototype.flaggedCount -= 1;
      this.flagged = false;
    } else {
      Tile.prototype.flaggedCount += 1;
      this.flagged = true;
    }
  }
}

Tile.prototype.flaggedCount = 0;
