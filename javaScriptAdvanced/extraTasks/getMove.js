/*
Create a function getMove that:

Takes a string array `board` representing a Tic-Tac-Toe game board, where:
  - Array has nine elements, where `''` for an empty space, 
    `X` for the **X player**, or `0` for the **O player**.
  - Array contains elements of nine indexes, like so:
0 | 1 | 2
---+---+---
3 | 4 | 5
---+---+---
6 | 7 | 8

We're playing as the Xs, and fhe function should return the index of our next move:
  - If we can win in one move, returns that index.
  - Otherwise, returns any index corresponding to an empty position.
To visualize, below board will be presented as 
`['X', '', '', '0', '', '', 'X', '', '0']`:

 X |   |  
---+---+---
 0 |   |  
---+---+---
 X |   | 0
*/

const HUMAN_MARK = 'X';
const EMPTY_SPACE = '';
const ADVANTAGE = 2;
const WINNING_LINES = [
  [0, 1, 2], // row
  [3, 4, 5], // row
  [6, 7, 8], // row

  [0, 3, 6], // column
  [1, 4, 7], // column
  [2, 5, 8], // column

  [0, 4, 8], // diagonal
  [2, 4, 6], // diagonal
];

function getAllSpacesWithX(board) {
  const xIndexes = [];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === HUMAN_MARK) {
      xIndexes.push(i);
    }
  }

  return xIndexes;
}

function checkLine(line, xIndexes) {
  const xMarks = [];

  for (const value of line) {
    for (const index of xIndexes) {
      if (value === index) {
        xMarks.push(true);
      }
    }
  }

  return xMarks.length > 1;
}

function getFinalWinningSpace(xIndexes, i) {
  for (const line of WINNING_LINES) {
    if (checkLine(line, xIndexes) && line.includes(i)) {
      return i;
    }
  }
}

function getMove(board) {
  const xIndexes = getAllSpacesWithX(board);
  const emptySpaces = [];
  let i = 0;

  while (i < board.length) {
    if (board[i] === EMPTY_SPACE) {
      if (xIndexes.length < ADVANTAGE) {
        return i;
      }

      if (xIndexes.length > ADVANTAGE) {
        const finalSpace = getFinalWinningSpace(xIndexes, i);

        if (finalSpace === i) {
          return finalSpace;
        }
      }

      emptySpaces.push(i);
    }

    i++;
  }

  return emptySpaces[0];
}

console.log(getMove(['', '', '', '0', '', '', 'X', '', '']));
// 0 
// 1, 2, 4, 5, 7, 8 are available as well
/*
['', '', '', 
'0', '', '', 
'X', '', '']
*/

console.log(getMove(['0', '', '', '0', 'X', '', 'X', '0', 'X']));
// 2 
// 2 is the only winning move
/*
['0', '', '', 
'0', 'X', '', 
'X', '0', 'X']
*/

// `should return any available position if there are two 
// 'X's on the board but there is no winning move`
console.log(getMove(['', 'X', '', '0', '', '', 'X', '0', '']));
// [0, 2, 4, 5, 8] any of them
/*
['', 'X', '', 
'0', '', '', 
'X', '0', '']
*/

// `should return any available position if there are three 
// 'X's on the board but there is no winning move`
console.log(getMove(['X', '0', 'X', '', '', '', '0', 'X', '0']));
// [3, 4, 5] any of them
/*
['X', '0', 'X', 
 '',  '',  '', 
 '0', 'X', '0']
*/

// Works as expected
