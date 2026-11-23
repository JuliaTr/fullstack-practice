/*
Find the longest subarray with sum not more than `s`. 
*/

// Solution (flexible size sliding window):
function longestSubarray(array, s) {
  let left = 0;
  let length = 0;
  let windowSum = 0;

  for (let right = 0; right < array.length; right++) {
    windowSum += array[right];

    while (windowSum > 5) {
      windowSum -= array[left];
      left++;
    }

    if (length < right - left + 1) {
      length = right - left + 1;
    }
  }

  return length;
}