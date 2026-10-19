"use strict";
function isAdult(age) {
    return age >= 18;
}
function getMessage(name, age) {
    if (isAdult(age)) {
        return `${name} is adult`;
    }
    return `${name} is too young`;
}
function returnMessage() {
    const message1 = getMessage('Misha', 37);
    const message2 = getMessage('Antony', 17);
    return `${message1}. ${message2}.`;
}
console.log(returnMessage());
