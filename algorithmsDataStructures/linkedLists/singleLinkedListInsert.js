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

  // This method is intended for internal use only. `_` is a naming convention. Accessing inside parent, subclasses and outside the class.
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

    this.tail++;
  }
}

const firstNode = new Node(5);
console.log(firstNode)
// Node { value: 5, next: null }

const secondNode = new Node(10);
firstNode.next = secondNode;

console.log(firstNode);
// Node { value: 5, next: Node { value: 10, next: null } }



// Step 