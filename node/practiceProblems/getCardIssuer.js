/*
Write the function `getCardIssuer` that:

1. Takes a card number.
2. Determines the card issuer using below numbers.
3. If there's a match, it returns the card issuer, otherwise — returns the string `'Unknown'`.
| Card Type  | Begins With          | Number Length |
|------------|----------------------|---------------|
| AMEX       | 34 or 37             | 15            |
| Discover   | 6011                 | 16            |
| Mastercard | 51, 52, 53, 54 or 55 | 16            |
| VISA       | 4                    | 13 or 16      |

Here are a few examples:
*/

/**
 * @param {number} number
 *
 * @returns {string}
 */
function getCardIssuer(number) {
  const str = number.toString();

  if ((str.length === 13 || str.length === 16) 
      && str.startsWith('4')
  ) {
    return 'VISA';
  }

  return 'Unknown';
}

console.log(getCardIssuer(4111111111111)); // 'VISA'
console.log(getCardIssuer(378282246310005)); 
// 'AMEX'
console.log(getCardIssuer(6011111111111117)); 
// 'Discover'
console.log(getCardIssuer(5105105105105106)); 
// 'Mastercard'
console.log(getCardIssuer(9111111111111111)); 
// 'Unknown'
