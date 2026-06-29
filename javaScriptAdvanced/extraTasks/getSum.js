function generateSequence(a, b) {
  const sequence = [];
  let num = b;

  do {
    sequence.push(num);

    if (b > a) {
      num--;
    }

    if (b < a) {
      num++;
    }
  } while (num !== a);

  sequence.push(a);

  return sequence;
}

function getSum(a, b) {
  if (a === b) {
    return a;
  }

  const sequence = generateSequence(a, b);

  return sequence.reduce((total, number) => total + number, 0);
}

console.log(getSum(1, 3)); // 6 // 1 + 2 + 3 = 6
console.log(getSum(2, -3)); // -3 // -3 + -2 + -1 + 0 + 1 + 2 = -3
console.log(getSum(5, 5)); // 5 // Since both are same

console.log(getSum(2, 6)); // 20
console.log(getSum(15, 3)); // 117
