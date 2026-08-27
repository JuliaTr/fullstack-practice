'use strict';

/*
Algo:
- Select element 
- Add event listener
  - Eliminate standard browser behaviour
  - Add new element to the list
    - Add event handler to remove this element
  - Cleanup form
*/

// Select element 
const app = document.querySelector('.todo-app');
const list = app.querySelector('.todo-app__list');
const form = app.querySelector('.todo-app__form');

// Add event listener
form.addEventListener('submit', (event) => {
  // Eliminate standard browser behaviour
  event.preventDefault()

  // Add new element to the list
    // Add event handle as value in attribute `onclick` to emove element from parent element on click on it
  list.insertAdjacentHTML('beforeend', `
    <li>
      ${form.elements.todo.value}
      
      <button onclick="this.parentElement.remove()">
        x
      </button>
    </li>
  `);

  // Cleanup form
  form.reset();
});
