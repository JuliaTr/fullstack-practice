/*
Create function MagicFunction that:

- accepts any number of parameters,
- returns sum of every single parameter given,
- any parameter that can not be parsed as a number will 
  be counted as 0,
- can be called infinitely,
- the next function call will do the same thing, but 
  also summing the last returned number.
*/

function convertToNumber(mixedValues) {
  const convertedValues = [];

  for (const value of mixedValues) {
    let number = +value;
    const isNumber = Number.isFinite(number);

    number = isNumber ? number : 0;

    convertedValues.push(number);
  }

  return convertedValues;
}

function calculateSum(numbers) {
  return numbers.reduce((sum, currentNum) => sum + currentNum, 0);
}

function MagicFunction(...numbers) {
  let convertedValues = convertToNumber(numbers);
  let total = calculateSum(convertedValues);

  const sumedUp = (...moreNums) => {
    convertedValues = convertToNumber(moreNums);

    total += calculateSum(convertedValues);

    return sumedUp;
  };

  // Converts function to  its primitive representation
  sumedUp[Symbol.toPrimitive] = () => total;

  return sumedUp;
}

console.log(+MagicFunction()); // 0
console.log(+MagicFunction(3)); // 3
console.log(+MagicFunction(1, 3)(2)); // 6
console.log(+MagicFunction(1, 2)(3, 4, 5)(6)(7, 10)); // 38

// `should return a sum of the negative numbers`
console.log(+MagicFunction(-1, -2)(-3, -4, -5)(-6)(-7, -10));
// -38

// `should return a sum of numbers when some parameters 
// can not be parsed as numbers`
console.log(+MagicFunction(2)()(4)('string')) // 6

// `should return zero when all the parameters can not be 
// parsed as numbers`
console.log(+MagicFunction()()('+')('abc')) // 0

// 'should convert strings to numbers'
console.log(+MagicFunction('1', '2')('3', '4', '5'))
// 15

// 'should convert any values to numbers'
console.log(+MagicFunction(true, ['12'])(['3'], '   \n -5.0 '))
// 11

// 'should ignore none numeric values'
console.log(+MagicFunction('asdf', 12, '12b')({ a: 1 }, NaN))
// 12

// Works as expected



// Experiments:
console.log(+true) // 1
console.log(+'12') // 12
console.log(+1) // 1

console.log(+'str') // NaN
console.log(+'12b') // NaN
console.log(+{ a: 1 }) // NaN
console.log(+NaN) //  NaN
console.log(+'+') // NaN
