/*
Create a function `filterNumbers` that:

1. Takes two arrays, `objects` and `nums`, where:
  - `objects` contains numbers and exactly one function.
  - `nums` contains only numbers.
2. Finds a function in the `objects` array and uses it to filter `nums`.
3. Returns the filtered `nums` array based on the function found.
*/

function filterNumbers(objects, nums) {
  // Find function
  const foundFunction = objects.find(el => typeof el === 'function');

  // Filter num
  return nums.filter(foundFunction);
}

console.log(filterNumbers([
  (a => a % 2 === 0), 9, 3, 1, 0], [1, 2, 3, 4]
)); // [2, 4]

console.log(filterNumbers(
  [6, 2, 4, (a => a > 5), 5, -3], [4, 5, 6, 7, 8]
)); // [6, 7, 8]

console.log(filterNumbers(
  [(-4, 3, 10, -11, (a => a < 0))], [2, 0, 8, 9, 12]
)); // []

// Works as expected
