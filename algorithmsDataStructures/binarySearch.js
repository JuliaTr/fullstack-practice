function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (array[middle] === target) {
      return middle;
    }

    if (array[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}

const array = [-10, -7, -4, 0, 2, 8, 11, 123];

let target = -4;
console.log(binarySearch(array, target)); 
// 2 (index)


target = 11;
console.log(binarySearch(array, target)); 
// 6 (index)


target = 1;
console.log(binarySearch(array, target));
// -1
