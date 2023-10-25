import { tasksDone, todos } from "../js/todoLists";
import { createHtml, createHtmlDone } from "./createHtml";

export function deleteTask(i) {
  todos.splice(i, 1);
  createHtml(todos);
}

export function deleteDoneTask(i) {
  tasksDone.splice(i, 1);
  createHtmlDone(tasksDone);
}
