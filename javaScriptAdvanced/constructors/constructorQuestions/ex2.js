function User(name) {
  this.name = name;
}

User.prototype = {
  test() {
    console.log(111);
  },
};

const yuliia = new User('Yuliia');

User.prototype = {
  test() {
    console.log(222);
  },
};

yuliia.test(); /// 111
