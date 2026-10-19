"use strict";
/*
`y?: number` - optional parameter
`y = 0` - optional parameter, too (type is defined by the value type)

Don't combine these two options. Use either or.
*/
// Function declaration:
function add(x, y = 0) {
    return x + y;
}
const result = add(2);
console.log(result);
const subtract = (x, y) => {
    return x - y;
};
const multiply = (x, y) => {
    return x + y;
};
