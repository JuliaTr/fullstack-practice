/*
Create the function `mergeObjects` that:

1. Takes two objects of generic types `T` and `R`.
2. Returns a new object with:
  - All `T` properties
  - `R` properties that aren't already found in `T`.
*/

function mergeObjects<T, R>(user: T, robot: R): Omit<R, keyof T> & T {
  return Object.assign({}, robot, user);
}

type Result = ReturnType<typeof mergeObjects>;

const user = {
  name: 'Harry',
  surname: 'Potter',
};

const robot = {
  name: 'Cleaner',
  version: 12,
  wheels: 3,
};

const result: Result = mergeObjects(user, robot);
/*
{
  name: 'Harry',
  surname: 'Potter',
  version: 12,
  wheels: 3,
}
*/
