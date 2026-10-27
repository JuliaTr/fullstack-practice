/*
Create a function `removeDuplicates` that:

1. Takes a sorted array of integers `nums`.
2. Modifies the input array by removing all duplicates.
3. Returns the new length of `nums`.
*/

// Solution:
function substituteDuplicates(
  temp: (number | string)[]
): (number | string)[] {
  for (let i: number = 0; i < temp.length; i++) {
    const slicedStr: (number | string)[] = temp.slice(0, i);
    if (slicedStr.includes(temp[i])) {
      temp.splice(i, 1, '-');
    }
  }

  return temp;
}

function removeDuplicates(nums: number[]): number[] {
  const temp: (number | string)[] = nums;

  // Substitute duplicates
  substituteDuplicates(temp);

  // Clean string
  let i: number = 0;

  while (i < nums.length) {
    if (temp[i] === '-') {
      temp.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums;
}

console.log(removeDuplicates([1, 2, 3, 3])); // 3 
// nums = [1, 2, 3]

console.log(removeDuplicates([0, 0, 0, 1, 6, 7, 7])); 
// 4 // nums = [0, 1, 6, 7]

console.log(removeDuplicates([-9, -8, -7])); // 3 
// nums = [-9, -8, -7]

console.log(removeDuplicates([4, 4, 4])); // 1 
// nums = [4]




// // Experiments:
// function substituteDuplicates(
//   temp: (number | string)[]
// ): (number | string)[] {
//   for (let i: number = 0; i < temp.length; i++) {
//     const slicedStr: (number | string)[] = temp.slice(0, i);
//     if (slicedStr.includes(temp[i])) {
//       temp.splice(i, 1, '-');
//     }
//   }

//   return temp;
// }