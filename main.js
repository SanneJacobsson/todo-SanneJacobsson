import "./style.css";

const userInput = document.getElementById("userInput").value;

const todo = ["Tvätta", "Dammsuga", "Diska"];

function createHtml(todo) {
  const todoList = document.getElementById("todo");
  todoList.innerHTML = "";

  for (let i = 0; i < todo.length; i++) {
    const listItem = document.createElement("div");
    listItem.id = "listItem";
    const checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");
    checkBox.id = "task";
    const pTag = document.createElement("p");
    const removeButton = document.createElement("button");

    pTag.innerHTML = todo[i];
    removeButton.innerHTML = "Remove";

    listItem.appendChild(checkBox);
    listItem.appendChild(pTag);
    listItem.appendChild(removeButton);
    todoList.appendChild(listItem);
  }
}

createHtml(todo);
