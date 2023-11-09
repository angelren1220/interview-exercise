// The following code prints a battleship grid to the console. Identify improvements that could be made to this code.

/*
b = [[null,0,0,1],[0,null,null,null],[0,null,null,null],[1,null,null,null]];

print();

function print () {
  // loop each row
  for(i=0;i<b.length;i++){
    // console.log(i)
    l = "|"
    // loop each column
    for(k=0;k<b[i].length;k++) {
      // console.log(k)
      if(b[i][k] == 0)
        l+="O";
      if(b[i][k] == 1)
        l+="X";
      if(b[i][k] == null)
        l+=" ";
        l+="|";
      }
      console.log(l)
  }
}
*/

//1. b, l, should be renamed for clarity
//2. use const or let to declare the variables
//3. avoid use 0 and 1 to represent empty or occupied cells
//4. multiple if statements could be simplified using else
//5. use === for strict equality comparisons
//6. use forEach or for of loop

const EMPTY = 0;
const SHIP = 1;
const board = [[null, EMPTY, EMPTY, SHIP], [EMPTY, null, null, null], [EMPTY, null, null, null], [SHIP, null, null, null]];

printBoard();

function printBoard() {
  board.forEach(row => {
    let rowString = "|"
    row.forEach( cell => {
      if(cell === EMPTY){
        rowString += "O" 
      } else if (cell === SHIP){
        rowString += "X"
      } else {
        rowString += " "
      }
      rowString += "|"
    })
    console.log(rowString)
  })
}