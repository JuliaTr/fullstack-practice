/*
1. Create a `BoardOfFame` class. This board will 
  initially have `3` spots for champions. However, for 
  international tournaments with more champions, the 
  `BoardOfFame` class's constructor can accommodate any 
  number of spots.

2. The `BoardOfFame` class should include an `addRecord` 
  method. This method takes a `robot` object and adds 
  it to the board. If the incoming `robot` has a 
  higher score than existing ones, it will be placed 
  accordingly, pushing down other entries.

3. Implement a list getter in the `BoardOfFame` class 
  that formats and returns the list of champions as a 
  string. If there are fewer robots than requested 
  spots (e.g., asking for the top `5` but only `3` exist), 
  the getter should return ... for the empty spots.

Each entry on the board must have a unique name. If a
new `robot` shares a name with an existing entry, 
don't add a new record; instead, update the `score` of 
the existing entry.

Hints:

- Inside the `BoardOfFame` class constructor, add a 
  variable `this.numberOfPlaces` to store the number 
  of champion spots available.
- Initialize an array `this.robots` within the 
  constructor to hold the robot objects. Use the `addRecord` 
  method to add new robot entries to this array.
- Sort the `this.robots` array each time a new record 
  is added in the `addRecord` method to ensure the 
  robots are ranked correctly.
- Implement a getter `list` that converts the `this.robots` 
  array into a formatted string, showing the ranking of 
  robots.
*/

class BoardOfFame {
  constructor(number = 3) {
    this.numberOfPlaces = number;
    this.robots = [];
  }

  makeBoard() {
    this.robots.sort((robot1, robot2) => robot2.score - robot1.score)
    
    return this.robots;
  }

  get list() {
    // Sort robots
    this.makeBoard();
    
    let counter = 0;
    let str = '';

    while (counter < this.numberOfPlaces) {
      const robot = this.robots[counter];

      if (!robot) {
        str += `${counter + 1}. ...`;
      }

      if (robot) {
        str += `${counter + 1}. ${robot.name}: ${robot.score}`;
      }

      if ((counter + 1) !== this.numberOfPlaces) {
        str += ' | ';
      }

      counter++;
    }

    return str;
  }

  addRecord(robot) {
    let isRobot = false;

    for (const element of this.robots) {
      if (element.name === robot.name) {
        element.score = robot.score;
        isRobot = true;
        break;
      }
    }

    if (!isRobot) {
      this.robots.push(robot);
    }
  }
}

const board = new BoardOfFame();

console.log(board.list) // `1. ... | 2. ... | 3. ...`
board.addRecord({name: 'Cleaner-900', score: 6})
board.addRecord({name: 'Cleaner-775', score: 16})
console.log(board.list) // `1. Cleaner-775: 16 | 2. Cleaner-900: 6 | 3. ...`

board.addRecord({name: 'MX-56', score: 23})
board.addRecord({name: 'Cleaner-775', score: 30})
console.log(board.list) // `1. Cleaner-775: 30 | 2. MX-56: 23 | 3. Cleaner-900: 6`

const internationalBoard = new BoardOfFame(5);
internationalBoard.list = `1. ... | 2. ... | 3. ... | 4. ... | 5. ...`
console.log(internationalBoard.list)

// Works as expected
