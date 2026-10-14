/*
Create a function `createList` that:

1. Takes an array of objects `objs` and a string `name`, which represents a property key.
2. Returns an array of values that correspond to the specified property key (`name`) from each object in the `objs` array.

If an object doesn't have the specified property, include `undefined` in the output array for that object.
*/

/**
 * @param {Array.<Object>} objs
 * @param {string} name
 *
 * @returns {any[]}
 */
function createList(objs, name) {
  const result = [];

  if (objs.length === 0) {
    return result;
  }

  for (const obj of objs) {
    result.push(obj[name]);
  }

  return result;
}

console.log(createList([{ a: 1 }, { a: 2 }], 'a')); 
// [1, 2]

console.log(createList([{ a: 1, b: 3 }, { a: 2 }], 'b'));
// [3, undefined]

console.log(createList([{ a: 1, b: 3 }, { a: 2 }], 'c'));
// [undefined, undefined]

console.log(createList([], 'd')); // []

// Works as expected
