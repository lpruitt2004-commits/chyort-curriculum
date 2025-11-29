// Assignment 2: DOM Interaction
// Add a new item to the list when the button is clicked.
const button = document.getElementById('addBtn');
const list = document.getElementById('itemList');

button.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = 'New item';
  list.appendChild(newItem);
});
