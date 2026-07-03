/*
Write a function `findMaximumProduct` that:

- Accepts an array `nums` with integers, and a number `size`.
  - `size` can be equal or greater than `0`.
- Finds the product of the maximal numbers.
  - The length of an array is at least 3 elements and numbers 
    could be a mixture of positives, negatives and zeroes.
  - If `size = 0`, return `1`.
- If the number `size` is greater than or equal to the length 
  of the array, return the product of all numbers in the array.

Notes:

[10, 8, 3, 2, 1, 4, 10]      5
 ^
  [10, 8, 3, 2, 1, 4, 10]
          ^

[10, 8]  80
[]
*/

function findMaximumProduct(nums, size) {
  if (size === 0) {
    return 1;
  }

  const sorted = nums.sort((a, b) => b - a);
  const sliced = sorted.slice(0, size);
  const product = sliced.reduce((prod, num) => prod * num, 1);
  
  return product;
}

console.log(findMaximumProduct([10, 3, -1, -27] , 3)); 
// -30
// Since the size = 3, then the subsequence of size 3
// whose gives product of maxima is 10 * 3 * -1 = -30;

console.log(findMaximumProduct([10, 8, 3, 2, 1, 4, 10], 5));
// 9600
// Since the size = 5, then the subsequence of size 5
// whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600;


// should return '1' if size is zero
console.log(findMaximumProduct([3, 6, 1], 0)); // 1

// should return the product of all numbers if size is equal 
// to the array's length
console.log(findMaximumProduct([4, -1, 9, 14, 18, -8, -2], 7));
// -145152

// should return the product of all numbers if size is 
// greater than array's length
console.log(findMaximumProduct([6, 2, 1, 1, 1, -1, -2, 10, 12], 100));
// 2880

// Works as expected



// Experient 2:
function calculateMaxProductPairs(nums, firstNum, 
  productCompare, sequence) {
  let secondNum = nums[0];
  let compare = productCompare;
  let i = 0;

  while (i < nmums.length) {
    let currentNum = nums[i];
    let calculatedProduct = firstNum * currentNum;

    if (calculatedProduct > compare) {
      secondNum = currentNum;
      compare = calculatedProduct;
    }

    i++;
  }
  
  sequence.push(secondNum);

  let idx = nums.indexOf(secondNum);
  nums.splice(idx, 1)

  return compare;
}

function findMaximumProduct(nums, size) {
  if (size === 0) {
    return 1;
  }

  if (nums.length <= size) {
    return nums.reduce((product, num) => product * num, 1);
  }

  let updatedNums = nums.slice(1);
  let firstNumber = nums[0];
  let secondNumber = updatedNums[0];
  let calculatedProductCompare = firstNumber * secondNumber;
  const sequence = [firstNumber];
  let i = 0;

  while (sequence.length < size) {
    calculatedProductCompare = calculateMaxProductPairs(updatedNums, 
      firstNumber, calculatedProductCompare, sequence)
    firstNumber = calculatedProductCompare;

    i++;
  }

  console.log(sequence)

  return calculatedProductCompare;
}

console.log(findMaximumProduct([10, 8, 3, 2, 1, 4, 10], 5));
// 9600
// Since the size = 5, then the subsequence of size 5
// whose gives product of maxima is 10 * 10 * 8 * 4 * 3 = 9600;


// should return '1' if size is zero
console.log(findMaximumProduct([3, 6, 1], 0)); // 1

// should return the product of all numbers if size is equal 
// to the array's length
console.log(findMaximumProduct([4, -1, 9, 14, 18, -8, -2], 7));
// -145152

// should return the product of all numbers if size is 
// greater than array's length
console.log(findMaximumProduct([6, 2, 1, 1, 1, -1, -2, 10, 12], 100));
// 2880






// Experiment 1:
// Find pair with max product
function findMaximumProduct(nums) {
  let firstNumber = nums[0];
  let secondNumber = nums[1];
  let calculatedProductCompare = firstNumber * secondNumber;

  const pair = [firstNumber];
  let i = 1;

  while (i < nums.length) {
    let calculatedProduct = firstNumber * nums[i];

    if (calculatedProduct > calculatedProductCompare) {
      secondNumber = nums[i];
    }

    i++;
  }

  pair.push(secondNumber);

  return pair;
}

console.log(findMaximumProduct([10, 8, 3, 2, 1, 4, 10]));
// [10, 10]
