/*
Write a function `findMaximumProduct` that:

- Accepts an array `nums` with integers, and a number `size`.
  - `size` can be equal or greater than `0`.
- Finds the product of the maximal numbers.
  - The length of an array is at least 3 elements and numbers 
    could be a mixture of positives, negatives and zeroes.
  - If `size = 0`, return `1`.
- If the number `size` is greater than or equal to the length 
  of the array, return the product of all numbers in the array.

Notes:

[10, 8, 3, 2, 1, 4, 10]      5
 ^
  [10, 8, 3, 2, 1, 4, 10]
          ^

[10, 8]  80
[]
*/

function findMaximumProduct(nums, size) {
  if (size === 0) {
    return 1;
  }

  // Calculate product
  let firstNumber = nums[0];
  let secondNumber = nums[1];
  let calculatedProductCompare = firstNumber * secondNumber;

  const combinations = [firstNumber];
  let i = 1;

  while (i < nums.length) {
    let calculatedProduct = firstNumber * nums[i];

    if (calculatedProduct > calculatedProductCompare) {
      console.log('print1')
      secondNumber = nums[i];
    }

    i++;
  }

  combinations.push(secondNumber);

  return combinations;
}

// console.log(findMaximumProduct([10, 3, -1, -27] , 3)); 
// // -30
// // Since the size = 3, then the subsequence of size 3
// // whose gives product of maxima is 10 * 3 * -1 = -30;

console.log(findMaximumProduct([10, 8, 3, 2, 1, 4, 10], 5));
// 9600
// Since the size = 5, then the subsequence of size 5
// whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600;


// Experiment:
// Find pair with max product
function findMaximumProduct(nums) {
  let firstNumber = nums[0];
  let secondNumber = nums[1];
  let calculatedProductCompare = firstNumber * secondNumber;

  const combinations = [firstNumber];
  let i = 1;

  while (i < nums.length) {
    let calculatedProduct = firstNumber * nums[i];

    if (calculatedProduct > calculatedProductCompare) {
      console.log('print1')
      secondNumber = nums[i];
    }

    i++;
  }

  combinations.push(secondNumber);

  return combinations;
}

console.log(findMaximumProduct([10, 8, 3, 2, 1, 4, 10]));
// [10, 10]