const container = document.getElementById('todo-container');

let completedCount = 0;

function checkCompletion() {
  return new Promise((resolve) => {
    if (completedCount >= 5) {
      resolve('Congrats. 5 Tasks have been Successfully Completed');
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
      checkbox.checked = data.completed;
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          completedCount++;
        } else {
          completedCount--;
        }
        checkCompletion().then(alertMessage => alert(alertMessage));
      });

      todoItem.innerHTML = `
        <h5>${data.title}</h5>
        <p>Status: ${data.completed ? 'Completed' : 'Pending'}</p>`;
        todoItem.appendChild(checkbox);
      container.appendChild(todoItem);
    });
  })
  .catch(error => console.error('Error:', error));
