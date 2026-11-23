/*
Find the longest subarray with sum not more than `s`.


notes:
[21, 14, 4, 5, 13, 12, 15, 9, 5];

sum <= 35:    sum
[21]         // 21  V
[21, 14]     // 35  V

[21, 14, 4]  // 39  X

[14, 4]      // 18  V
[14, 4, 5]   // 23  V

[14, 4, 5, 13] // 36  X 

[4, 5, 13]   // 22
[4, 5, 13, 12]  // 34 - max length

[4, 5, 13, 12, 15]  // 49  X
[5, 13, 12, 15]     // 45  X
[13, 12, 15]        // 40  X

[12, 15]     // 27

[12, 15, 9]  // 37  X

[15, 9]     // 25
[15, 9, 5]  // 30
*/

// Solution (flexible size sliding window):
function longestSubarray(array, s) {
  let left = 0;
  let length = 0; // max subarray length
  let windowSum = 0;

  for (let right = 0; right < array.length; right++) {
    windowSum += array[right];

    // Redule window length if it's greater than `s`
    while (windowSum > s) {
      // Delete left element from subarray
      windowSum -= array[left];
      left++;
    }

    // `right - left + 1` is subarray length
    if (length < right - left + 1) {
      // Update max length:
      length = right - left + 1;
    }
  }

  return length;
}

let array = [21, 14, 4, 5, 13, 12, 15, 9, 5];
console.log(longestSubarray(array, 35)); // 4

array = [100, 100, 100];
console.log(longestSubarray(array, 35)); // 0
