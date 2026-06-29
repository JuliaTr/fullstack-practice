/*
For this task, you don't need to change the pattern and 
add `^` or `$`. The `.` symbol in the pattern already means 
"any letter", so you don't need to manually replace it 
with `[a-z]`.
*/

class WordDictionary {
  constructor() {
    this.words = [];
  }

  addWord(word) {
    if (word === '' || word === undefined) {
      return;
    }

    this.words.push(word);
  }

  search(pattern) {
    for (const word of this.words) {
      if (word.match(pattern)) {
        return true;
      }
    }

    return false;
  }
}

dictionary = new WordDictionary;

dictionary.addWord('bad');
dictionary.addWord('dad');;
dictionary.addWord('mad')

console.log(dictionary.words); // [ 'bad', 'dad', 'mad' ]

this.words = ['bad', 'dad', 'mad'];

console.log(dictionary.search('pad')); // false
console.log(dictionary.search('bad')); // true
console.log(dictionary.search('..d')); // true
console.log(dictionary.search('m...')); // false

// Works as expected
