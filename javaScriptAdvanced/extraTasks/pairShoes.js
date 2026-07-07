/*
There are several shoes stored in the room. Each shoe 
is described by two values `type` and `size`:

- `type` indicates if it's a left or a right shoe;
- `size` is the size of the shoe.

Write a function `pairShoes` that accepts an array of 
shoes. Each shoe is given in the format `[type, size]`,
where type is either `0` or `1` for left and right 
respectively, and size is a positive integer.

Return `true` if it is possible to pair the shoes, `false` 
otherwise.



My notes:

[[0, 21], [1, 23], [1, 21], [0, 23]]
            ^
     x           x        x      x
  [[0, 21], [1, 23], [1, 21], [0, 23]]
                                ^
*/


function pairShoes(shoes) {
  const allPairs = [];
  const usedIdx = [];

  for (let idx1 = 0; idx1 < shoes.length; idx1++) {
    const type = shoes[idx1][0];
    const size = shoes[idx1][1];

    for (let idx2 = 0; idx2 < shoes.length; idx2++) {
      if (usedIdx.includes(idx1) || usedIdx.includes(idx2)) {
        continue;
      }

      if (shoes[idx2][1] === size && shoes[idx2][0] !== type) {
        allPairs.push([shoes[idx1], shoes[idx2]]);
        usedIdx.push(idx1, idx2);
      }
    }
  }

  return allPairs.flat().length === shoes.length;
}

let shoes1 = [[0, 21],
         [1, 23],
         [1, 21],
         [0, 23]];

console.log(pairShoes(shoes1)); // true

shoes2 = [[0, 20],
         [1, 21],
         [1, 20],
         [1, 21]];

console.log(pairShoes(shoes2)); // false

// Works as expected
