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
  isChecked;

  constructor(taskDone) {
    this.taskDone = taskDone;
    this.isChecked = true;
  }
}

const t1 = new Task("Tvätta");
const t2 = new Task("Dammsuga");
const t3 = new Task("Diska");

let todos = [t1, t2, t3];
let tasksDone = [];

//Sortera lista alfabetiskt

const sortButton = document.getElementById("sort");
sortButton.addEventListener("click", () => {
  todos.sort(function (a, b) {
    let x = a.task.toLowerCase();
    let y = b.task.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  createHtml(todos);
});

//lägg till ny task i "to do""
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addToList);

function addToList(e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const newTask = new Task(userInput);

  if (userInput === "") {
    return;
  }

  todos.push(newTask);
  createHtml(todos);

  localStorage.setItem("newTask", JSON.stringify(newTask));
}

//skapa html för "to do" lista
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
      moveTaskSplice(i);
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
    checkBoxDone.setAttribute("onclick", "checked");
    const pTagDone = document.createElement("p");
    const removeButtonDone = document.createElement("button");

    pTagDone.innerHTML = tasksDone[i].taskDone;
    removeButtonDone.innerHTML = "Remove";

    const taskValueDone = tasksDone[i];

    checkBoxDone.addEventListener("change", () => {
      moveTaskBack(taskValueDone);
      moveTaskBackSplice(i);
    });

    listDoneItem.appendChild(checkBoxDone);
    listDoneItem.appendChild(pTagDone);
    listDoneItem.appendChild(removeButtonDone);
    taskDoneList.appendChild(listDoneItem);
  }
}

//flytta till "done"
function moveTask(i) {
  let doneTask = new TaskDone(i.task);
  tasksDone.push(doneTask);
  createHtmlDone(tasksDone);
  console.log(doneTask);
}

//ta bort tasken som flyttats ur "to do"
function moveTaskSplice(i) {
  todos.splice(i, 1);
  createHtml(todos);
}
//flytta tillbaka till "to do"
function moveTaskBack(i) {
  let reverseDoneTask = new Task(i.taskDone);
  todos.push(reverseDoneTask);
  createHtml(todos);
}

//ta bort det som flyttats tillbaka ur "done"
function moveTaskBackSplice(i) {
  tasksDone.splice(i, 1);
  createHtmlDone(tasksDone);
}

//ta bort från lista
function deleteTask(i) {
  todos.splice(i, 1);
  createHtml(todos);
}

const taskFromUser = JSON.parse(localStorage.getItem("newTask") || "[]");
createHtml(todos, taskFromUser);
