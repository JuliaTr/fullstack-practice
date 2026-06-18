'use strict';

function User(name) {
  this.name = name;
}

// #1
User.prototype = {
  test() {
    console.log(111);
  },
};

// #2
User.prototype = {
  test() {
    console.log(222);
  },
};

const yuliia = new User('Yuliia');
// yuliia -> User.prototype #2

yuliia.test() // 222
