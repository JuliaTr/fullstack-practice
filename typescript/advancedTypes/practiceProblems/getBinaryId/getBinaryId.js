"use strict";
/*
Create a custom type `UserId` that can contain strings and numbers. Follow it up with a function getBinaryId that:

Takes userId. If userId is a string, treat it as an uppercase hexadecimal number (e.g., FF means 255).
Returns a string that is a binary representation of userId.

The function, its parameters and all variables should be correctly typed.
*/
function getBinaryId(userId) {
    if (typeof userId === 'number') {
        return userId.toString(2);
    }
    return parseInt(userId, 16).toString(2);
}
console.log(getBinaryId(7)); // '111'
console.log(getBinaryId("FE00")); // '1111111000000000'
