/*
Given an integer `n`, return **any** array containing `n` **unique** integers such that they add up to 0.

Input: n = 5
Output: [-7, -1, 1, 3, 4]
Explanation: These arrays also are accepted [-5, -1, 1, 2, 3] , [-3, -1, 2, -2, 4].

Input: n = 3
Output: [-1, 0, 1]

Input: n = 1
Output: [0]


Constraints:
1 <= n <= 1000
*/

/**
 * @param {number} n
 *
 * @returns {number[]}
 */

const EXPECTED_SUM = 0;

function runningSum(array) {
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

function sumZero(n) {
  const result = [];

  if (n === 1) {
    result[result.length] = EXPECTED_SUM;

    return result;
  }

  const sum = runningSum(result);

  while (sum !== EXPECTED_SUM) {
    
  }

  return result;
}

let n = 5;
console.log(sumZero(n)); // array's sum is 0
