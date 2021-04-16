//Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners(){
    //Add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
    // filter task event
    filter.addEventListener('keyup', filterTask);
}

//Add Task
function addTask(e) {
    if (taskInput.value === '' ){
        alert('Add a task');
    }

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // creat text node and append to li
    li.appendChild(document.createTextNode(taskInput.Value));
    // create new link element
    const link = document.createElement('a');
    //add class
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"></i>';
    //append link to li
    li.appendChild(link);

    //Store in LS
    StoreTaskInLocalStorage(taskInput.value);

    //Append li to ul
    taskList.appendChild(li);

    //clear input
    taskInput.value = ''; 

    e.preventDefault();
}

// Store Task
function StoreTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('taskss') === null){
        tasks = [];
    } else {
        task = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
}

//Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item') );
    {if(confirm('Are you Sure?')) {
    e.target.parentElement.parentElement.remove(); }
    }
     
}

//clear Task
function clearTasks() {
 //   taskList.innerHTML = '';

 while(taskList.firstChild){
     taskList.removeChild(taskList.firstChild)
 }

}

// Filter tasks
function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    }

    );
}