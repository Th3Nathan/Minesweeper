'use strict'
const readline = () => {
  return require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
}

const getMove = () => {
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
}

const printMove = async () => {
  let input;
  try {
    input = await getMove();
  } catch(e) {
    console.log("hello from catch block of printMove");
    return printMove();
  }
  console.log(input);
};

printMove();
