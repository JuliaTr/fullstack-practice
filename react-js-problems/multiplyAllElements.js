/*
Write a function `multiplyAll` that accepts an array of integers `numbers`. This function must return another function, which takes one integer `multiplier` as an argument and returns a new array.

The returned array should consist of each of the elements from the array `numbers` multiplied by the `multiplier`.

Consider following:
- You can not mutate the original array `numbers`;
- Integer `multiplier` and numbers in array `numbers` can be positive, negative and zero;
- Return an empty array if `numbers === []`.
*/

function multiplyAll(numbers) {
  return function(multiplier) {
    return numbers.map(number => number * multiplier);
  };
}

console.log(multiplyAll([])(5)); // []
console.log(multiplyAll([1, 2, 3])(0)); // [0, 0, 0]
console.log(multiplyAll([9, 10, 11])(2)); // [18, 20, 22]
console.log(multiplyAll([-3, 2, 1, -9, 4])(-1)); // [3, -2, -1, 9, -4]

// works as expected
