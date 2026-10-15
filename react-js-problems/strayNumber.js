/*
Create a function `findStray` that:

1. Takes an array of numbers `nums`, where only one number is unique.
2. Returns that single unique number.

Input array is always valid and contains `3` numbers at minimum.
*/

function findStray(nums) {
  const numberToCompare = nums[0];
  const restNums = nums.slice(1);
  const allSame = restNums.every(currentValue => currentValue === nums[1]);

  if (allSame) {
    return numberToCompare;
  }

  for (let i = 1; i < nums.length; i++) {
    const number = nums[i];

    if (number !== numberToCompare) {
      return number;
    }
  }
}

console.log(findStray([1, 1, 2])); // 2
console.log(findStray([17, 17, 3, 17, 17, 17, 17])); // 3
console.log(findStray([-1, -1, 1, -1])); // 1

// `should work if the stray number is at the beginning of the array`
console.log(findStray([6, 8, 8, 8])); // 6

// Works as expected
