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

// To know exact elemen't dimentions, we use `clientHeight`, while it isn't rolledup
const initialHeight = content.clientHeight;

// Set inline styles; element is hidden by default:
// For `content` add its property `style` to set styles:
// `height` is css property we add to js `style` property; `0` is when we switch off element
content.style.height = '0';

// Add event litener
// When we do right click by mouse
trigger.addEventListener('contextmenu', (event) => {
  event.preventDefault();

  // If `dropdaown` contains `dropdown--active` among its classes:
  if (dropdown.classList.contains('dropdown--active')) {
    // If dropdown is active, we close it
    content.style.height = '0';

    dropdown.classList.remove('dropdown--active');
  } else {
    // If it's closed and is being opened, we se its initial height 
    content.style.height = `${initialHeight}px`;

    dropdown.classList.add('dropdown--active');
  }
});


// Experiments:
// dropdown.classList.toggle('dropdown--active');

// // works the same a above
// if (dropdown.classList.contains('dropdown--active')) {
//   dropdown.classList.remove('dropdown--active');
// } else {
//   dropdown.classList.add('dropdown--active');
// }
