const point = { x: 1 };

Object.setPrototypeOf(point, null);

console.log(point.hasOwnProperty('x'));
// TypeError: point.hasOwnProperty is not a function
