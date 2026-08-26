'use strict';

/*
`document`:
- global variable in js to interact with the page

`documentElement`:
- html
*/

// Find element on the page:
const page = document.documentElement;
// `page` points to a special object which is bound with `html` tag on the page.

const switcher = document.querySelector('.theme-switcher');
// `switcher` points to an object bound with necessary element (`.theme-switcher).

console.log(switcher);


// Event listeners:
// When user clicks on switcher 
switcher.addEventListener('click', () => {
  // add css class to the whole page
  page.classList.add('page--theme--dark');
});
