/*
Create a `compareBy` function that takes a string `type` and return a function that will be used for sorting an array of strings by a given type.

  - if the `type` is `length` strings should be sorted by length;
  - if the `type` is `alphabet` strings should be sorted alphabetically;
  - for any other values sorting should stay the same;
*/

/**
 * @param {string} type
 *
 * @returns {Function}
 */
function compareBy(type) {
  switch (type) {
    case 'length':
      return (a, b) => a.length - b.length;
    case 'alphabet':
      return (a, b) => a.localeCompare(b);
    default:
      return (a, b) => 0;
  }
}

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

const compareByLength = compareBy('length');
console.log([...words].sort(compareByLength)); 
// ['one', 'two', 'six', 'four', 'five', 'three', 'seven']

const compareByAlphabet = compareBy('alphabet');
console.log([...words].sort(compareByAlphabet)); 
// ['five', 'four', 'one', 'seven', 'six', 'three', 'two']

const compareByUnknown = compareBy('unknown value');
console.log([...words].sort(compareByUnknown)); 
// ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
