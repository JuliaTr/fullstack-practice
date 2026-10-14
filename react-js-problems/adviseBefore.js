/*
Create a function `adviseBefore` that accepts two arguments: the original function `target` and the advising function `advice`, and returns a wrapper function.

When the wrapper is called , it runs the `advice` with given arguments, and checks its result:

- if the result is an array call the `target` with the result elements as new arguments;
- if not - call the `target` with the wrapper arguments.
Return the target result.
*/

/**
 * @param {function} target
 * @param {function} advice
 *
 * @returns {any}
 */

function adviseBefore(target, advice) {
  return function(...args) {
    const result = advice(...args);

    if (Array.isArray(result)) {
      return target(...result);
    }
    
    return target(...args);
  };
}

// `should pass the array to the target function if advice function returns an array`
const target = function(arr) {
  return arr.map(x => x * 2);
};

const advice = function(...args) {
  return [args]
};

const result = adviseBefore(target, advice)(1, 2, 3);
console.log(result); // [2, 4, 6]





// // `should pass the original arguments to the target function if advice function returns a number`
// const target = function(num) {
//   const numArray = [];

//   for (let i = 1; i <= num; i++) {
//     numArray.push(i);
//   }

//   return numArray;
// };

// const advice = function(num) {
//   return Math.floor(num);
// };

// const result = adviseBefore(target, advice)(5.3);

// console.log(result); // [1, 2, 3, 4, 5]




// // `should pass the original arguments to the target function if advice function returns a string`
// const target = function(...letters) {
//   const reversed = letters.reverse().join('');

//   return reversed;
// };

// const advice = function(...letters) {
//   return letters.join('');
// };

// const result = adviseBefore(target, advice)('a', 'b', 'c', 'd', 'e');

// console.log(result); // 'edcba'




// // `should pass the original arguments to the target function if advice function returns a boolean`
// const target = function(string) {
//   return string.split(' ');
// };

// const advice = function(string) {
//   return string.length === 11;
// };

// const result = adviseBefore(target, advice)('hello world');

// console.log(result); // ['hello', 'world']

// All test cases work as expected. Uncomment each at a time to test.
