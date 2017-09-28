// isFlagged, isHidden, isBomb, setBomb,
const readline = () => {
  return require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

class Tile {
  constructor(isBomb){
    this.isFlagged = false;
    this.isHidden = true;
    this.isBomb = isBomb;
  }

  validAction(action){
    return action == "R" || action == "F"
  }

  getAction(){
    return new Promise((res, rej) => {
      const rl = readline();
      rl.question('Select an action type, F to toggle flag or R to reveal the square', (input) => {
        rl.close();
        if (this.validAction(input)) res(input);
        else {
          console.log("Invalid action, please enter either F for toggling flag or R to open the space");
          res(this.getAction());
        }
      });
    });
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
module.exports = { Tile };
