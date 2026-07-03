/*
Create a function `totalWinning` that:

- Takes an object ticket containing bets and an array `results`.
- Returns a string showing the total winnings, following the 
  format `£100`.
Here's how it works:

The ticket object has three bets in a specific order 
(`Home`, `Away`, `Draw`), each with an associated amount:

{
    Home: '£74',
    Away: '£36',
    Draw: '£5'
}

The results array contains three strings, each representing 
a match result as two numbers separated by a hyphen:
- `['3-0', '1-1', '0-2']`
- Higher number on the left = `Home win`
- Higher number on the right = `Away win`
- Equal numbers = `Draw`

For each bet on the ticket, compare it to the corresponding 
result:
- If it matches (`Home win`, `Away win`, or `Draw`), you win 
  the amount specified on the ticket.
- Otherwise, you win nothing for that bet.

Function returns the result.
*/

function getValue(key) {
  return Number(key.slice(1));
}

function getNumber(results, resultsIdx, side) {
  return Number(results[resultsIdx].split('-')[side]);
}

function totalWinning(ticket, results) {
  const result = [];
  const left = 0;
  const right = 1;

  if (getNumber(results, 0, left) > getNumber(results, 0, right)) {
    result.push(getValue(ticket.Home));
  }

  if (getNumber(results, 1, left) < getNumber(results, 1, right)) {
    result.push(getValue(ticket.Away));
  }

  if (getNumber(results, 2, left) === getNumber(results, 2, right)) {
    result.push(getValue(ticket.Draw));
  }

  const total = result.reduce((sum, num) => sum + num, 0);
  const currency = ticket.Home[0];

  return currency + total.toString();
}


let ticket = {
    Home: '£74',
    Away: '£36',
    Draw: '£5',
};

let results = ['3-0', '1-1', '0-2'];
console.log(totalWinning (ticket, results)); // '£74'
// first bet won, second bet lost, third bet lost


ticket = {
    Home: '£25',
    Away: '£50',
    Draw: '£10',
};

results = ['2-4', '0-1', '3-3'];
console.log(totalWinning (ticket, results)); // '£60'
// first bet lost, second bet won, third bet won


// should return '£0' if there is no winning
ticket = {
  Home: '£90',
  Away: '£325',
  Draw: '£65'
};

results = ['2-5', '4-4', '5-0'];
console.log(totalWinning(ticket, results)) // '£0'


// should work if results contain two-digit numbers`, () => {
ticket = {
  Home: '£22',
  Away: '£44',
  Draw: '£88'
};

results = ['12-8', '6-10', '10-11'];
console.log(totalWinning(ticket, results)); // '£66'

// Works as expected



// Experiment:
function totalWinning(ticket, results) {
  const result = [];

  if (results[0][0] > results[0][2]) {
    result.push(ticket.Home);
  }

  if (results[1][0] < results[1][2]) {
    result.push(ticket.Away);
  }

  if (results[2][0] === results[2][2]) {
    result.push(ticket.Draw);
  }

  if (result.length === 1) {
    return result[0];
  }

  const cleaned = result.map((win) => Number(win.slice(1)));
  const total = cleaned.reduce((sum, num) => sum + num, 0);
  const currency = result[0][0];

  return currency + total.toString();
}

let ticket = {
    Home: '£74',
    Away: '£36',
    Draw: '£5',
};

let results = ['3-0', '1-1', '0-2'];
console.log(totalWinning (ticket, results)); // '£74'
// first bet won, second bet lost, third bet lost


ticket = {
    Home: '£25',
    Away: '£50',
    Draw: '£10',
};

results = ['2-4', '0-1', '3-3'];
console.log(totalWinning (ticket, results)); // '£60'
// first bet lost, second bet won, third bet won
