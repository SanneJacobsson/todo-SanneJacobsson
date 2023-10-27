import { Task } from "../models/Task";
import { createHtml } from "./createHtml";
import { listFromLS } from "./localStorage";

export function addToList(e) {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value;
  const newTask = new Task(userInput, false);

  if (userInput === "") {
    return;
  }

  listFromLS.push(newTask);
  createHtml(listFromLS);

  document.getElementById("userInput").value = "";
}
