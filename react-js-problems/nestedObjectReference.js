/*
You have a complex object that has many deeply nested variables.

Add the `extract` method to the objects' prototype, which accepts a string `path` representing a nested path and returns its value.

If the path is wrong and the sought property doesn't exist, return `undefined`.
*/

const object = {
  person: {
    name: 'David',
    data: {
      hometown: 'Manchester',
      birthdate: '10.12.1998',
      bio: {
        funFact: 'I am fond of diving!'
      }
    }
  }
}

function extractProperty() {
  /**
   * @param {string} path
   *
   * @returns {string|undefined}
   */
  Object.prototype.extract = function extract(path) {
    const splitPath = path.split('.');
    let result = this;

    for (let i = 0; i < splitPath.length; i++) {
      result = result[splitPath[i]];
    }

    return result;
  };
}

extractProperty();

console.log(
  object.extract('person.name')
); // 'David'

console.log(
  object.extract('person.data.hometown')
); // 'Manchester'

/*
Iteration 1:
splitPath[i] = 'pweson'
result = result['person']

JS finds `person` property and assigns its value to `result`.
Result: the nested person object


Iteration 2:
splitPath[i] = 'data'
result = result['date']

Now `result` is the person object, so JS finds its `data` property.
Result: the data object


Iteration 3:
splitPath[i] = 'hometown'
result = result['hometown']

JS finds `hometown` inside the data object.
Result: 'Manchester'


`result` changes at every iteration. it starts at the outer object, moves into `person`, then into `data`, and reaches `hometown`.  
*/


console.log(
  object.extract('person.data.nationality')
); // undefined
