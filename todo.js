document.getElementById('add-task').addEventListener('click', function () {
    const taskText = document.getElementById('new-task').value;
    const taskDate = document.getElementById('task-date').value;
    const taskTime = document.getElementById('task-time').value; // Get task time
    const taskPriority = document.getElementById('task-priority').value; // Get task priority

    if (taskText === '' || taskDate === '' || taskTime === '') {
        alert('Please enter task details, date, and time.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.innerText = `${taskText} (Due: ${taskDate} at ${taskTime}, Priority: ${taskPriority})`;

    // Assign class based on priority for different text colors
    if (taskPriority === 'High') {
        taskSpan.classList.add('priority-high');
    } else if (taskPriority === 'Medium') {
        taskSpan.classList.add('priority-medium');
    } else {
        taskSpan.classList.add('priority-low');
    }

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.classList.add('edit');
    editButton.onclick = function () {
        editTask(listItem, taskText, taskDate, taskTime, taskPriority);
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

    // Clear inputs after adding task
    document.getElementById('new-task').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-time').value = '';
    document.getElementById('task-priority').value = 'Medium'; // Default back to medium
});

function editTask(listItem, oldTask, oldDate, oldTime, oldPriority) {
    const taskText = prompt('Edit your task:', oldTask);
    const taskDate = prompt('Edit the due date (YYYY-MM-DD):', oldDate);
    const taskTime = prompt('Edit the time (HH:MM):', oldTime);
    const taskPriority = prompt('Edit the priority (High, Medium, Low):', oldPriority);

    if (taskText === '' || taskDate === '' || taskTime === '') {
        alert('All fields are required.');
        return;
    }

    listItem.querySelector('span').innerText = `${taskText} (Due: ${taskDate} at ${taskTime}, Priority: ${taskPriority})`;

    // Update priority color
    const taskSpan = listItem.querySelector('span');
    taskSpan.classList.remove('priority-high', 'priority-medium', 'priority-low');

    if (taskPriority === 'High') {
        taskSpan.classList.add('priority-high');
    } else if (taskPriority === 'Medium') {
        taskSpan.classList.add('priority-medium');
    } else {
        taskSpan.classList.add('priority-low');
    }
}
