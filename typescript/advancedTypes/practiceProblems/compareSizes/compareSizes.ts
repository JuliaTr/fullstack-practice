/*
Create a function `canIWear` that:

1. Takes two strings:
  - `mySize` — our clothing size.
  - `itemSize` — the size of the item we want to wear.
2. Returns `true`, if `itemSize` is equal or larger than `mySize`, otherwise `false`.

There are five available sizes, `xs`, `s`, `m`, `l` and `xl`.
*/

// enum's value type
enum ClothingSize {
  xs, s, m, l, xl,
}

// `keyof typeof` - enum's keys
// `keyof` - gets the keys of a type
// `typeof` - obtains a type from a value
// `typeof ClothingSize` - refers to enum object

// Extract its member names as a union of string literal types
type SizeStrings = keyof typeof ClothingSize;

function canIWear(
  mySize: SizeStrings, 
  itemSize: SizeStrings
): boolean {
  return ClothingSize[mySize] <= ClothingSize[itemSize];
}

console.log(canIWear('l', 'l')); // true
console.log(canIWear('m', 'xl')); // true
console.log(canIWear('s', 'xs')); // false
