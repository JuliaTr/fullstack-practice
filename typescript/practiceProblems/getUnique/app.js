"use strict";
/*
Write a function `unionStrings` that:

1. Takes two strings `sentence1` and `sentence2`, which contain only Latin lowercase letters (i.e. a set from `a` to `z`).
2. Returns a sorted string containing letters from both strings.

Each letter in the resulting string must appear only once.
*/
function getUniqueChars(sentence1, sentence2) {
    const union = `${sentence1}${sentence2}`;
    let unionedUniqueChars = '';
    for (const char of union) {
        if (!unionedUniqueChars.includes(char)) {
            unionedUniqueChars += char;
        }
    }
    return unionedUniqueChars;
}
function unionStrings(sentence1, sentence2) {
    // Get unique chars
    const uniqueChars = getUniqueChars(sentence1, sentence2);
    // Sort unique chars
    return uniqueChars.split('').sort().join('');
}
const s1 = 'aabbbccccdefgg';
const s2 = 'xxxyyabklmopg';
console.log(unionStrings(s1, s2));
// 'abcdefgklmopxy'
const s3 = 'loopingisfunbutdangerous';
const s4 = 'lessdangerousthancoding';
console.log(unionStrings(s3, s4));
// 'abcdefghilnoprstu'
// Works as expected
