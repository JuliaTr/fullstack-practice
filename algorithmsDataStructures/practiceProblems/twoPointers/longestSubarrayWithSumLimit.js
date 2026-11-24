/*
Given a positive integer array `nums` and an integer `target`, implement a function `longestSubarrayWithSumLimit` that finds the length of the longest subarray with a sum smaller than or equal to `target`.
*/

function longestSubarrayWithSumLimit(nums, target) {
  let left = 0;
  let length = 0;
  let windowSum = 0;

  for (let right = 0; right < nums.length; right++) {
    windowSum += nums[right];

    while (windowSum > target) {
      windowSum -= nums[left];
      left++;
    }

    if (length < right - left + 1) {
      length = right - left + 1;
    }
  }

  return length;
}

console.log(longestSubarrayWithSumLimit([1, 6, 3, 1, 2, 4, 5], 10)); // 4 
// The longest subarray with sum not exceeding 10 is [3, 1, 2, 4], which has length 4
