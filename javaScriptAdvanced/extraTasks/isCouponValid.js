/*
But before we can do that, we need to create a function 
`isCouponValid` that will check whether the entered codes 
are valid. The function should take 4 inputs:

- `enteredCode` - the code entered by the user.
- `correctCode` - the actual, correct code
- `currentDate` - today's date.
- `expirationDate` - the expiration date of the coupon, 
  formatted as `monthDAY, YEAR`.

The coupon is valid only if the `enteredCode` is the same as 
the `correctCode` and the `expirationDate` is **later than** 
the `currentDate`.
*/

function findMonth(date) {
  let fullDate = date.split(' ');
  const month = fullDate[1];

  if (month.match(/[a-z]/)) {
    return month;
  }

  fullDate = new Date(date);
  
  return fullDate.getMonth();
}

function findDay(date) {
  let fullDate = date.split(' ');
  const day = fullDate[0];

  if (day.match(/[0-9]/)) {
    return Number(day);
  }

  fullDate = new Date(date);
  
  return fullDate.getDate();
}

function isCouponValid(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) {
    return false;
  }

  // Find date
  const todayDate = findDay(currentDate);
  const expireDate = findDay(expirationDate);

  // Find month
  const todayMonth = findMonth(currentDate);
  const expireMonth = findMonth(expirationDate);

  let dateIsValid = false;

  if (todayDate <= expireDate && todayMonth <= expireMonth) {
    dateIsValid = true;
  }

  return dateIsValid;
}

console.log(
  isCouponValid(
    "wGh123kIo", "wGh123kIo", "July 9, 2020", "July 9, 2020"
  )
 ); // true

console.log(
  isCouponValid(
    "001", "001", "9 lipca 2020", "8 lipca 2020"
  )
); // false

console.log(
  isCouponValid(
    '145a', '145a', 'May 12, 2020', 'May 11, 2020'
  )
); // false


console.log(
  isCouponValid(
    '145a', '145a', 'May 12, 2020', 'April 12, 2020'
  )
); // false


// Works as expected
