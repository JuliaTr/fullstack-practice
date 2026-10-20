"use strict";
// type PizzaSize = string;
let size = 'small';
console.log(size);
size = 'medium';
console.log(size);
// size = 'large123'; // error 
// (limit which values to use)
// console.log(size)
// Enum type:
// Option 1:
var PizzaSize2;
(function (PizzaSize2) {
    PizzaSize2[PizzaSize2["small"] = 0] = "small";
    PizzaSize2[PizzaSize2["medium"] = 1] = "medium";
    PizzaSize2[PizzaSize2["large"] = 2] = "large";
})(PizzaSize2 || (PizzaSize2 = {}));
let size2 = PizzaSize2.small;
console.log(size2); // 0
