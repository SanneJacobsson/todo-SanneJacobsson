import { listFromLS } from "./localStorage";
import { tasksDone } from "../js/todoLists";
import { createHtml, createHtmlDone } from "./createHtml";

export function deleteTask(i) {
  listFromLS.splice(i, 1);
  createHtml(listFromLS);
}

export function deleteDoneTask(i) {
  tasksDone.splice(i, 1);
  createHtmlDone(tasksDone);
}
