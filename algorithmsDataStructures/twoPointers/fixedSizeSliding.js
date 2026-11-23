/*
Find max sum of subarrays.
*/

// Solution (sliding window):
function largestSubarraySum(array, k) {
  let left = 0;
  let right = k - 1;

  // Culculate sum (first subarray):
  let currentSum = 0;

  for (let i = 0; i <= right; i++) {
    currentSum += array[i];
  }

  // Define max sum:
  let maxSum = currentSum;

  while (right + 1 < array.length) {
    currentSum -= array[left];
    currentSum += array[right + 1];

    left++;
    right++;

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}