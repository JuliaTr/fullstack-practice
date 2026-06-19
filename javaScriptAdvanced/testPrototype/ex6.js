const base = { length: 1 };
const point = {};

Object.setPrototypeOf(point, base);
console.log(point.length); // 1

Object.setPrototypeOf(point, null);

console.log(point.length); // undefined
