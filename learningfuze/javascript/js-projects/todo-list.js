// Project: To-Do List App
// Add, complete, and remove tasks. Use comments to explain your logic.
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', () => {
  if (taskInput.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    li.addEventListener('click', () => li.classList.toggle('completed'));
    li.addEventListener('dblclick', () => li.remove());
    taskList.appendChild(li);
    taskInput.value = '';
  }
});
