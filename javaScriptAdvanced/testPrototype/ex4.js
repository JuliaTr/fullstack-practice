const base = { length: 1 };
const point = {};

Object.setPrototypeOf(point, base);
Object.setPrototypeOf(point, 'hello');

console.log(point.length);
// TypeError: Object prototype may only be an Object or null: hello
