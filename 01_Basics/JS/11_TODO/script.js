let todo_list = document.getElementById("todo-list");
let input_taskname = document.getElementById("taskname");
let input_assigned = document.getElementById("assigned");


let checkbox = document.createElement("input");
checkbox.type = 'checkbox';
checkbox.className = "todo-element";

let list_item = document.createElement("li");
list_item.appendChild(checkbox);
list_item.appendChild(document.createElement("label"));

let tasknumber = 0;

document.getElementById("add-task").addEventListener("click", function() {
    addTask(taskname.value);
})

document.getElementsByClassName("todo-element").forEach(e => e.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {

    }
}));


function addTask(name) {
    tasknumber++;
    list_item.lastChild.textContent = String(tasknumber) + " " + String(name);
    todo_list.innerHTML += list_item.outerHTML;
}