// script.js - Add your JavaScript here
// Example: Add a new item to the list when the button is clicked
const button = document.getElementById('myButton');
const list = document.getElementById('myList');

button.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'New item';
  list.appendChild(newItem);
});
