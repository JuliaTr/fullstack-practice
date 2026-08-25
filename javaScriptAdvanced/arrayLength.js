let arr = [1, 2, 3];
console.log(arr.length); // 3

arr[3] = 6;
console.log(arr); // [ 1, 2, 3, 6 ]

let maxIndex = 2**32;
console.log(maxIndex); // 4294967296

arr[maxIndex - 2] = 8;

console.log(arr); 
// [ 1, 2, 3, 6, <4294967290 empty items>, 8 ]
console.log(arr.length); // 4294967295

let index = maxIndex - 1;
console.log(index);  // 4294967295

arr[index] = 9;
console.log(arr[index]); // 9

console.log(arr); // [ 1, 2, 3, 6, '4294967295': 9 ]
console.log(arr.length); // 4
