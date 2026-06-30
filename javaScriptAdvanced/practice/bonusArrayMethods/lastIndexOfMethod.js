// With `this`:
numbers.lastIndexOf = function(searchNumber, fromIdx) {
  let idx = fromIdx;

  if (idx === undefined) {
    idx = this.length - 1;
  }

  if (idx < 0) {
    idx = this.length - Math.abs(idx);
  }

  for (let i = idx; i >= 0; i--) {
    if (this[i] === searchNumber) {
      return i;
    }
  }

  return -1;
};


// Without `this`:
function lastIndexOf(numbers, searchNumber, fromIdx) {
  let idx = fromIdx;

  if (idx === undefined) {
    idx = numbers.length - 1;
  }

  if (idx < 0) {
    idx = numbers.length - Math.abs(idx);
  }

  for (let i = idx; i >= 0; i--) {
    if (numbers[i] === searchNumber) {
      return i;
    }
  }

  return -1;
}

const numbers = [5, 6, 1, 4, 2, 5];

console.log(lastIndexOf(numbers, 5)); // 5
console.log(lastIndexOf(numbers, 7)); // -1
console.log(lastIndexOf(numbers, 1, 3)); // 2
console.log(lastIndexOf(numbers, 5, -2)); // 0
console.log(lastIndexOf(numbers, 5, -7)); // -1
// Works as expected
