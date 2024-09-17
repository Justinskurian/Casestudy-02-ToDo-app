const container=document.getElementById('todo-container');

let count=0;
function complete(){
  return new Promise((resolve) => {
    if (count==5){
      resolve();
    }
  });
}

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    data.forEach(data => {
      const todo=document.createElement('div');
      todo.classList.add('grid-item');

      const checkbox=document.createElement('input');
      checkbox.type='checkbox';
      checkbox.addEventListener('change',() => {
        if(checkbox.checked){
          count++;
        }

complete()
.then(() => alert('Congrats. 5 Tasks have been Successfully Completed'));
});

      todo.innerHTML=`<h5>${data.title}</h5> <p>${data.completed ? 'Completed':'Pending'}</p>`;
      todo.appendChild(checkbox);
      container.appendChild(todo);
    });
  })
  .catch(error => console.error('Error:',error));
