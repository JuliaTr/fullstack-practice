/*
Create a function countNines that:

- Takes a positive integer `n`.
- Returns the number of times the `9` digit shows 
  while counting from `1` to `n`.

`9, 19, 91...` contribute one '9' each, 
`99, 199, 919...` contribute two '9's each, and so on.
*/

const NINE = 9;

function countOccurrences(sequenceStrings) {
  const occurrences = {};

  for (const str of sequenceStrings) {
    if (!occurrences[NINE]) {
      occurrences[NINE] = 0;
    }

    for (const char of str) {
      if (char.includes(String(NINE))) {
        occurrences[NINE] += 1;
      }
    }
  }

  return occurrences;
}

function generateSequence(n) {
  const sequence = [];

  for (let i = NINE; i <= n; i++) {
    sequence.push(i);
  }

  return sequence;
}

function countNines(n) {
  if (n < NINE) {
    return 0;
  }

  const sequence = generateSequence(n);
  const sequenceStrings = sequence.map((number) => {
    return number.toString();
  });

  const nines = countOccurrences(sequenceStrings);

  return Object.values(nines)[0];
}

console.log(countNines(7)); // 0
console.log(countNines(9)); // 1
console.log(countNines(19)); // 2 
console.log(countNines(98)); // 18
console.log(countNines(100)); // 20

// Works as expected
