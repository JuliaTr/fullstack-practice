/*
Create a function constructRectangle that:

Accepts a positive integer area and uses it to calculate 
the dimensions of a rectangle, per these requirements:
- width cannot exceed the length (length >= width).
- Both dimensions should be integers.
- Minimize the difference between length and width.
Returns an array [length, width] with said rectangle 
dimensions.
*/

function generateFactors(area) {
  const factors = [];

  for (let i = 1; i <= area; i++) {
    const isFactor = area % i === 0;

    if (isFactor) {
      factors.push(i);
    }
  }

  return factors;
}

/*
[ 32, 16, 8, 4, 2, 1 ]
  ^
  [ 32, 16, 8, 4, 2, 1 ]
    ^
*/

function generatePairs(factorsRev) {
  const pairs = [];

  for (let idx1 = 0; idx1 < factorsRev.length; idx1++) {
    for (let idx2 = idx1; idx2 < factorsRev.length; idx2++) {
      pairs.push([factorsRev[idx1], factorsRev[idx2]]);
    }
  }

  return pairs;
}

function constructRectangle(area) {
  // Generate factors and reverse them
  const factorsRev = generateFactors(area).reverse();

  // Find pairs
  const pairs = generatePairs(factorsRev);

  // Find pairs constitute area when multiplied
  const rectangles = pairs.filter((pair) => (pair[0] * pair[1]) === area);

  if (rectangles.length === 1) {
    return rectangles[0];
  }

  // Find pairs with least difference
  let difInPair = rectangles[0][0] - rectangles[1][0];
  let difPair = rectangles[0];

  rectangles.forEach((pair) => {
    const difference = pair[0] - pair[1];

    if (difference < difInPair) {
      difInPair = difference;
      difPair = pair;
    }
  });

  return difPair;
}

console.log(constructRectangle(4)); // [2, 2] 
console.log(constructRectangle(19)); // [19, 1]
console.log(constructRectangle(32)); // [8, 4]
