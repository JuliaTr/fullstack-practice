'use strict';

const father = {
  lastName: 'Smith',
};

const child1 = {
  name: 'Alice',
  __proto__: father,
};

const child2 = {
  name: 'Kate',
  __proto__: father,
};

child1.lastName = 'Black';

console.log(child2.lastName);
