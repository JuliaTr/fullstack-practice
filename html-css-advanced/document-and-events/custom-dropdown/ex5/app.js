'use strict';

/* 
`event`:
- browser behaviour;
- `event.preventDefault()` prevents standard browser behaviour
*/

// Find element 
const dropdown = document.querySelector('.dropdown');

// Find trigger
const trigger = dropdown.querySelector('.dropdown__trigger');

// Add event litener
trigger.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  // If `dropdaown` contains `dropdown--active` among its classes
  if (dropdown.classList.contains('dropdown--active')) {
    dropdown.classList.remove('dropdown--active');
  } else {
    dropdown.classList.add('dropdown--active');
  }
});
