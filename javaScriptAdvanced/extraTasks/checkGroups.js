/*
Create a function `checkGroups` that:

- Takes a string `str` that may contain any of these symbols: 
  `()`, `{}` or `[]`.
- Checks whether the brackets are opened and closed correctly.
- Returns true if str is empty or contains only correct
  brackets, otherwise `false`.

To give an example, these brackets are placed **correctly**:

({})
[[]()]
[{()}]

These are placed **incorrectly**:

{(}) // wrong order of closing different bracket types
([] // parentheses are not closed
[]) // there is a closing parenthesis without an opening one
}{ // a closing curly bracket is before an opening one


'{[(}' - false
'{{[()' - true
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

  for (let idx1 = 0; idx1 < str.length; idx1++) {
    for (let idx2 = idx1; idx2 < str.length; idx2++) {
      substrings.push(str.slice(idx1, idx2 + 1));
    }
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

function checkGroups(str) {
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
    for (let i = 1; i < substr.length; i++) {
      const currentStr = substr[i];
      const previousStr = substr[i - 1];

      const isGroup = isFullGroup(currentStr, previousStr);

      if (!isGroup) {
        return false;
      }
    }
  }

  return true;
}

console.log(checkGroups('{[]}')); // true
console.log(checkGroups('[(](')); // false
console.log(checkGroups('{}()[')); // false
console.log(checkGroups('()')); // true

console.log(checkGroups(')(')); // false
console.log(checkGroups(')([]{{}}][')); // false

console.log(checkGroups('[[][][')); // false

console.log(checkGroups('{[(}])')); // false
console.log(checkGroups('{{[()]}}([()])')); // true

// Works as expected




// Experiments:
const OPEN_PAR = '(';
const CLOSE_PAR = ')';
const OPEN_BRACE = '{';
const CLOSE_BRACE = '}';
const OPEN_BRACKET = '[';
const CLOSE_BRACKET = ']';

function checkGroups(str) {
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

    const closedFirst = [parens, sqBrackets, curlyBraces].some((element) => {
      return element === -1;
    });

    if (closedFirst) {
      return false;
    }
  }

  return [parens, sqBrackets, curlyBraces].every((element) => element === 0);
}

console.log(checkGroups('{[]}')); // true
console.log(checkGroups('[(](')); // false
console.log(checkGroups('{}()[')); // false
console.log(checkGroups(')(')); // false
