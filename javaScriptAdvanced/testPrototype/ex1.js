'use strict';

const father = {
  name: 'Bob',
  lastName: 'Smith',
};

const child = {
  name: 'Alice',
};

child.__proto__ = father;
console.log(child.lastName); // Smith

father.lastName = 'Johnes';
console.log(child.lastName); // Jones
