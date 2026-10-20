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
// Option 2:
var PizzaSize3;
(function (PizzaSize3) {
    PizzaSize3["small"] = "small";
    PizzaSize3["medium"] = "medium";
    PizzaSize3["large"] = "large";
})(PizzaSize3 || (PizzaSize3 = {}));
let size3 = PizzaSize3.small;
console.log(size3); // small
