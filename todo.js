document.getElementById('add-task').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value;
    const taskDate = document.getElementById('task-date').value;

    if (taskText === '' || taskDate === '') {
        alert('Please enter both a task and a date.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.innerText = `${taskText} (Due: ${taskDate})`;

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = function () {
        editTask(listItem, taskText, taskDate);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };

    listItem.appendChild(taskSpan);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    document.getElementById('new-task').value = '';
    document.getElementById('task-date').value = '';
});

function editTask(listItem, oldTask, oldDate) {
    const taskText = prompt('Edit your task:', oldTask);
    const taskDate = prompt('Edit the due date (YYYY-MM-DD):', oldDate);

    if (taskText === '' || taskDate === '') {
        alert('Both fields are required.');
        return;
    }

    listItem.querySelector('span').innerText = `${taskText} (Due: ${taskDate})`;
}
