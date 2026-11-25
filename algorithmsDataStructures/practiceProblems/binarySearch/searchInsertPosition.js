/*
Write a function `searchInsert` that accepts a sorted array of integers `nums` and a integer `target`. If the array includes a value equal to `target`, return its index. If not, return the index where it would be if it were inserted in order.

Note: if the array contains several elements equal to `target`, return the index of the first one.
*/

// Refactored
function searchInsert(nums, target) {
  let left = 0;

  if (nums.length === left 
      || nums[left] > target
      || nums[left] === target
  ) {
    return left;
  }

  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }


  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2 
// 5 has an index 2

console.log(searchInsert([1, 3, 5, 6], 2)); // 1 
// 2 would have an index 1

console.log(searchInsert([1, 3, 5, 6], 0)); // 0 
// 0 would have an index 0

console.log(searchInsert([1, 5, 5, 5, 7], 6)); // 4 
// 6 would have an index 4

console.log(searchInsert([1], 3)); 
// 1 
// 1 would have an index 1


// `should return 0 if the target is less than the first element`
console.log(searchInsert([3, 4, 5, 7, 12], 2)); // 0

// `should work with the array where all elements are equal`
console.log(searchInsert([9, 9, 9, 9], 9)); // 0

// `should work with an empty array`
console.log(searchInsert([], 12));  // 0



// Solution
function searchInsert(nums, target) {
  let left = 0;

  if (nums.length === left
      || nums[left] > target
      || nums[left] === target
  ) {
    return left;
  }

  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    }

    if (left === right) {
      if (nums[middle] < target) {
        return middle + 1;
      } else if (nums[middle] > target) {
        return middle;
      }
    }

    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return left;
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2 
// 5 has an index 2

console.log(searchInsert([1, 3, 5, 6], 2)); // 1 
// 2 would have an index 1

console.log(searchInsert([1, 3, 5, 6], 0)); // 0 
// 0 would have an index 0

console.log(searchInsert([1, 5, 5, 5, 7], 6)); // 4 
// 6 would have an index 4

console.log(searchInsert([1], 3)); 
// 1 
// 1 would have an index 1


// `should return 0 if the target is less than the first element`
console.log(searchInsert([3, 4, 5, 7, 12], 2)); // 0

// `should work with the array where all elements are equal`
console.log(searchInsert([9, 9, 9, 9], 9)); // 0

// `should work with an empty array`
console.log(searchInsert([], 12));  // 0
