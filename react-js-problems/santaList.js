/*
Create a function `createList` that:

1. Takes two string arrays, `santasList` and `childrenList`
2. Returns an array with names of all children from the `childrenList` who also appear in the `santasList`, where:
- Comparison should be case-sensitive.
- Resulting array should contain only one instance of each name.
- Names should be sorted alphabetically.
*/

function createList(santasList, childrenList) {
  const commonNames = [];

  for (const name of santasList) {
    if (childrenList.includes(name)) {
      commonNames.push(name);
    }
  }

  return commonNames.sort();
}

console.log(
  createList(
    ['Jason', 'Jackson', 'Jordan', 'Johnny'], 
    ['Jason', 'Jordan', 'Jennifer']
  )
); // ['Jason', 'Jordan']

console.log(
  createList(
    ['JAsoN', 'JaSON', 'jasON'], 
    ['JasoN', 'JAsoN', 'jASon']
  )
); // ['JAsoN']

console.log(createList(['John', 'James'], [])); // []
