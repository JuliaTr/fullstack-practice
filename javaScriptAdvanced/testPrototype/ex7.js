const father = {
  name: 'Bob',
  lastName: 'Smith',

  get fullName() {
    return `${this.name} ${this.lastName}`;
  }
};

const child = {
  name: 'Alice',
};

Object.setPrototypeOf(child, father);

child.fullName = 'Rachel Green';

console.log(child.fullName); // Alice Smith
