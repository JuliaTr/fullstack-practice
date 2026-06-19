const child = { name: 'Yuliia' };
child.__proto__ = null;

child.__proto__ = Object.prototype

console.log(child.hasOwnProperty('name'));
// TypeError: child.hasOwnProperty is not a function