function countOccurrences(phrase, part) {
  const phraseArray = Array.from(phrase);
  let count = 0;
  let idx2 = part.length;

  for (let idx1 = 0; idx1 < phrase.length; idx1++) {
    const strPart = phraseArray.slice(idx1, idx2).join('');

    if (strPart === part) {
      count++;
    }

    idx2++;
  }

  return count;
}

console.log(countOccurrences('azyxxzyzy', 'zy')); // 3
console.log(countOccurrences('ababagalamaga', 'bag')); // 1
