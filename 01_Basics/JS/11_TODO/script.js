let list_todo = document.getElementById("todo-list");
let input_taskname = document.getElementById("taskname");
let input_assigned = document.getElementById("assigned");
let list_completed = document.getElementById("completed-list")

let checkbox = document.createElement("input");
checkbox.type = 'checkbox';

let list_item = document.createElement("li");
list_item.appendChild(checkbox);
list_item.appendChild(document.createElement("label"));

let tasknumber = 0;

let isCompletedHidden = false;

document.body.addEventListener('click', e => {
    if (e.target.type == "checkbox") {
        if (e.target.checked) {
            completeTask(e.target.parentElement);
        }
        else {
            todoTask(e.target.parentElement);            
        }
    }
})

document.getElementById("completed").addEventListener("click", () => {
    if (isCompletedHidden) {
        list_completed.style.display = "none";
    }
    else {
        list_completed.style.display = "";
    }
    isCompletedHidden = !isCompletedHidden;
});

document.getElementById("add-task").addEventListener("click", () => {
    let task = {name: input_assigned.value, assigned: input_assigned.value, index: tasknumber}
    tasknumber++;
    addTask(task);
});

function addTask(task) {
    list_item.setAttribute("task-index", task.index)
    list_item.lastChild.textContent = String(task.index) + " " + String(task.name) + " " + String(task.assigned);
    list_todo.innerHTML += list_item.outerHTML;
}

function completeTask(element) {
    list_completed.append(element);
}

function todoTask (element) {
    list_todo.append(element);
}