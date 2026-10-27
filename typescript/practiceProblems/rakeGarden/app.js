"use strict";
/*
Help Roman rake his garden!

The office has a magnificent garden made of white gravel and rocks, and it is raked diligently everyday by the workers of Mate Academy. Create a function rakeGarden that accepts a string representing the garden such as:

garden = 'gravel rock slug ant gravel snail rock'

Rake out any items that are not a rock or gravel and replace them with gravel such that:

garden = 'gravel rock gravel gravel gravel gravel rock'

Return a string with all items except a rock or gravel replaced with gravel. If the garden is empty, also replace all spaces with gravel.
*/
const GRAVEL = 'gravel';
const ROCK = 'rock';
function rakeGarden(garden) {
    const gardenWords = garden.split(' ');
    const result = [];
    for (const word of gardenWords) {
        if (word === GRAVEL || word === ROCK) {
            result.push(word);
        }
        else {
            result.push(GRAVEL);
        }
    }
    return result.join(' ');
}
const garden = 'gravel rock slug ant gravel snail rock';
console.log(rakeGarden(garden));
// gravel rock gravel gravel gravel gravel rock
console.log(rakeGarden('')); // 'gravel'
console.log(rakeGarden(' ')); // 'gravel gravel'
// works as expected
