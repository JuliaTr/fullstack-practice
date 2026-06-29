function buildNewArray(words, str) {
  const result = [];
  let idxStart = 0;
  let idxEnd = words[0].length;

  for (let i = 0; i !== words.length; i++) {                          
    idxEnd = idxStart + words[i].length;

    const word = str.slice(idxStart, idxEnd);

    result.push(word);
                   
    idxStart = idxStart + words[i].length;
  }

  return result;
}

function arrayReverse(words) {
  if (words.length === 0) {
    return [];
  }

  const copyWords = [...words];
  const revArray = copyWords.reverse();

  const revWords = revArray.map((word) => {
    return word.split('').reverse().join('');
  });

  const str = revWords.join('');

  return buildNewArray(words, str);
}

console.log(arrayReverse(['Hell0'])); // ['0lleH']
console.log(arrayReverse(['Mate', 'Academy'])); 
// ['ymed', 'acAetaM']

console.log(arrayReverse(['I', 'am', 'a', 'student!'])); 
// ['!', 'tn', 'e', 'dutsamaI']

// Works as expected
