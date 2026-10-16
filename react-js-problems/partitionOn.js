/*
Create a function `partitionArray` that:

1. Accepts a function `pred` and a non-empty array of `items`.

2. Partitions the array of `items` based on a given predicate such that the array is of the form `[F, F, F, T, T, T]` where:
- `F` represents items for which the predicate function returned `false`.
- `T` represents items for which the predicate function returned `true`.

3. Returns the boundary index (the index of the first `T` value in `items`).

The partitioning should be done `in-place`, so you have to modify the `items` array rather than creating a new one.
*/

/**
 * @param {function} pred
 * @param {any[]} items
 *
 * @returns {number}
 */

function partitionItems(pred, items) {
  let idx = 0;
  let endIdx = items.length;

  while (idx < endIdx) {
    const item = items[idx];

    if (pred(item)) {
      const temp = item;

      items.splice(idx, 1);
      items.push(temp);
    }

    idx++;
  }

  return items
}

function partitionArray(pred, items) {
  const partitions = partitionItems(pred, items);
  console.log(partitions)

  for (let i = 0; i < partitions.length; i++) {
    if (pred(partitions[i])) {
      return i;
    }
  }

  return partitions.length;
}

// const items = [1, 2, 3, 4, 5, 6];
// function isEven(n) {return n % 2 === 0};

// console.log(partitionArray(isEven, items)); // 3 
// // items should now be [1, 3, 5, 2, 4, 6]


// // `should partition the array in-place`
// const items = ['I', 'study', 'in', 'Mate', 'academy'];

// console.log(partitionArray(el => el.length > 4, items));
// // ['I', 'in', 'Mate', 'study', 'academy'])



// // `should return the index of the first truthy value if it is in the middle`
// const items = [0, true, 1, null, undefined, NaN, 'qwe', '', false];

// console.log(partitionArray(el => el, items)); // 6



// // `should return 0 if 'items' contains only truthy values`
// const items = [5, 2, 6, 1, 8, 4, 3, 7];

// console.log(partitionArray((el => el >= 0), items)); 
// // 0



// // `should return items.length if 'items' contains only falsy values`
// const items = ['ab', 'cd', 'ef', 'gh', 'ij'];

// console.log(partitionArray((el => el.length > 2), items)); // 5
