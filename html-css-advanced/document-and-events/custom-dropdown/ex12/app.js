'use strict';

/* 
`event`:
- browser behaviour;
- `event.preventDefault()` prevents standard browser behaviour

`.toggle`:
- switches class on element

In browser: 
  1. inspect -> 
  2. select div with dropdown__content class 
  3. Console:

> $0   (last selected element)
  > <div class="dropdown__content"></div>

> $0.clientHeight   
(this element has `clientHeight` property, which is height of its box (inner height))

> $0.offsetHeight 
(outer height including borders and paddings)

> document.documentElement.scrollHeight
(total element height including scroll)

> document.documentElement.clientHeight
(inner area)
*/

// Find element 
const dropdown = document.querySelector('.dropdown');

// Find trigger
const trigger = dropdown.querySelector('.dropdown__trigger');

const content = dropdown.querySelector('.dropdown__content');


// Add event litener
// When we do right click by mouse
trigger.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  // If `dropdaown` contains `dropdown--active` among its classes:
  dropdown.classList.toggle('dropdown--active');
});
