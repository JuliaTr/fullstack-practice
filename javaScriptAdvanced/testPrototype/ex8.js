const father = {
  get PARENT() {
    return Object.getPrototypeOf(this);
  },

  set PARENT(value) {
    // need to check if value is an object or null
    Object.setPrototypeOf(this, value);
  },
};

const child = { name: 'Alice' };
Object.setPrototypeOf(child, father);

child.PARENT = null;

console.log(child.PARENT); // undefined
