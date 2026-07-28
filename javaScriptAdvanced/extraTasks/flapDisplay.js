/*
We've got our hands on a discarded split-flap display, 
similar to those used in airports, old train stations 
or flip-clocks, and decided to have some fun with it.

Each cell, or each character, is based on a rotating 
shaft of flaps, which are displayed in order as the 
shaft rotates. The order of characters on each shaft 
is: 
*/

// `ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789`

/*
We've deduced that the display works like this:

- Starting from the left, all cells (from the current 
  one to the end of the line) flap together until the 
  left-most character is correct.
- Then the mechanism advances by 1 cell to the right...
- This procedure is repeated for each following cell; 
  the cells on the left of the mechanism do not move.
- This procedure is repeated from top to bottom until 
  the whole display is updated.

Let's create a function `flapDisplay` that:

- Accepts an array of strings `lines`.
- Accepts an array of arrays of non-negative integers 
  `rotors` representing all available character cells.
- Returns the array of strings after all the cells are 
  flapped.

Example
Assuming we have a a flap display with 3 cells and 1 
line, which currently spells `CAT`.

1. Current cell position is 1:
  - We flap 1 time; all three cells are flapped
  - Now line says `DBU`
2. Current cell position is 2:
  - We flap 13 times; only cells 2 and 3 are flapped
  - Now line says `DO)`
3. Current cell position is 3:
  - We flap 27 times; only cell 3 is flapped
  - Now line says `DOG`
*/

const SYMBOLS = `ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789`;

function flapDisplay(lines, rotors) {
  const display = [];
  let updatedStr = '';

  for (let idx1 = 0; idx1 < lines.length; idx1++) {
    console.log('---------------------')
    const word = lines[idx1];

    for (let idx2 = 0; idx2 < word.length; idx2++) {
      let char = word[idx2];
      let indexSymbol = SYMBOLS.indexOf(char);

      // if (indexSymbol === 0) {
      //   indexSymbol += 1;
      // }

      console.log(indexSymbol)

      updatedStr = SYMBOLS[indexSymbol + rotors[idx1][idx1]];
      display.push(updatedStr);
    }
  }

  return display;
}

lines = ['CAT'] // array of strings. 
// Each string is a display line of the initial configuration
rotors = [[1, 13, 27]] // array of array-of-cell-values. 
// Each array-of-cell-values is applied to the 
// corresponding display line
console.log(flapDisplay(lines, rotors)); // ['DOG'] 
// array of strings. 
// Each string is a display line of the final configuration



// Experiments:
// const indexes = []; 
// for (const str of lines) {
//   for (const char of str){
//     indexes.push(SYMBOLS.indexOf(char));
//   }
// }

// console.log(indexes);
