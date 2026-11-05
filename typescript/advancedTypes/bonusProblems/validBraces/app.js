"use strict";
/*
Write a function `isValid` that:

1. Takes a string of round brackets (), square brackets [], and/or braces {}.
2. Checks if all opening brackets have their closing counterpart, or no brackets at all:
  - If either of the above conditions is true, the function returns `true`.
  - If neither conditions is true, the function returns `false`.

Use a stack of opening brackets and check for matching counterparts.
*/
const OPEN_PAR = '(';
const CLOSE_PAR = ')';
const OPEN_BRACE = '{';
const CLOSE_BRACE = '}';
const OPEN_BRACKET = '[';
const CLOSE_BRACKET = ']';
function isCountCheck(str) {
    let parens = 0;
    let sqBrackets = 0;
    let curlyBraces = 0;
    for (const char of str) {
        if (char === OPEN_PAR) {
            parens++;
        }
        if (char === CLOSE_PAR) {
            parens--;
        }
        if (char === OPEN_BRACKET) {
            sqBrackets++;
        }
        if (char === CLOSE_BRACKET) {
            sqBrackets--;
        }
        if (char === OPEN_BRACE) {
            curlyBraces++;
        }
        if (char === CLOSE_BRACE) {
            curlyBraces--;
        }
    }
    return [parens, sqBrackets, curlyBraces].every((element) => element === 0);
}
function generateSubstrings(str) {
    const substrings = [];
    let idx1 = 0;
    while (idx1 < str.length) {
        let idx2 = idx1;
        while (idx2 < str.length) {
            substrings.push(str.slice(idx1, idx2 + 1));
            idx2++;
        }
        idx1++;
    }
    return substrings;
}
function isFullGroup(currentStr, previousStr) {
    if (currentStr === CLOSE_PAR && previousStr.match(/[[{]/)) {
        return false;
    }
    if (currentStr === CLOSE_BRACE && previousStr.match(/[[(]/)) {
        return false;
    }
    if (currentStr === CLOSE_BRACKET && previousStr.match(/[({]/)) {
        return false;
    }
    return true;
}
function isValid(str) {
    if (str === '') {
        return true;
    }
    const divisible = str.length % 2 === 0;
    if (!divisible) {
        return false;
    }
    if (str[0].match(/[)}\]]/)) {
        return false;
    }
    const isCount = isCountCheck(str);
    if (!isCount) {
        return false;
    }
    const substrings = generateSubstrings(str);
    for (const substr of substrings) {
        let i = 1;
        while (i < substr.length) {
            const currentStr = substr[i];
            const previousStr = substr[i - 1];
            const isGroup = isFullGroup(currentStr, previousStr);
            if (!isGroup) {
                return false;
            }
            i++;
        }
    }
    return true;
}
console.log(isValid('(){}[]')); // true
console.log(isValid('((()))')); // true
console.log(isValid('(()))')); // false
console.log(isValid('[(])')); // false
console.log(isValid('{]')); // false
console.log(isValid('[([{}]){}]')); // true
