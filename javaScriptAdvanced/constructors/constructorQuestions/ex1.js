'use strict';

function User(name) {
  this.name = name;
}

User.prototype = {
  test() {
    console.log(111);
  },
};

const yuliia = new User('Yuliia');

yuliia.test() // 111
