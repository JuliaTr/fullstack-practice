/*
Create a function numberToTitle that:

Takes a positive integer `num`, which represents the column number.

Returns the column number in a format **converted** to an 
Excel column name, where:
  - Columns in Excel are named alphabetically.
  - There are 26 letters in the English alphabet, so first 
    26 columns are single-letter names (`A`, `B`, `C`, etc.).
  - Begining with the 27th column, names consist of two 
    letters (`AA`, `AB`, `AC`, etc.).
  - Once `ZZ` is reached, column names are three letters 
    long (`AAA`, `AAB`, `AAC`, etc.)
...and so on.
Example
1 -> A
2 -> B
3 -> C
...
26 -> Z
27 -> AA
28 -> AB
...
*/

const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ALPHA_LENGTH = ALPHA.length;

function calculateWholeNumber(num) {
  return Math.trunc(num / ALPHA_LENGTH);
}

function calculateRemainder(num) {
  return num % ALPHA_LENGTH;
}

function updateString(str, remainder) {
  return ALPHA[remainder - 1] + str;
}

function numberToTitle(num) {
  let wholeNum = calculateWholeNumber(num);
  let remainder = calculateRemainder(num);
  let str = '';

  while (wholeNum > 0) {
    str = updateString(str, remainder);

    remainder = calculateRemainder(wholeNum);
    wholeNum = calculateWholeNumber(wholeNum);
  }

  str = updateString(str, remainder);

  return str;
}

console.log(numberToTitle(1)); // 'A'
console.log(numberToTitle(28)); // 'AB'
console.log(numberToTitle(702)); // 'ZZ'
console.log(numberToTitle(11111)); // 'PKI'



// // Exeriments:
// function numberToTitle(num) {
//   let str = '';
//   const outer = Math.floor(num / ALPHA_LENGTH);

//   for (let idx1 = 0; idx1 <= outer; idx1++) {
//     str += ALPHA[idx1];
  
//     if (idx1 > 0) {
//       for (let idx2 = 0; idx2 <= ALPHA_LENGTH; idx2++) { 
//         if (num <= ALPHA_LENGTH && idx2 + 1 === num) {
//           console.log('print1')
//           str += ALPHA[idx2];
//         }
//       }
//     }
//   }

//   return str;
// }

// console.log(numberToTitle(1)); // 'A'
// console.log(numberToTitle(28)); // 'AB'
