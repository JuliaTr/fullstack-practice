/*
Write a function `searchInsert` that accepts a sorted array of integers `nums` and a integer `target`. If the array includes a value equal to `target`, return its index. If not, return the index where it would be if it were inserted in order.

Note: if the array contains several elements equal to `target`, return the index of the first one.
*/

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    // console.log(middle)

    if (nums[middle] === target) {
      return middle;
    }
    // break;
  }

  return -1;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2 
// 5 has an index 2

// console.log(searchInsert([1, 3, 5, 6], 2)); // 1 
// // 2 would have an index 1

// console.log(searchInsert([1, 3, 5, 6], 0)); // 0 
// // 0 would have an index 0

// console.log(searchInsert([1, 5, 5, 5, 7], 6)); // 4 
// // 6 would have an index 4

// console.log(searchInsert([1], 3)); 
// // 1 
// // // 1 would have an index 1
