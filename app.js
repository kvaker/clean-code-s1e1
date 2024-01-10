// Document is the DOM can be accessed in the console with document.window.
// Tree is from the top, html, body, p etc.
<<<<<<< HEAD
// Problem: User interaction does not provide the correct results.
// Solution: Add interactivity so the user can manage daily tasks.
// Break things down into smaller steps and take each step at a time.
// Event handling, user interaction is what starts the code execution.

const taskInput = document.getElementById('new-task'); // Add a new task.
const addButton = document.getElementsByTagName('button')[0]; // first button
const incompleteTaskHolder = document.getElementById('incompleteTasks'); // ul of #incompleteTasks
const completedTasksHolder = document.getElementById('completedTasks'); // completed-tasks
=======

// Problem: User interaction does not provide the correct results.
// Solution: Add interactivity so the user can manage daily tasks.
// Break things down into smaller steps and take each step at a time.


// Event handling, user interaction is what starts the code execution.

const taskInput = document.getElementById("new-task");// Add a new task.
const addButton = document.getElementsByTagName("button")[0];// first button
const incompleteTaskHolder = document.getElementById("incompleteTasks");// ul of #incompleteTasks
const completedTasksHolder = document.getElementById("completedTasks");// completed-tasks

>>>>>>> 51dc3e4 (fix: add space after '//' in comment)

// New task list item
const createNewTaskElement = function (taskString) {
    const listItem = document.createElement('li');

    // input (checkbox)
    const checkBox = document.createElement('input'); // checkbox
    // label
    const label = document.createElement('label'); // label
    // input (text)
    const editInput = document.createElement('input'); // text
    // button.edit
    const editButton = document.createElement('button'); // edit button

<<<<<<< HEAD
    // button.delete
    const deleteButton = document.createElement('button'); // delete button
    const deleteButtonImg = document.createElement('img'); // delete button image
=======
    // input (checkbox)
    let checkBox = document.createElement("input");// checkbx
    // label
    let label = document.createElement("label");// label
    // input (text)
    let editInput = document.createElement("input");// text
    // button.edit
    let editButton = document.createElement("button");// edit button

    // button.delete
    let deleteButton = document.createElement("button");// delete button
    let deleteButtonImg = document.createElement("img");// delete button image
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)

    label.innerText = taskString;
    label.className = 'task';

    // Each elements, needs appending
<<<<<<< HEAD
    checkBox.type = 'checkbox';
    editInput.type = 'text';
    editInput.className = 'task';

    editButton.innerText = 'Edit'; // innerText encodes special characters, HTML does not.
    editButton.className = 'edit';
=======
    checkBox.type = "checkbox";
    editInput.type = "text";
    editInput.className = "task";

    editButton.innerText = "Edit"; // innerText encodes special characters, HTML does not.
    editButton.className = "edit";
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)

    deleteButton.className = 'delete';
    deleteButtonImg.src = './remove.svg';
    deleteButton.appendChild(deleteButtonImg);

<<<<<<< HEAD
=======

>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
    // and appending.
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    return listItem;
};

const addTask = function () {
<<<<<<< HEAD
    console.log('Add Task...');
=======
    console.log("Add Task...");
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
    // Create a new list item with the text from the #new-task:
    if (!taskInput.value) return;
    const listItem = createNewTaskElement(taskInput.value);

    // Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);

<<<<<<< HEAD
    taskInput.value = '';
};
=======
    taskInput.value = "";

}

// Edit an existing task.
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)

// Edit an existing task.
const editTask = function () {
    console.log('Edit Task...');
    console.log(`Change 'edit' to 'save'`);
    const listItem = this.parentNode;

    const editInput = listItem.querySelector('input[type=text]');
    const label = listItem.querySelector('label');
    const editBtn = listItem.querySelector('.edit');
    const containsClass = listItem.classList.contains('editMode');
    // If class of the parent is .editmode

<<<<<<< HEAD
    if (containsClass) {
        // switch to .edit mode
=======
    let editInput = listItem.querySelector('input[type=text]');
    let label = listItem.querySelector("label");
    let editBtn = listItem.querySelector(".edit");
    let containsClass = listItem.classList.contains("editMode");
    // If class of the parent is .editmode
    if (containsClass) {

        // switch to .editmode
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
        // label becomes the inputs value.
        label.innerText = editInput.value;
        editBtn.innerText = 'Edit';
    } else {
        editInput.value = label.innerText;
        editBtn.innerText = 'Save';
    }

<<<<<<< HEAD
    // toggle .edit mode on the parent.
    listItem.classList.toggle('editMode');
};

// Delete task.
const deleteTask = function () {
    console.log('Delete Task...');
    const listItem = this.parentNode;
    const ul = listItem.parentNode;
=======
    // toggle .editmode on the parent.
    listItem.classList.toggle("editMode");
};


// Delete task.
const deleteTask = function () {
    console.log("Delete Task...");

    let listItem = this.parentNode;
    let ul = listItem.parentNode;
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
    // Remove the parent list item from the ul.
    ul.removeChild(listItem);
};

<<<<<<< HEAD
// Mark task completed
const taskCompleted = function () {
    console.log('Complete Task...');
    // Append the task list item to the #completed-tasks
    const listItem = this.parentNode;
}
=======
}


// Mark task completed
const taskCompleted = function () {
    console.log("Complete Task...");

    // Append the task list item to the #completed-tasks
    let listItem = this.parentNode;
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
};

const taskIncomplete = function () {
<<<<<<< HEAD
    console.log('Incomplete Task...');
    // Mark task as incomplete.
    // When the checkbox is unchecked
    // Append the task list item to the #incompleteTasks.
    const listItem = this.parentNode;
=======
    console.log("Incomplete Task...");
    // Mark task as incomplete.
    // When the checkbox is unchecked
    // Append the task list item to the #incompleteTasks.
    let listItem = this.parentNode;
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
};
}

<<<<<<< HEAD
//The glue to hold it all together.
const ajaxRequest = function () {
    console.log('AJAX Request');
};

// The glue to hold it all together.
=======
// The glue to hold it all together.


>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
// Set the click handler to the addTask function.
addButton.onclick = addTask;
addButton.addEventListener('click', addTask);
addButton.addEventListener('click', ajaxRequest);

const bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
<<<<<<< HEAD
    console.log('bind list item events');
    // select ListItems children
    const checkBox = taskListItem.querySelector('input[type=checkbox]');
    const editButton = taskListItem.querySelector('button.edit');
    const deleteButton = taskListItem.querySelector('button.delete');
=======
    console.log("bind list item events");
    // select ListItems children
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");

>>>>>>> 51dc3e4 (fix: add space after '//' in comment)

    // Bind editTask to edit button.
    editButton.onclick = editTask;
    // Bind deleteTask to delete button.
    deleteButton.onclick = deleteTask;
    // Bind taskCompleted to checkBoxEventHandler.
    checkBox.onchange = checkBoxEventHandler;
};
}

// cycle over incompleteTaskHolder ul list items
// for each list item
for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
<<<<<<< HEAD
    // bind events to list items children (tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

<<<<<<< HEAD
// cycle over completedTasksHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i++) {
    // bind events to list items children (tasksInCompleted)
=======

    // bind events to list items chldren(tasksCompleted)
    bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}




// cycle over completedTasksHolder ul list items
for (let i = 0; i < completedTasksHolder.children.length; i++) {
    // bind events to list items chldren(tasksIncompleted)
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

// Issues with usability don't get seen until they are in front of a human tester.
<<<<<<< HEAD
// prevent creation of empty tasks.
// Change edit to save when you are in edit mode.
=======

// prevent creation of empty tasks.

// Change edit to save when you are in edit mode.
>>>>>>> 51dc3e4 (fix: add space after '//' in comment)
