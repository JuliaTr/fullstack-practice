/*
Write a function `isValid` that:

1. Takes a string of round brackets (), square brackets [], and/or braces {}.
2. Checks if all opening brackets have their closing counterpart, or no brackets at all:
  - If either of the above conditions is true, the function returns `true`.
  - If neither conditions is true, the function returns `false`.

Use a stack of opening brackets and check for matching counterparts.
*/

const OPEN_PAR: string = '(';
const CLOSE_PAR: string = ')';
const OPEN_BRACE: string = '{';
const CLOSE_BRACE: string = '}';
const OPEN_BRACKET: string = '[';
const CLOSE_BRACKET: string = ']';

function isCountCheck(str: string): boolean {
  let parens: number = 0;
  let sqBrackets: number = 0;
  let curlyBraces: number = 0;

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

  return [parens, sqBrackets, curlyBraces].every((element: number) => element === 0);
}

function generateSubstrings(str: string): string[] {
  const substrings: string[] = [];
  let idx1: number = 0;

  while (idx1 < str.length) {
    let idx2: number = idx1;

    while (idx2 < str.length) {
      substrings.push(str.slice(idx1, idx2 + 1));
      idx2++
    }

    idx1++;
  }

  return substrings;
}

function isFullGroup(currentStr: string, previousStr: string): boolean {
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

function isValid(str: string): boolean {
  if (str === '') {
    return true;
  }

  const divisible: boolean = str.length % 2 === 0;

  if (!divisible) {
    return false;
  }

  if (str[0].match(/[)}\]]/)) {
    return false;
  }

  const isCount: boolean = isCountCheck(str);

  if (!isCount) {
    return false;
  }

  const substrings: string[] = generateSubstrings(str);

  for (const substr of substrings) {
    let i: number = 1;

    while (i < substr.length) {
      const currentStr: string = substr[i];
      const previousStr: string = substr[i - 1];

      const isGroup: boolean = isFullGroup(currentStr, previousStr);

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
