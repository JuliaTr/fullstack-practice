/*
Create a function `removeElement` that:

- Takes an array of integers `nums`, and an integer `val`
- Modifies the input array by removing all elements 
  equal to `val`.

Returns the new length of `nums`.
*/

function removeElement(nums, val) {
  const copyNums = [...nums];
  const numbers = nums;

  for (let i = 0; i < copyNums.length; i++) {
    if (copyNums[i] === val) {
      const idx = numbers.indexOf(copyNums[i]);
      numbers.splice(idx, 1);
    }
  }

  return numbers.length;
}

console.log(removeElement([3, 2, 2, 3], 3)); // 2 
// nums = [2, 2]

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); 
// 5 // nums = [0, 1, 3, 0, 4]

console.log(removeElement([5, 5, 5], 5)); // 0 
// nums = []

// Works as expected
