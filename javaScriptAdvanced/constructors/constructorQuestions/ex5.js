'use strict';

function User(name) {
  this.name = name;
}

// #1
User.prototype.test = function() {
  console.log(111);
};

const yuliia = new User('Yuliia');
// yuliia -> User.prototype #1

yuliia.test(); // 111
