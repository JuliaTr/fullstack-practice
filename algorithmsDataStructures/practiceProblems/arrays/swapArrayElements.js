/*
Given the array array and numbers `i` and `j`, swap elements at indexes `i` and `j` **in place**.

Constraints

0 <= i < array.length
0 <= j < array.length
*/
/**
 * @param {Array} array
 * @param {number} i
 * @param {number} j
 *
 * @returns {void}
 */
function swapArray(array, i, j) {
  const elementToMove = array[i];

  array[i] = array[j];
  array[j] = elementToMove;

  return array;
}

console.log(swapArray([1, 2, 3, 4, 5], 1, 2)); 
// [1, 3, 2, 4, 5]

const array = [1, 2, 3, 4, 5];

console.log(swapArray(array, 4, 2)); 
// [1, 2, 5, 4, 3]

console.log(swapArray(array, 1, 2)); 
// [1, 5, 2, 4, 3]

console.log(swapArray(array, 0, 1)); 
// [5, 1, 2, 4, 3]
