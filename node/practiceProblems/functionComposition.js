/*
Function composition is a mathematical operation that mainly presents itself in lambda calculus and computability. It is explained well here (https://www.mathsisfun.com/sets/functions-composition.html), but in simple mathematical notation:

f3 = compose(func1, func2) is equivalent to f3(x) = func1(func2(x))

Your task is to create a function `compose`, which will be passed two functions or lambdas `func1` and `func2`. Remember that the resulting composed function may be passed multiple arguments!

compose(func1, func2)(x) === func1(func2(x))
*/

function compose(func1, func2) {
  return function(x) {
    return func1(func2(x));
  };
}

const add2  = (n) => n + 2;
const times2 = (n) => n * 2;
const times2add2 = compose(add2, times2);
const add2times2 = compose(times2, add2);
const add4 = compose(add2, add2);

console.log(times2add2(2)); // 6
console.log(add2times2(2)); // 8
console.log(add4(2)); // 6
