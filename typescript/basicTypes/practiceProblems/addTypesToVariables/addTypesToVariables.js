"use strict";
function calculate() {
    const value = 10;
    const message = 'Hello!';
    const isPositive = true;
    const sign = isPositive ? 1 : -1;
    return value + sign * message.length;
}
console.log(calculate());
