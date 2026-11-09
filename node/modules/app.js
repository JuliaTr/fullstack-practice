// Custom modules
import { add, subtract } from './actions.js';

// Internal (Node.js built-in) module
import os from 'os';
import path from 'path';

// External modules
import _ from 'lodash';  // library

// console.log(
//   add(5, 3),      // 8
//   subtract(5, 3)  // 2
// );

// console.log(os.version());
// console.log(path.resolve('./package.json'));
// console.log([1] === [1]); // false

// needs "type": "module" in package.json file for for modern ES Module syntax
console.log(
  // `isEqual` is from `lodash` module
  _.isEqual([1], [1]), // true
);