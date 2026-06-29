function multiplyString(letters) {
  const result = [];

  for (let i = 0; i < letters.length; i++) {
    const str = letters[i].repeat(i + 1);
    result.push(str);
  }

  return result;
}

function mumble(letters) {
  const multipliedStr = multiplyString(letters);

  const capitalizedStrings = multipliedStr.map((subStr) => {
    return subStr[0].toUpperCase() + subStr.slice(1).toLowerCase();
  });

  return capitalizedStrings.join('-');
}

console.log(mumble('abcd')); // 'A-Bb-Ccc-Dddd'
console.log(mumble('RqaEzty')); // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'
// Works as expected
