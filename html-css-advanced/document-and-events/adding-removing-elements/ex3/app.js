'use strict';

/*
Algo:
- Select element 
- Add event listener
  - Create new element
  - Add text to new element
  - Add new element to the list
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

  // Create new element
  const item = document.createElement('li');

  // Add text to new element
  item.textContent = 'New';

  // Add new element to the list
  list.append(item);

  // Cleanup form
  form.reset();
});
