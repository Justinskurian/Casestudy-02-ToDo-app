var container = document.getElementById('todo-container');

let count = 0;
function complete() {
  return new Promise((resolve) => {
    if (count == 5) {
      resolve();
    }
  });
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    data.forEach(data => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('grid-item');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          count++;
        }

complete()
.then(() => alert('Congrats. 5 Tasks have been Successfully Completed'));
});

      todoItem.innerHTML = 
      `<h5>${data.title}</h5>
        <p> ${data.completed ? 'Completed' : 'Pending'}</p>`;
        todoItem.appendChild(checkbox);
      container.appendChild(todoItem);
    });
  })
  .catch(error => console.error('Error:', error));
