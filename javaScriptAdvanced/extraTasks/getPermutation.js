/*
Create a function `getPermutation` that:

1. Takes an array `items`, which can contain numbers 
  and/or strings, and a non-negative integer `k`. 
  All items are arranged in a circle.
2. Starting from the first item, counts up to the `k`-th 
  position and removes that item. Then, counts `k` 
  positions from the next item and removes the `k`-th 
  item again. This process should continue until no 
  items remain.
3. Returns an array with the elements from `items` in 
  the exact order of removal.

  Counting starts from 1.

items = [1, 2, 3, 4, 5, 6, 7]
k = 3

[1, 2, 3, 4, 5, 6, 7] - initial sequence
[1, 2, 4, 5, 6, 7] => 3 is counted out and goes into the result [3]
[1, 2, 4, 5, 7] => 6 is counted out and goes into the result [3, 6]
[1, 4, 5, 7] => 2 is counted out and goes into the result [3, 6, 2]
[1, 4, 5] => 7 is counted out and goes into the result [3, 6, 2, 7]
[1, 4] => 5 is counted out and goes into the result [3, 6, 2, 7, 5]
[4] => 1 is counted out and goes into the result [3, 6, 2, 7, 5, 1]
[] => 4 is counted out and goes into the result [3, 6, 2, 7, 5, 1, 4]
*/

// Solution
function deleteSpace(leftItems) {
  leftItems.forEach((item, idx) => {
    if (item === '-') {
      leftItems.splice(idx, 1);
    }
  });

  return leftItems;
}

function getPermutation(items, k) {
  if (k <= 1 || items.lengh <= 1) {
    return items;
  }

  let leftItems = items;
  const deletedItems = [];
  let interval = k;
  
  while (leftItems.length > 0) {
    let step = (interval) ? interval - 1 : interval;
    let i = 0;

    while (i + step < leftItems.length) {
      i += step;

      const currentEl = leftItems[i];

      leftItems.splice(i, 1, '-');
      deletedItems.push(currentEl);

      step = (!interval) ? step + 1 : interval;
    }
    
    const itemsToRemove = leftItems.slice(i + 1);
    
    leftItems.length = i;
    leftItems = deleteSpace(leftItems);
    itemsToRemove.reverse().forEach((item) => leftItems.unshift(item));
    
    if (step > leftItems.length) {
      step = 0;
      interval = 0;
    }
  }

  return deletedItems;
}

console.log(getPermutation([1, 2, 3, 4, 5, 6, 7], 3));
// [3, 6, 2, 7, 5, 1, 4]
