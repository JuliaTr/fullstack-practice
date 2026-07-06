/*
Write a function `findDuplicates` that accepts an array of 
integers nums consisting of positives, negatives and 
zeros.

Find the duplicates in array, and return a new array of 
those duplicates. The elements of the returned array 
should appear in the order when they first appeared as 
duplicates.
*/

// function findAllOccurrences(numbers) {
//   const duplicatedKeys = [];
//   const occurrences = {};

//   for (const number of numbers) {
//     if (occurrences[number]) {
//       occurrences[number] += 1;
//       duplicatedKeys.push(number)
//     }

//     if (!occurrences[number]) {
//       occurrences[number] = 1;
//     }
//   }

//   return duplicatedKeys;
// // }

function findDuplicates(numbers) {
  const duplicatedKeys = [];
  const occurrences = {};

  for (const number of numbers) {
    if (occurrences[number] && !duplicatedKeys.includes(number)) {
      occurrences[number] += 1;
      duplicatedKeys.push(number);
    }

    if (!occurrences[number]) {
      occurrences[number] = 1;
    }
  }

  return duplicatedKeys;
}

console.log(findDuplicates([0, 1, 2, 3])); // []
console.log(findDuplicates([-1, 0, 3, 5, 0, 3, 3, -1])); 
// [0, 3, -1]

console.log(findDuplicates([-2, -1, -5, -5, -5, -1]));
// [-5, -1];

// Works as expected



// Experiment:
function findAllOccurrences(numbers) {
  const occurrences = {};

  for (const number of numbers) {
    if (occurrences[number]) {
      occurrences[number] += 1;
    }

    if (!occurrences[number]) {
      occurrences[number] = 1;
    }
  }

  return occurrences;
}

function findDuplicates(numbers) {
  const occurrences = findAllOccurrences(numbers);
  const duplicatedValues = [];

  for (const entries of Object.entries(occurrences)) {
    if (entries[1] > 1) {
      duplicatedValues.push(Number(entries[0]));
    }
  }

  return duplicatedValues;
}

console.log(findDuplicates([0, 1, 2, 3])); // []
console.log(findDuplicates([-1, 0, 3, 5, 0, 3, 3, -1])); 
// [0, 3, -1]
