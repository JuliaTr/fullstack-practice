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

  // find
}

const list = new LinkedList();

list.append('list');
console.log(JSON.stringify(list));
/*
{"head":{"value":"list","next":null},"tail":{"value":"list","next":null},"length":1}
*/

list.append('is');
console.log(JSON.stringify(list));
/*
{"head":{"value":"list","next":{"value":"is","next":null}},"tail":{"value":"is","next":null},"length":2}
*/

list.prepend('Linked');
console.log(JSON.stringify(list));
/*
{"head":{"value":"Linked","next":{"value":"list","next":{"value":"is","next":null}}},"tail":{"value":"is","next":null},"length":3}
*/

list.insertBefore(3, 'nice');
console.log(JSON.stringify(list));
/*
{"head":{"value":"Linked","next":{"value":"list","next":{"value":"is","next":{"value":"nice","next":null}}}},"tail":{"value":"nice","next":null},"length":4}
*/

list.insertBefore(3, 'very');
console.log(JSON.stringify(list));
/*
{"head":{"value":"Linked","next":{"value":"list","next":{"value":"is","next":{"value":"very","next":{"value":"nice","next":null}}}}},"tail":{"value":"nice","next":null},"length":5}
*/

list.insertBefore(100, '!');
console.log(JSON.stringify(list));
/*
{"head":{"value":"Linked","next":{"value":"list","next":{"value":"is","next":{"value":"very","next":{"value":"nice","next":{"value":"!","next":null}}}}}},"tail":{"value":"!","next":null},"length":6}
*/
