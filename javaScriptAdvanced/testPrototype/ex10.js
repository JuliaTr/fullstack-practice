const child = { name: 'Yuliia' };
child.__proto__ = null;
// The connection with basic methods including `hasOwnProperty`.
// `__proto__` lives in `Object.prototype`. 
// When `child.__proto__` is `null`, object has lost 
// access to `Object.prototype`.

child.__proto__ = Object.prototype
// It doesn't change internal prototype. It creates 
// simple text property with the same name inside object
// Real prototype remains `null`.

console.log(child.hasOwnProperty('name'));
// TypeError: child.hasOwnProperty is not a function