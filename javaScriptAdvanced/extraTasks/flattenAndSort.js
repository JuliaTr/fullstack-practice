/*
Create a `flattenAndSort` function that:

- Takes an array of numbers and nested arrays of numbers `nums`.
- Returns an array with all the `nums` numbers sorted in 
  ascending order.
*/

function flattenAndSort(nums) {
  return nums.flat().sort((num1, num2) => num1 - num2);
}

console.log(flattenAndSort([3, 7, [2, 1, 0], -3, 6, [8]]));
// [-3, 0, 1, 2, 3, 6, 7 8]

console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])); 
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(flattenAndSort([[1, 3.2, 5], [100], [-2, 4, 6]])); 
// [-2, 1, 3.2, 4, 5, 6, 100]

console.log(flattenAndSort([[], [], []])); // []

// Works as expected
