class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  _addFirstElement(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }

    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  }

  prepend(value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }

    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  insertBefore(position, value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }

    if (position === 0) {
      return this.prepend(value);
    }

    let parentNode = this.head;

    for (let i = 1; i < position; i++) {
      if (parentNode.next === null) {
        break;
      }

      parentNode = parentNode.next;
    }

    const newNode = new Node(value);
    newNode.next = parentNode.next;
    parentNode.next = newNode;

    if (newNode.next === null) {
      this.tail = newNode;
    }

    this.length++;
  }

  find(value) {
    let currentNode = this.head;

    while (
      currentNode !== null 
      && currentNode.value !== value
    ) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

const list = new LinkedList();

list.append('list');
list.append('is');
list.prepend('Linked');
list.insertBefore(3, 'nice');
list.insertBefore(3, 'very');
list.insertBefore(100, '!');

console.log(list.find('nice'));
// Node { value: 'nice', next: Node { value: '!', next: null } }

console.log(list.find('!'));
// Node { value: '!', next: null }

console.log(list.find('nice!')); // null
