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

  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
      this.tail = this.head;
      this.length = 1;
    }
  }
}

const firstNode = new Node(5);
console.log(firstNode)
// Node { value: 5, next: null }

const secondNode = new Node(10);
firstNode.next = secondNode;

console.log(firstNode);
// Node { value: 5, next: Node { value: 10, next: null } }
