// Step 2:
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

  prepend(value) {
    if (this.isEmpty()) {
      return this._addFirstElement(value);
    }

    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;

    this.tail++;
  }

  // `position` - index before which we insert value
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
}

// notes (expected behaviour):
// list -> [123, 45, 344]
// list.inserBefore(1, 145)
// list -> [123, 145, 45, 344]

const list = new LinkedList();
list.append('list');
// console.log(list);
// /*
// LinkedList {
//   head: Node { value: 'list', next: null },
//   tail: Node { value: 'list', next: null },
//   length: 1
// }
// */

console.log(JSON.stringify(list));
/*
{"head":{"value":"list","next":null},"tail":{"value":"list","next":null},"length":1}
*/


list.append('is');
console.log(JSON.stringify(list));
/*
{"head":{"value":"list","next":{"value":"is","next":null}},"tail":null,"length":1}
*/

list.prepend('Linked');
console.log(JSON.stringify(list));
/*
{"head":{"value":"Linked","next":{"value":"list","next":{"value":"is","next":null}}},"tail":null,"length":1}
*/

list.insertBefore(3, 'nice');
console.log(JSON.stringify(list));
/*
{"head":{"value":"Linked","next":{"value":"list","next":{"value":"is","next":{"value":"nice","next":null}}}},"tail":{"value":"nice","next":null},"length":2}
*/

list.insertBefore(3, 'very');
console.log(JSON.stringify(list));
/*
{"head":{"value":"Linked","next":{"value":"list","next":{"value":"is","next":{"value":"very","next":{"value":"nice","next":null}}}}},"tail":{"value":"nice","next":null},"length":3}
*/



// // Step 1:
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// const firstNode = new Node(5);
// console.log(firstNode)
// // Node { value: 5, next: null }

// const secondNode = new Node(10);
// firstNode.next = secondNode;

// console.log(firstNode);
// // Node { value: 5, next: Node { value: 10, next: null } }
