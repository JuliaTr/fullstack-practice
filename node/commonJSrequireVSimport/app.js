const common = require('./someFolder/common');

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


async function start() {
  const common = require('./someFolder/common');
  const es = await import('./someFolder/es.mjs');

  console.log(es);
  console.log(common);
}

console.log(common); // { x: 1, type: 'CommonJs' }
start();
/*
[Module: null prototype] { default: { x: 1, type: 'ECMAScript' } }
{ x: 1, type: 'CommonJs' }
*/
