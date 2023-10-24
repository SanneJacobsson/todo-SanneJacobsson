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
    this.taskDone = taskDone;
  }
}

const t1 = new Task("Tvätta");
const t2 = new Task("Dammsuga");
const t3 = new Task("Diska");

let todos = [t1, t2, t3];
let tasksDone = [];

//lägg till ny task i lista
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addToList);

function addToList(e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const newTask = new Task(userInput);
  todos.push(newTask);
  createHtml(todos);
}

//skapa html för todo-lista
function createHtml(todos) {
  const todoList = document.getElementById("todo");
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    const pTag = document.createElement("p");
    const removeButton = document.createElement("button");

    pTag.innerHTML = todos[i].task;
    removeButton.innerHTML = "Remove";

    const taskValue = todos[i];

    removeButton.addEventListener("click", () => {
      deleteTask(i);
    });

    checkBox.addEventListener("change", () => {
      moveTask(taskValue);
    });

    listItem.appendChild(checkBox);
    listItem.appendChild(pTag);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
  }
}

//skapa html för "done" lista
function createHtmlDone(tasksDone) {
  const taskDoneList = document.getElementById("taskDone");
  taskDoneList.innerHTML = "";

  for (let i = 0; i < tasksDone.length; i++) {
    const listDoneItem = document.createElement("div");
    listDoneItem.className = "listItem";
    const checkBoxDone = document.createElement("input");
    checkBoxDone.setAttribute("type", "checkbox");
    const pTagDone = document.createElement("p");
    const removeButtonDone = document.createElement("button");

    pTagDone.innerHTML = tasksDone[i].taskDone;
    removeButtonDone.innerHTML = "Remove";

    listDoneItem.appendChild(checkBoxDone);
    listDoneItem.appendChild(pTagDone);
    listDoneItem.appendChild(removeButtonDone);
    taskDoneList.appendChild(listDoneItem);
  }
}

//flytta till "done lista"
function moveTask(i) {
  let doneTask = new TaskDone(i.task);
  tasksDone.push(doneTask);
  createHtmlDone(tasksDone);
  console.log(doneTask);
  todos.splice(i, 1);
  createHtml(todos);
}

//ta bort från lista
function deleteTask(i) {
  todos.splice(i, 1);
  createHtml(todos);
}

createHtml(todos);
