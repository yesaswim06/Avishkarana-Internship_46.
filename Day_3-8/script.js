function addTask(){

    let input = document.getElementById("taskInput");

    let taskValue = input.value;

    // Empty Input Validation

    if(taskValue === ""){

        alert("Please enter a task");

        return;
    }

    // Create List Item

    let li = document.createElement("li");

    li.innerHTML = `
        ${taskValue}

        <button
        class="delete-btn"
        onclick="deleteTask(this)">
            Delete
        </button>
    `;

    // Add Task To List

    document
    .getElementById("taskList")
    .appendChild(li);

    // Clear Input

    input.value = "";

}

// Delete Task

function deleteTask(button){

    button.parentElement.remove();

}
