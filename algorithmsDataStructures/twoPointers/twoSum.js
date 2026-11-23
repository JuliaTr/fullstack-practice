/*
Find indexes of two elements, which sum is qual to `target`.
*/

function twoSum(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === target) {
      return [left, right];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return -1;
}

let array = [1, 2, 3, 4, 10, 20, 44];
console.log(twoSum(array, 24));
