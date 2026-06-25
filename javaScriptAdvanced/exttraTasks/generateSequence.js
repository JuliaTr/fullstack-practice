function generateSequence(num, pattern) {
  const sequence = [];

  for (let i = 0; i < num; i++) {
    if (typeof pattern === 'function') {
      sequence.push(pattern(i));
    }

    if (typeof pattern !== 'function') {
      sequence.push(pattern);
    }
  }

  return sequence;
}

console.log(generateSequence(3, 4)); // [4, 4, 4]
console.log(generateSequence(5, {})); // [{}, {}, {}, {}, {}]
console.log(generateSequence(2, 's')); // ['s', 's']
console.log(generateSequence(5, i => i * 3)); // [0, 3, 6, 9, 12]
console.log(generateSequence(3, i => i + 10)); // [10, 11, 12]
