function toJadenCase(quote) {
  const quoteSplit = quote.split(' ');
  const capitalizedWords = [];

  for (const word of quoteSplit) {
    if (word.length > 0) {
      const capWord = word[0].toUpperCase() + word.slice(1);

      capitalizedWords.push(capWord);
    }
  }

  return capitalizedWords.join(' ');
}

console.log(toJadenCase('i watch twilight every night'));
// 'I Watch Twilight Every Night'

console.log(toJadenCase('Trees are never Sad')); 
// 'Trees Are Never Sad'

console.log(toJadenCase('  no   more words')); 
// 'No More Words'

// works as expected
