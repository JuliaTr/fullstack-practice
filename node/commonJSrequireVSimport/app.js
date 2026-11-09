/*
`import`:
- we can use `import`:
  - even with modules which were created of `commonJS` format with `module.exports`
  - `ECSMAEcript` `export default`
- `import` is for async modules, comparing with `rrequire`

There's no difference how we create modules. The difference is how we connect them (`import` or `require`).
*/

// const common = require('./someFolder/common');

/*
if we use:
const es = require('./someFolder/es.mjs');

console.log(es);
[Module: null prototype] {
  __esModule: true,
  default: { x: 1, type: 'ECMAScript' }
}
*/

// const es = import('./someFolder/es.mjs');
// console.log(es);
// // Promise { <pending> } // async


// async function start() {
//   const common = require('./someFolder/common');
//   const es = await import('./someFolder/es.mjs');

//   console.log(es);
//   console.log(common);
// }

// console.log(common); // { x: 1, type: 'CommonJs' }
// start();
// /*
// [Module: null prototype] { default: { x: 1, type: 'ECMAScript' } }
// { x: 1, type: 'CommonJs' }
// */


// async function start2() {
//   const common = import('./someFolder/common.js');
//   const es = await import('./someFolder/es.mjs');

//   console.log(es);
//   console.log(common); // error
// }

// start2();
// /*
// [Module: null prototype] { default: { x: 1, type: 'ECMAScript' } }
// Promise {
//   [Module: null prototype] {
//     default: { x: 1, type: 'CommonJs' },
//     'module.exports': { x: 1, type: 'CommonJs' }
//   }
// }
// */


async function start3() {
  const common = await import('./someFolder/common.js');
  const es = await import('./someFolder/es.mjs');

  console.log(es);
  console.log(common); // error
}

start3();
/*
[Module: null prototype] { default: { x: 1, type: 'ECMAScript' } }
[Module: null prototype] {
  default: { x: 1, type: 'CommonJs' },
  'module.exports': { x: 1, type: 'CommonJs' }
}
*/
