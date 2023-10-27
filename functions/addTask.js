import { todos } from "../js/todoLists";
import { Task } from "../models/Task";
import { createHtml } from "./createHtml";

export function addToList(e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const newTask = new Task(userInput, false);

  if (userInput === "") {
    return;
  }

  todos.push(newTask);
  createHtml(todos);

  document.getElementById("userInput").value = "";
}
