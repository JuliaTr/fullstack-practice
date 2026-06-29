/*
Mr. Scrooge wants to deposit money into a savings account, 
and keep it there until he earns a desired sum. The 
account yields interest annualy. When the year ends, 
some of the interest is taken by the state (capital 
gains tax), and the remaining amount is reinvested for 
another year.

Create the function calculateYears that returns the 
number of years Mr. Scrooge must stay invested to reach 
the desired amount. Here, for instance, he needs to wait 
3 years:

initial amount = 1000.00
desired amount = 1100.00
interest = 0.05
capital gains tax = 0.18

After 1st year --> 1041.00
After 2nd year --> 1083.86
After 3rd year --> 1128.30

The desired amount is always equal to or greater than 
the initial amount. In case the initial and desired 
amounts are equal, your function should simply return 0 
years.
*/

function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) {
    return 0;
  }

  let initial = principal;
  let i = 0;

  while (initial < desired) {
    // Calculate amount from interest:
    const amountFromInterest = initial * interest;

    // Calculate amount from tax:
    const amountFromTax = amountFromInterest * tax;

    // Calculate difference between amount from interest
    // and amount from tax:
    const dif = amountFromInterest - amountFromTax;

    // Calculate total;
    initial = initial + dif;

    i++;
  }

  return i;
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
console.log(calculateYears(1000, 0.05, 0.18, 1200)); // 5
console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0
