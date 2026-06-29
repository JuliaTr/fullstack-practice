/*
Create a function countJewelsInStones that takes two 
strings:
- jewels containing the types of stones that are jewels
- stones containing the stones you have.

Take into account the following:
- jewels and stones consist of only Latin letters.
- all the characters of jewels are unique.
- the function should be case sensitive, so 'a' and 'A' 
  are considered different.

The function should return the number of stones you have 
that are also jewels.
*/

function countJewelsInStones(jewels, stones) {
  let allOccurrences = 0;

  for (const jewel of jewels) {
    for (const stone of stones) {
      if (jewel === stone) {
        allOccurrences += 1;
      }
    }
  }

  return allOccurrences;
}

console.log(
  countJewelsInStones('aA', 'aAAbbbb')
); // 3

console.log(
  countJewelsInStones('dDfFgG', 'dfgDFGdfg')
); // 9

console.log(
  countJewelsInStones('bnm', 'BBNNmm')
); // 2

console.log(
  countJewelsInStones('poiuy', 'zxcvb')
); // 0
