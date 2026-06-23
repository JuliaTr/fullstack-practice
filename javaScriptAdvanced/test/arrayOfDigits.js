function toArrayOfDigits(n) {
  return Array.from(n.toString())
    .reverse()
    .map((str) => +str);
}

console.log(toArrayOfDigits(46156)) // [6, 5, 1, 6, 4]