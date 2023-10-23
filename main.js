import "./style.css";

const userInput = document.getElementById("userInput").value;

class Task {
  task;
  isRemoved;

  constructor(task) {
    this.task = task;
    this.isRemoved = false;
  }
}

const t1 = new Task("Tvätta");
const t2 = new Task("Dammsuga");
const t3 = new Task("Diska");

let todo = [t1, t2, t3];

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

    listItem.appendChild(checkBox);
    listItem.appendChild(pTag);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
  }
}

function deleteTask(i) {
  todo.splice(i, 1);
  createHtml(todo);
}

createHtml(todo);
