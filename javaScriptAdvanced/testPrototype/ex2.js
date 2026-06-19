const father = {
  name: 'Bob',
  lastName: 'Smith',

  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
};

const child = {
  name: 'Alice',
};

Object.setPrototypeOf(child, father);

console.log(child.getFullName()); // Alice Smith
