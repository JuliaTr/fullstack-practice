/*
Given a `m * n` matrix `grid` which is sorted in non-increasing order both row-wise and column-wise.

Return the number of **negative** numbers in `grid`.

Example 1:
Input: grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3]
]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [
  [3, 2],
  [1, 0]
]
Output: 0

Example 3:
Input: grid = [
  [1, -1],
  [-1, -1]
]
Output: 3

Example 4:
Input: grid = [ [-1] ]
Output: 1

Constraints:
m == grid.length
n == grid[i].length
m === n
1 <= m, n <= 2000
-100 <= grid[i][j] <= 100
*/

function countNegatives(grid) {
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    let left = 0;
    let right = grid[i].length - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      if (grid[i][middle] < 0) {
        count++;
      }

      if (grid[i][middle] > 0) {
        left = middle + 1;
      }
    }
  }

  return count;
}

let grid = [
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3]
]
console.log(countNegatives(grid)); // 8

grid = [
  [3, 2],
  [1, 0]
]
console.log(countNegatives(grid)); // 0

grid = [
  [1, -1],
  [-1, -1]
]
console.log(countNegatives(grid)); // 3

grid = [ [-1] ]
console.log(countNegatives(grid)); // 1
