import { saveTodoLS } from "./localStorage";
import { deleteDoneTask, deleteTask } from "./deleteTasks";
import {
  moveTask,
  moveTaskBack,
  moveTaskBackSplice,
  moveTaskSplice,
} from "./moveTasks";

export function createHtml(todos) {
  saveTodoLS(todos);
  const todoList = document.getElementById("todo");
  todoList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "checkbox");
    const pTag = document.createElement("p");
    const removeButton = document.createElement("button");

    pTag.innerHTML = todos[i].task;
    removeButton.innerHTML = "Delete";

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
export function createHtmlDone(tasksDone) {
  const taskDoneList = document.getElementById("taskDone");
  taskDoneList.innerHTML = "";

  for (let i = 0; i < tasksDone.length; i++) {
    const listDoneItem = document.createElement("div");
    listDoneItem.className = "listItem";
    const checkBoxDone = document.createElement("input");
    checkBoxDone.setAttribute("type", "checkbox");
    checkBoxDone.setAttribute("class", "checkbox");
    const pTagDone = document.createElement("p");
    const removeButtonDone = document.createElement("button");

    pTagDone.innerHTML = tasksDone[i].taskDone;
    removeButtonDone.innerHTML = "Delete";

    const taskValueDone = tasksDone[i];

    removeButtonDone.addEventListener("click", () => {
      deleteDoneTask(i);
    });

    checkBoxDone.addEventListener("change", () => {
      moveTaskBack(taskValueDone);
      moveTaskBackSplice(i);
    });

    listDoneItem.appendChild(checkBoxDone);
    listDoneItem.appendChild(pTagDone);
    listDoneItem.appendChild(removeButtonDone);
    taskDoneList.appendChild(listDoneItem);

    if (tasksDone[i].isChecked === true) {
      checkBoxDone.checked = true;
    }
  }
}
