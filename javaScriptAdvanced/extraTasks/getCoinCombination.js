/*
Write a function getCoinCombination that:

- Takes a non-negative integer `cents` (a specific amount 
  in cents).
- Returns a combination of the smallest possible number of 
  coins, giving the same amount.

The function should return an array, which is structured 
as follows:

coins[0] = number of pennies (1 penny = 1 cent)
coins[1] = number of nickels (1 nickel = 5 cents)
coins[2] = number of dimes (1 dime = 10 cents)
coins[3] = number of quarters (1 quarter = 25 cents)
*/

const PENNIES_CENTS = 1;
const NICKELS_CENTS = 5;
const DIMES_CENTS = 10;
const QUARTER_CENTS = 25;

function getCoinCombination(cents) {
  let pennies = 0;
  let nickels = 0;
  let dimes = 0;
  let quarters = 0;
  let updatedAmount = cents;

  quarters = Math.floor(updatedAmount / QUARTER_CENTS);
  updatedAmount = updatedAmount - (quarters * QUARTER_CENTS);

  if (updatedAmount === 0) {
      return [pennies, nickels, dimes, quarters];
    }

  dimes = Math.floor(updatedAmount / DIMES_CENTS);
  updatedAmount = updatedAmount - (dimes * DIMES_CENTS);

  if (updatedAmount === 0) {
    return [pennies, nickels, dimes, quarters];
  }

  nickels = Math.floor(updatedAmount / NICKELS_CENTS);
  updatedAmount = updatedAmount - (nickels * NICKELS_CENTS);

  if (updatedAmount === 0) {
    return [pennies, nickels, dimes, quarters];
  }

  pennies = Math.floor(updatedAmount / PENNIES_CENTS);

  return [pennies, nickels, dimes, quarters];
}

console.log(getCoinCombination(1)); // [1, 0, 0, 0] 
// 1 penny

console.log(getCoinCombination(6)); // [1, 1, 0, 0] 
// 1 penny + 1 nickel

console.log(getCoinCombination(17)); // [2, 1, 1, 0] 
// 2 pennies + 1 nickel + 1 dime

console.log(getCoinCombination(50)); // [0, 0, 0, 2] 
// 2 quarters

// Works as expected
