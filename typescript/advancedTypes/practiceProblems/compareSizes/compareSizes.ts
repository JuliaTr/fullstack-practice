/*
Create a function `canIWear` that:

1. Takes two strings:
  - `mySize` — our clothing size.
  - `itemSize` — the size of the item we want to wear.
2. Returns `true`, if `itemSize` is equal or larger than `mySize`, otherwise `false`.

There are five available sizes, `xs`, `s`, `m`, `l` and `xl`.
*/

enum ClothingSize {
  xs, s, m, l, xl,
}

function canIWear(
  mySize: keyof typeof ClothingSize, 
  itemSize: keyof typeof ClothingSize
): boolean {
  return ClothingSize[mySize] <= ClothingSize[itemSize];
}

console.log(canIWear('l', 'l')); // true
console.log(canIWear('m', 'xl')); // true
console.log(canIWear('s', 'xs')); // false
