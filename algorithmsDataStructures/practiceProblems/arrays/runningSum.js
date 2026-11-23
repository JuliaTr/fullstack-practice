/*
Write a function `runningSum` that takes an array of numbers and returns an array of its "running sums", the sum of all elements up to the current one.
*/

/**
 * @param {number[]} nums
*
* @returns { number[] }
*/
function runningSum(nums) {
  const runningTotal = [];
  let idx = 0;
  let total = nums[idx];

  while (idx < nums.length) {
    if (idx > 0) {
      total += nums[idx];
    }

    runningTotal[runningTotal.length] = total;

    idx++;
  }

  return runningTotal;
}

console.log(runningSum([3, 1, 2, 10, 1])); 
// [3, 4, 6, 16, 17]
