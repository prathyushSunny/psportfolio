let todoItemsContainer = document.getElementById("todoItemsContainer");
let save = document.getElementById('saveBtn');
let todoList = [];

loadToDoList();

function loadToDoList() {
    if (localStorage.getItem("todoList") === null) {
        return;
    } else {
        todoList = JSON.parse(localStorage.getItem("todoList"));
        console.log(todoList);
        for (let todo of todoList) {
            console.log(todo);
            createAndAppendTodo(todo);
        }
    }
}


let addButton = document.getElementById('addTodoButton');
addButton.onclick = function() {
    let inputTask = document.getElementById('todoUserInput');
    console.log(inputTask);
    if (inputTask.value == "") {
        alert("Enter a task to proceed!");
    } else {
        if (todoList.length >= 1) {
            let newObject = {};
            newObject["text"] = inputTask.value;
            newObject["uniqueNo"] = todoList[todoList.length - 1].uniqueNo + 1;
            newObject["isChecked"] = false;
            todoList.push(newObject);
            createAndAppendTodo(todoList[todoList.length - 1])
            inputTask.value = "";
        } else {
            let newObject = {};
            newObject["text"] = inputTask.value;
            newObject["uniqueNo"] = 0;
            newObject["isChecked"] = false;
            todoList.push(newObject);
            createAndAppendTodo(todoList[0]);
            inputTask.value = "";
        }
    }
    console.log(todoList)
}

save.onclick = function() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}

function deleteTodo(todoElementId, uniqueNo) {
    console.log(todoElementId);
    let liElement = document.getElementById(todoElementId);
    todoItemsContainer.removeChild(liElement);
    todoItemIndex = todoList.findIndex(function(item) {
        if (item.uniqueNo === uniqueNo) {
            return true;
        } else {
            return false;
        }
    })
    console.log(todoItemIndex);
    todoList.splice(todoItemIndex, 1);
}

function createAndAppendTodo(todo) {
    let uniqueNo = todo.uniqueNo;
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    let todoElementId = "li" + uniqueNo.toString();
    todoElement.id = todoElementId;
    console.log(todoElement)
    todoItemsContainer.appendChild(todoElement);
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" + uniqueNo.toString();
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);
    let labelElement = document.createElement("label");
    labelElement.htmlFor = "checkboxInput" + uniqueNo.toString();
    let labelId = "labelElement" + uniqueNo.toString();
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    if (todo.isChecked === true) {
        labelElement.classList.add("striped");
    }
    labelContainer.appendChild(labelElement);
    inputElement.onclick = function(labelId) {
        labelElement.classList.toggle("striped");
        if (todo.isChecked === false) {
            todo.isChecked = true;
        } else {
            todo.isChecked = false;
        }
    }
    inputElement.checked = todo.isChecked;
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function() {
        deleteTodo(todoElementId, uniqueNo);
    }
    deleteIconContainer.appendChild(deleteIcon);

}