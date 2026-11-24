/*
Implement a function `findLargestSubarray` that takes an array `nums` consisting of only non-negative integers and an integer `k`. The function should find the largest sum among all subarrays of length `k` in `nums`.
*/

function calculateSum(nums, right) {
  let sum = 0;

  for (let i = 0; i <= right; i++) {
    sum += nums[i];
  }

  return sum;
}

function findLargestSubarray(nums, k) {
  let left = 0;
  let right = k - 1;

  let currentSum = calculateSum(nums, right);
  let maxSum = currentSum;

  while (right + 1 < nums.length) {
    currentSum -= nums[left];
    currentSum += nums[right + 1];

    left++;
    right++;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

console.log(
  findLargestSubarray(
    [1, 2, 3, 7, 4, 1], 
    3
  ),
); // 14 
// the largest sum of a subarray with length 3 is given by [3, 7, 4], which sums to 14. 
