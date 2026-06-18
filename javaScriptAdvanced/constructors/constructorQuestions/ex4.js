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

// #1, but `test` is different
// bad idea
User.prototype.test = function() {
  console.log(222);
};

yuliia.test() // 222
