/*
Given an `array` array reverse its elements' order **in place**. The function should not return anything.

Constraints:
Usage `Array.prototype.reverse` is prohibited
*/

/**
 * @param {Array} array
 *
 * @returns {void}
 */
function reverseArray(array) {
  let idxFirst = 0;
  let idxLast = array.length - 1;

  while (idxLast > idxFirst) {
    const lastElement = array[idxLast];

    array[idxLast] = array[idxFirst];
    array[idxFirst] = lastElement;

    idxFirst++;
    idxLast--;
  }

  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5])); 
// [5, 4, 3, 2, 1]
