/*
Create the `Calendar` class with the book method on its 
`instances`, where:

- The method accepts two integers, `start` and `end`, 
  representing the start and end of an event.
- If the event doesn't overlap with other, already saved 
  events, `book` adds it to the schedule.
- If the event is successfully added, `book` returns 
  `true`, otherwise false.

An event can start as soon as the preceding one ends.
*/

class Calendar {
  constructor() {
    this.schedule = [];
  }

  book(start, end) {
    if (this.schedule.length === 0) {
      this.schedule.push([start, end]);

      return true;
    }

    if (start >= this.schedule[this.schedule.length - 1][1]) {
      this.schedule.push([start, end]);

      return true;
    }

    for (let i = 0; i < this.schedule.length - 1; i++) {
      const currentPair = this.schedule[i];
      const nextPair = this.schedule[i + 1];

      if (currentPair[1] <= start && nextPair[0] >= end) {
        this.schedule.splice(i + 1, 0, [start, end]);

        return true;
      }
    }

    return false;
  }
}

const calendar = new Calendar();
console.log(calendar.book(5, 10)); // true
console.log(calendar.book(7, 25)); // false
console.log(calendar.book(1, 30)); // false
console.log(calendar.book(10, 25)); // true


// 'book' method should return true for the events 
// which are between already existing events and do 
// not overlap
const calendar = new this()
console.log(calendar.book(0, 10)); // true
console.log(calendar.book(20, 30)); // true
console.log(calendar.book(10, 15)); // true

// Works as expected
