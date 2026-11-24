class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const firstNode = new Node(5);
console.log(firstNode)
// Node { value: 5, next: null }

const secondNode = new Node(10);
firstNode.next = secondNode;

console.log(firstNode);
// Node { value: 5, next: Node { value: 10, next: null } }
