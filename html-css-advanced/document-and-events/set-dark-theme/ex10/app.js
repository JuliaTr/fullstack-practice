'use strict';

/*
`document`:
- global variable in js to interact with the page

`documentElement`:
- html
*/

// Find element on the page:
// const page = document.documentElement;
// // `page` points to a special object which is bound with `html` tag on the page.

// Same as above
const page = document.querySelector('.page');

const switcher = document.querySelector('.theme-switcher');
// `switcher` points to an object bound with necessary element (`.theme-switcher).

const themeName = document.querySelector('.theme-name');


// Event listeners:
// When user clicks on switcher 
switcher.addEventListener('click', () => {
  // If this class exists
  if (page.classList.contains('page--theme--dark')) {
    // delete them
    page.classList.remove('page--theme--dark');
    switcher.classList.remove('theme-switcher--theme--dark');
    themeName.textContent = 'Theme: Light';
  } else {
    // add them to the whole page
    page.classList.add('page--theme--dark');
    switcher.classList.add('theme-switcher--theme--dark');
    themeName.innerHTML = 'Theme: <strong>Dark</strong>'
  }
});
