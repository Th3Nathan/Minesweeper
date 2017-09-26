// isFlagged, isHidden, isBomb, setBomb,
class Tile {
  constructor(value){
    this.isFlagged = false;
    this.isHidden = true;
    this.isBomb = false;
  }

  toggleFlag(){
    if (!this.hidden)
      return;
    if (this.flagged){
      Tile.prototype.flaggedCount -= 1;
      this.flagged = false;
    } else {
      Tile.prototype.flaggedCount += 1;
      this.flagged = true;
    }
  }
}

Tile.prototype.flaggedCount = 0;
