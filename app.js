// Break things down into smaller steps and take each step at a time.
// Event handling, user interaction is what starts the code execution.

const taskInput = document.getElementById('new-task');// Add a new task.
const addButton = document.getElementsByTagName('button')[0];// first button
const incompleteTaskHolder = document.getElementById('incompleteTasks');// ul of #incompleteTasks
const completedTasksHolder = document.getElementById('completedTasks');// completed-tasks


// New task list item
const createNewTaskElement = function (taskString) {
    const listItem = document.createElement('li');

    // input (checkbox)
    const checkBox = document.createElement('input');// checkbx
    // label
    const label = document.createElement('label');// label
    // input (text)
    const editInput = document.createElement('input');// text
    // button.edit
    const editButton = document.createElement('button');// edit button

    // button.delete
    const deleteButton = document.createElement('button');// delete button
    const deleteButtonImg = document.createElement('img');// delete button image

    label.innerText = taskString;
    label.className = 'task';

    // Each elements, needs appending
    checkBox.type = 'checkbox';
    editInput.type = 'text';
    editInput.className = 'task';

    editButton.innerText = 'Edit'; // innerText encodes special characters, HTML does not.
    editButton.className = 'edit';

    deleteButton.className = 'delete';
    deleteButtonImg.src = './remove.svg';
    deleteButton.appendChild(deleteButtonImg);

@@ -53,7 +53,7 @@ const createNewTaskElement = function (taskString) {
    };

    const addTask = function () {
        console.log('Add Task...');
        // Create a new list item with the text from the #new-task:
        if (!taskInput.value) return;
        let listItem = createNewTaskElement(taskInput.value);
    @@ -62,40 +62,40 @@ const addTask = function () {
            incompleteTaskHolder.appendChild(listItem);
            bindTaskEvents(listItem, taskCompleted);

            taskInput.value = '';
        };

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
            if (containsClass) {

                // switch to .editmode
                // label becomes the inputs value.
                label.innerText = editInput.value;
                editBtn.innerText = 'Edit';
            } else {
                editInput.value = label.innerText;
                editBtn.innerText = 'Save';
            }

            // toggle .editmode on the parent.
            listItem.classList.toggle('editMode');
        };

// Delete task.
        const deleteTask = function () {
            console.log('Delete Task...');

            const listItem = this.parentNode;
            const ul = listItem.parentNode;
        @@ -106,7 +106,7 @@ const deleteTask = function () {

// Mark task completed
                const taskCompleted = function () {
                    console.log('Complete Task...');

                    // Append the task list item to the #completed-tasks
                    const listItem = this.parentNode;
                @@ -115,7 +115,7 @@ const taskCompleted = function () {
                    };

                    const taskIncomplete = function () {
                        console.log('Incomplete Task...');
                        // Mark task as incomplete.
                        // When the checkbox is unchecked
                        // Append the task list item to the #incompleteTasks.
                    @@ -125,22 +125,22 @@ const taskIncomplete = function () {
                        };

                        const ajaxRequest = function () {
                            console.log('AJAX Request');
                        };

// The glue to hold it all together.
// Set the click handler to the addTask function.
                        addButton.onclick = addTask;
                        addButton.addEventListener('click', addTask);
                        addButton.addEventListener('click', ajaxRequest);


                        const bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
                            console.log('bind list item events');
                            // select ListItems children
                            const checkBox = taskListItem.querySelector('input[type=checkbox]');
                            const editButton = taskListItem.querySelector('button.edit');
                            const deleteButton = taskListItem.querySelector('button.delete');

                            // Bind editTask to edit button.
                            editButton.onclick = editTask;
