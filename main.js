import "./style.css";

class Task {
  task;
  isChecked;

  constructor(task) {
    this.task = task;
    this.isChecked = false;
  }
}

class TaskDone {
  taskDone;

  constructor(taskDone) {
    this.taskdone = taskDone;
  }
}

const t1 = new Task("Tvätta");
const t2 = new Task("Dammsuga");
const t3 = new Task("Diska");

let todo = [t1, t2, t3];
let taskDone = [];

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addToList);

function addToList(e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const newTask = new Task(userInput);
  todo.push(newTask);
  createHtml(todo);
}

function createHtml(todo) {
  const todoList = document.getElementById("todo");
  todoList.innerHTML = "";

  for (let i = 0; i < todo.length; i++) {
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    const pTag = document.createElement("p");
    const removeButton = document.createElement("button");

    pTag.innerHTML = todo[i].task;
    removeButton.innerHTML = "Remove";

    removeButton.addEventListener("click", () => {
      deleteTask(i);
    });

    checkBox.addEventListener("change", () => {
      moveTask(i);
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(pTag);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
  }
}

function createHtmlDone(taskDone) {
  const taskDoneList = document.getElementById("taskDone");
  //   taskDoneList.innerHTML = "";

  for (let i = 0; i < taskDone.length; i++) {
    const listDoneItem = document.createElement("div");
    listDoneItem.className = "listItem";
    const checkBoxDone = document.createElement("input");
    checkBoxDone.setAttribute("type", "checkbox");
    const pTagDone = document.createElement("p");
    const removeButtonDone = document.createElement("button");

    pTagDone.innerHTML = taskDone[i].task;
    removeButtonDone.innerHTML = "Remove";

    listDoneItem.appendChild(checkBoxDone);
    listDoneItem.appendChild(pTagDone);
    listDoneItem.appendChild(removeButtonDone);
    taskDoneList.appendChild(listDoneItem);
  }
}

function moveTask(i) {
  todo.splice(i, 1);
  createHtml(todo);
  let done = new TaskDone(todo[i].task);
  taskDone.push(done);
  createHtmlDone(taskDone);
}

function deleteTask(i) {
  todo.splice(i, 1);
  createHtml(todo);
}

createHtml(todo);
