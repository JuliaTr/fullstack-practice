function generateOccurrences(word) {
  const occurrences = {};

  for (const char of word) {
    if (occurrences[char]) {
      occurrences[char] += 1;
    }

    if (!occurrences[char]) {
      occurrences[char] = 1;
    }
  }

  return occurrences;
}

function encodeDuplicates(word) {
  const downCased = word.toLowerCase();
  const occurrences = generateOccurrences(downCased);
  let str = '';

  for (const char of downCased) {
    if (occurrences[char] > 1) {
      str += 'y';
    } else {
      str += 'x';
    }
  }

  return str;
}

console.log(encodeDuplicates('get')); // 'xxx'
console.log(encodeDuplicates('google')); // 'yyyyxx'
console.log(encodeDuplicates('David')); // 'yxxxy'
console.log(encodeDuplicates('mama')); // 'yyyy'
// Works as expected
