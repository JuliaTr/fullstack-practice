/*
Write a function `getMaximumProduct`, that:

1. Accepts an array `nums` with numbers.
2. Finds the maximum product obtained from multiplying `2` adjacent numbers in the array.

The length of an array is at least `2` elements, and the array can contain zeros, positive and negative numbers.
*/

function calculateProductAdjucentNumbers(number1, number2) {
  return number1 * number2;
}

function getMaximumProduct(nums) {
  let maxProduct = calculateProductAdjucentNumbers(nums[0], nums[1]);

  for (let i = 0; i < nums.length - 1; i++) {
    const product = calculateProductAdjucentNumbers(nums[i], nums[i + 1]);

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
}

console.log(getMaximumProduct([1, 2, 3])); // 6; 
// 2 * 3 = 6

console.log(getMaximumProduct([5, -4, 2, 8, 0])); 
// 16; // 2 * 8 = 16

console.log(getMaximumProduct(
  [-23, 4, -5, 99, -27, 329, -2, 7, -921]
)); // -14; // -2 * 7 = -14

// Works as expected
