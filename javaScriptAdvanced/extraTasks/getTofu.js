/*
A monk has went to town to purchase some some much 
needed tofu for the temple. He's carrying a large box 
containing some loose change with donations, as well 
as some of their personal items. The coins have the 
following values:

- `monme = 60`
- `mon = 1`

The contents of the box are represented with a data 
structure similar to the one below:

```
box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon';
cost = 124;
```

Your task is to:

- Sort through the items in the box. Find the coins, 
and put everything else aside, returning the following 
array:
[
  count of mon coins in box, 
  count of monme coins in box, 
  sum of all coins value in box, 
  minimum number of coins needed to buy tofu
].

- Determine the minimum number of coins to pay for tofu.
  - You must pay with exact change; if you do not have 
    the correct change, return 'leaving the market'.
  - If the cost of tofu is higher than your total 
    amount of money, then also return 'leaving the 
    market'.
*/

const MONME_VALUE = 60;
const MON_VALUE = 1;

function countCoins(number) {
  let coins = number;

  if (number === undefined) {
    coins = 0;
  }

  return number;
}

function calculateMinNumberCoinsBuyTofu(cost, monCoins) {
  const minMonmeCoins = Math.round(cost / MONME_VALUE);
  const minMonCoins = cost - (minMonmeCoins * MONME_VALUE);

  if (minMonCoins > monCoins) {
    return;
  }
  
  return minMonmeCoins + minMonCoins;
}

function calculateTotalValue(number, value) {
  return number * value;
}

function calculateSumAllCoinsInBox(monCoins, monmeCoins) {
  const monTotal = calculateTotalValue(monCoins, MON_VALUE);
  const monmeTotal = calculateTotalValue(monmeCoins, MONME_VALUE);

  return monTotal + monmeTotal;
}

function countOccurrences(words) {
  const occurrences = {};

  for (const word of words) {
    if (occurrences[word]) {
      occurrences[word] += 1;
    }

    if (!occurrences[word]) {
      occurrences[word] = 1;
    }
  }

  return occurrences;
}

function getTofu(cost, box) {
  const words = box.split(' ');
  const occurrences = countOccurrences(words);

  // count of coins in box:
  const monCoins = countCoins(occurrences.mon); // mon
  const monmeCoins = countCoins(occurrences.monme); // monme

  // sum of all coins value in box
  const sumOfCoinsValues = calculateSumAllCoinsInBox(monCoins, monmeCoins);

  if (sumOfCoinsValues < cost) {
    return 'leaving the market';
  }

  // minimum number of coins needed to buy tofu
  const minCoinsTotal = calculateMinNumberCoinsBuyTofu(cost, monCoins);

  if (minCoinsTotal === undefined) {
    return 'leaving the market';
  }

  return [
    monCoins,
    monmeCoins,
    sumOfCoinsValues,
    minCoinsTotal,
  ];
}

const box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon';
const cost = 124;

console.log(getTofu(cost, box)); // [45, 5, 345, 6]
// [
//   count of mon coins in box, 
//   count of monme coins in box, 
//   sum of all coins value in box, 
//   minimum number of coins needed to buy tofu
// ]

console.log(getTofu(674, 'mon mon mon')); // 'leaving the market'
console.log(getTofu(5, 'mon monme')); // // 'leaving the market'

// Works as expected
