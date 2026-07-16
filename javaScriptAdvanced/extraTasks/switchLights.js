/*
Some light bulbs are arranged in a circular pattern, 
clockwise, each either on (`1`) or off (`0`). Each turn, the 
light bulbs change states based on their neighbors. If a 
bulb was on in the previous state, the bulb immediately to 
its right switches its state (from `0` to `1`, or `1` to `0`).

Create a function `switchLights` that:

- Takes an array `lights`, where `0` and `1` represent the 
bulbs' states, and a non-negative integer `n`.
- Return the bulbs' states after `n` turns.

`lights` contains at least 2 elements.
*/
const ON = 1;
const OFF = 0;

function updateLightBulb(bulb) {
  return (bulb === ON) ? OFF : ON;
}

function switchLights(lights, n) {
  let copyLights = [...lights];
  const updatedLights = lights;

  for (let idx1 = 1; idx1 <= n; idx1++) {
    for (let idx2 = 0; idx2 < copyLights.length - 1; idx2++) {
      if (lights[lights.length - 1] === ON && idx2 === 0) {
        updatedLights[idx2] = updateLightBulb(updatedLights[idx2]);
      }

      if (copyLights[idx2] === ON) {
        updatedLights[idx2 + 1] = updateLightBulb(updatedLights[idx2 + 1]);
      }
    }

    copyLights = [...updatedLights];
  }

  return lights;
}

lights = [0, 1, 1, 0, 1, 1];
n = 2;

console.log(switchLights(lights, n)); // [1, 0, 1, 1, 0, 1];

// 0. [0, 1, 1, 0, 1, 1] - original state
// 1. [1, 1, 0, 1, 1, 0]- 1st turn 
//    lights[2], lights[3], lights[5] and lights[0] 
//    changed their states

// 2. [1, 0, 1, 1, 0, 1] - 2nd turn 
//    lights[1], lights[2], lights[4] and lights[5] 
//    changed their states 

lights = [0, 0, 1, 0];
n = 1;

console.log(switchLights(lights, n)); // [0, 0, 1, 1];

// 0. [0, 0, 1, 0] - original state
// 1. [0, 0, 1, 1]- 1st turn 
//    lights[3] changed its state


// `should change the 'lights' twice if 'n' = 2`
console.log(switchLights([1, 1, 0, 0, 0, 1, 0, 1], 2))
// [1, 0, 1, 1, 0, 1, 0, 0]


// `should change the 'lights' three times if 'n' = 3`
console.log(switchLights([1, 1, 0, 0, 0, 1, 0, 1], 3));
// [1, 1, 1, 0, 1, 1, 1, 0]

// `should change the 'lights' five times if 'n' = 5`
console.log(switchLights([0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0], 5));
// [1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1]

// `should change the 'lights' ten times if 'n' = 10`
console.log(switchLights([0, 0, 1, 0, 1], 10));
// [1, 1, 1, 0, 1]

// `should change the 'lights' ninety-nine times if 'n' = 99`
console.log(switchLights([0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1], 99));
// [0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0]

// Works as expected
