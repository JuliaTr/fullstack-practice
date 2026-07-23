/*
Write a function `reduceDirections` that takes an array 
of strings `route`, removes unnecessary directions from 
it, and returns the modified array. This should be 
done by changing the input array, not by creating a 
new one.

`Route` consists of the following directions: `'north'`, 
`'south'`, `'east'` and `'west'`. Some pairs of 
directions are needless because they mean going one 
direction and coming back the opposite direction right 
away. Such pairs are:

`'north'` <-> `'south'`
`'east'` <-> `'west'`

Remove needless pairs of directions from the `route` array.

Note: you should remove needless pairs of directions 
if they are not directly opposite in the initial array 
but become directly possible after removing a pair 
between them.

*/

function deleteSpace(newRoute) {
  newRoute.forEach((word, idx) => {
    if (word === '-') {
      newRoute.splice(idx, 2);
    }
  });

  return newRoute;
}

function reduceDirections(route) {
  let newRoute = route;
  let size = newRoute.length;

  while (size >= 0) {
    console.log('-------------------')
    console.log(newRoute)
    console.log(size)

    let pairToDelete = false;
    let idx2 = 0;

    while (idx2 < size - 1) {
      const currentEl = newRoute[idx2];
      const nextEl = newRoute[idx2 + 1];
      
      if (pairToDelete) {
        // console.log('print2')
        newRoute.splice(idx2, 1, '-');
        pairToDelete = false;
      }

      if ((currentEl === 'north' && nextEl === 'south')
          || (currentEl === 'south' && nextEl === 'north')
          || (currentEl === 'east' && nextEl === 'west')
          || (currentEl === 'west' && nextEl === 'east')
      ) {
        // console.log('print1')
        newRoute.splice(idx2, 1, '-');
        pairToDelete = true;
      }
    

      // console.log(newRoute)

      idx2++;
    }
  
    newRoute = deleteSpace(newRoute);
    // console.log(newRoute)

    size = newRoute.length;
    // console.log(size)
  }

  return newRoute;
}

console.log(
  reduceDirections(
    ['north', 'east', 'west', 'north']
  )
); // ['north', 'north']
// 'east' and 'west' are removed because they mean going 
// one direction and coming back the opposite direction 
// right away

// console.log(
//   reduceDirections(
//     ['north', 'south', 'east', 'west']
//   )
// ); // []
// // 'north' and 'south', 'east' and 'west' are removed 
// // because they mean going one direction 
// // and coming back the opposite direction right away

// console.log(
//   reduceDirections(
//     ['north', 'east', 'west', 'south', 'west', 'west']
//   )
// ); // ['west', 'west']
// // 'east' and 'west' are removed because they mean going 
// // one direction and coming back the opposite direction 
// // right away; 
// // then 'north' and 'south' become directly opposite and 
// // thus are removed as well


// // `should return an empty array if the route consists of 
// // pairs of needless directions`
// console.log(
//   reduceDirections(
//     [
//       'north', 'south', 'east', 'west', 
//       'south', 'north', 'west', 'east'
//     ]
//   )
// ); // []

// // `should return an empty array if the route consists of 
// // needless directions after removing other pairs`
// console.log(
//   reduceDirections(
//     [
//       'east', 'north', 'east', 'west', 
//       'south', 'south', 'north', 'west'
//     ]
//   )
// ); // []



// Experiment:
function deleteSpace(newRoute) {
  newRoute.forEach((word, idx) => {
    if (word === '-') {
      newRoute.splice(idx, 2);
    }
  });

  return newRoute;
}

function reduceDirections(route) {
  let newRoute = route;
  let idx1 = 0;

  while (idx1 < newRoute.length) {
    let idx2 = 0;

    while (idx2 < newRoute.length - 1) {
      const currentEl = newRoute[idx2];
      const nextEl = newRoute[idx2 + 1];

      if ((currentEl === 'north' && nextEl === 'south')
          || (currentEl === 'south' && nextEl === 'north')
          || (currentEl === 'east' && nextEl === 'west')
          || (currentEl === 'west' && nextEl === 'east')
      ) {
        newRoute.splice(idx2, 1, '-');
      }

      if (newRoute[idx2 - 1] === '-' && newRoute[idx2 - 2] !== '-') {
        newRoute.splice(idx2, 1, '-');
      }

      idx2++;
    }

    newRoute = deleteSpace(newRoute);
    idx1++;
  }

  return newRoute;
}

console.log(
  reduceDirections(
    ['north', 'east', 'west', 'north']
  )
); // ['north', 'north']
// 'east' and 'west' are removed because they mean going 
// one direction and coming back the opposite direction 
// right away

console.log(
  reduceDirections(
    ['north', 'south', 'east', 'west']
  )
); // []
// 'north' and 'south', 'east' and 'west' are removed 
// because they mean going one direction 
// and coming back the opposite direction right away

console.log(
  reduceDirections(
    ['north', 'east', 'west', 'south', 'west', 'west']
  )
); // ['west', 'west']
// 'east' and 'west' are removed because they mean going 
// one direction and coming back the opposite direction 
// right away; 
// then 'north' and 'south' become directly opposite and 
// thus are removed as well