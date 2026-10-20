"use strict";
/*
Create a function `canIWear` that:

1. Takes two strings:
  - `mySize` — our clothing size.
  - `itemSize` — the size of the item we want to wear.
2. Returns `true`, if `itemSize` is equal or larger than `mySize`, otherwise `false`.

There are five available sizes, `xs`, `s`, `m`, `l` and `xl`.
*/
var ClothingSize;
(function (ClothingSize) {
    ClothingSize[ClothingSize["xs"] = 0] = "xs";
    ClothingSize[ClothingSize["s"] = 1] = "s";
    ClothingSize[ClothingSize["m"] = 2] = "m";
    ClothingSize[ClothingSize["l"] = 3] = "l";
    ClothingSize[ClothingSize["xl"] = 4] = "xl";
})(ClothingSize || (ClothingSize = {}));
function canIWear(mySize, itemSize) {
    return ClothingSize[mySize] <= ClothingSize[itemSize];
}
console.log(canIWear('l', 'l')); // true
console.log(canIWear('m', 'xl')); // true
console.log(canIWear('s', 'xs')); // false
