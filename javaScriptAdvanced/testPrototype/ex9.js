const child = { __proto__: null };

console.log(child.hasOwnProperty('__proto__'));
// TypeError: child.hasOwnProperty is not a function
