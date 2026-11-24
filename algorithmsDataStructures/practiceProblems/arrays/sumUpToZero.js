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

function sumZero(n) {
  const result = [];
  let number = n;

  while (result.length !== n) {
    if (result.length === n - 1 || n === 1) {
      result[result.length] = 0;

      return result;
    }

    result[result.length] = number;
    result[result.length] = -number;

    number--;
  }

  return result;
}

let n = 1;
console.log(sumZero(n)); // [0]

n = 5;
console.log(sumZero(n)); 
// array's sum is 0
