/*
Given an array of numbers `ropes`, where the element `ropes[i]` represents the length of the rope with an index `i`, and integers `len` and `k`.

Implement a function `canCutKPieces` that determines whether it is possible to obtain `k` pieces of rope of length `len` from the ropes in `ropes`. Pieces from different ropes cannot be combined. The function should return a boolean value `true` or `false`.
*/

function canCutKPieces(ropes, len, k) {
  if (ropes.length === 0) {
    return false;
  }

  for (const rope of ropes) {
    let left = 0;
    let right = rope - 1;

    while (left <= right) {
      const middle = Math.floor((left + right) / 2);

      console.log(middle)
      
      if (middle < len) {
        return false;
      }

      if (middle > k) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return true;
}

console.log(canCutKPieces([10, 5], 3, 5)); // false 
// only 3 pieces of length 3 can be obtained from the first rope and 1 piece from the second rope

console.log(canCutKPieces([11, 10, 9], 4, 5)); // true 
// it is possible to get 2 pieces of length 4 from each rope
