document.addEventListener('DOMContentLoaded', startGame)

var board = new Object();
 board.cells = [];





function makeBoard(width) {
  for(var i = 0; i < width; i++) {
    for(var j = 0; j < width; j++) {
      board.cells.push({
        row: i,
        col: j,
        isMine: Math.random()>0.80,
        hidden: true
      })
    }
  }
}

var button = getElementsByTagName('button')
button.addEventListener("click", refresh)


function startGame () {

var boardSize = prompt('Pick a number between 3 and 6 to determine the size of your board.');

while (isNaN(boardSize) || boardSize > 6 || boardSize < 3){
  boardSize = prompt("It has to be a NUMBER between 3 and 6!");
}
makeBoard(boardSize);

document.addEventListener("click", checkForWin);
document.addEventListener("contextmenu", checkForWin);

for (var i = 0; i < board.cells.length; i++) {
  board.cells[i]["surroundingMines"] = countSurroundingMines(board.cells[i]);
}
lib.initBoard()
}


function checkForWin () {
  var bomb
for (var i = 0; i < board.cells.length; i++) {
  if (board.cells[i].isMine === true && board.cells[i].isMarked === false){
    return;
  } if (board.cells[i].hidden === true && board.cells[i].isMine === false){
    return;
  }
}

    lib.displayMessage('You win!')
}


function countSurroundingMines (cell) {
  var surroundingMines = lib.getSurroundingCells(cell.row, cell.col)
  var count=  0
for (var i = 0; i < surroundingMines.length; i++) {
  if (surroundingMines[i].isMine){
    count++
  }
}
return count;
}

// Define your `board` object here!
/*  var board = {
   cells: [
     {
       row: 0,
       col: 0,
       isMine: true,
       isMarked: false,
       hidden: true,

     },
     {
       row: 0,
       col: 1,
       isMine: false,
       isMarked: false,
       hidden: true,

     },
     {
       row: 0,
       col: 2,
       isMine: true,
       isMarked: false,
       hidden: true,

     },
     {
       row: 1,
       col: 0,
       isMine: false,
       isMarked: false,
       hidden: true,

     },
     {
       row: 1,
       col: 1,
       isMine: false,
       isMarked: false,
       hidden: true,

     },
      {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,

    },
      {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,

    },
      {
     row: 2,
     col: 1,
     isMine: false,
     isMarked: false,
     hidden: true,

   },
      {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,

      }
   ]
 };
*/
