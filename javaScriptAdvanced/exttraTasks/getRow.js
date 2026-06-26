function generatePairs(numbers) {
  const pairs = [];
  let startIdx = 0;

  for (let endIdx = 1; endIdx < numbers.length; endIdx++) {
    pairs.push([numbers[startIdx], numbers[endIdx]]);

    startIdx++;
  }

  return pairs;
}

function getRow(rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }

  let startingArr = [];
  let deleteCount = 0;

  for (let i = 0; i <= rowIndex; i++) {
    if (i < 2) {
      startingArr.push(1);
    }

    if (i >= 2) {
      const copyStartingArr = [...startingArr];
      const pairs = generatePairs(copyStartingArr);
      const sum = pairs.map((pair) => pair[0] + pair[1]);

      copyStartingArr.splice(1, deleteCount, sum);

      startingArr = copyStartingArr.flat();
      deleteCount++;
    }
  }

  return startingArr;
}

console.log(getRow(0)); // [1]

console.log(getRow(1)); // [1, 1]
console.log(getRow(2)); // [1, 2, 1]

console.log(getRow(3)); // [1, 3, 3, 1]
console.log(getRow(5)); // [1, 5, 10, 10, 5, 1];

// Works as expected
