function groupByMethod() {
  Array.prototype.groupBy = function(callback) {
    const groupedRobots = {};

    for (const value of this) {
      let key;
      let ourValue;

      if (callback === undefined) {
        key = value;
        ourValue = value;
      }

      if (callback) {
        key = callback(value);
        ourValue = value;
      }

      if (groupedRobots[key]) {
        groupedRobots[key].push(ourValue);
      }

      if (!groupedRobots[key]) {
        groupedRobots[key] = [];
        groupedRobots[key].push(ourValue);
      }
    }

    return groupedRobots;
  };
}

const words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

groupByMethod()

// group words by length
const grouppedWords = words.groupBy(word => word.length);

console.log(grouppedWords);
/*
{
  3: ['one', 'two', 'six'],
  4: ['four', 'five'],
  5: ['three', 'seven'],
}
*/

const bob = { type: 'cleaner', name: 'bob' };
const paul = { type: 'cargo', name: 'paul' };
const robert = { type: 'cleaner', name: 'robert' };

const robots = [bob, paul, robert];

// group robots by type
const groupedRobots = robots.groupBy(robot => robot.type)

console.log(groupedRobots) 
/*
{
  cleaner: [bob, robert],
  cargo: [paul],
}
*/

const numbers = [1, 1, 2, 1, 3, 3, 2, 4];

// group elements by value
const groupedNumbers = numbers.groupBy();

console.log(groupedNumbers);
/*
{
  1: [1, 1, 1],
  2: [2, 2],
  3: [3, 3],
  4: [4],
}
*/

// Works as expected
