/*
1. Write a function `findSingleNum` that accepts a non-empty array of integers `nums`.
2. Each element in the array appears twice except for one element which appears only once. Find and return that single one.
*/

function countFrequency(nums) {
  const frequency = {};

  for (const number of nums) {
    if (frequency[number]) {
      frequency[number] += 1;
    }

    if (!frequency[number]) {
      frequency[number] = 1;
    }
  }

  return frequency;
}

function findSingleNum(nums) {
  const frequency = countFrequency(nums);

  for (const entries of Object.entries(frequency)) {
    // console.log(entries)

    if (entries[1] === 1) {
      console.log(entries[0])
      return Number(entries[0]);
    }
  }
}

console.log(findSingleNum([1])); // 1
console.log(findSingleNum([3, 3, 2])); // 2
console.log(findSingleNum([4, 1, 2, 1, 2])); // 4

// Works as expected