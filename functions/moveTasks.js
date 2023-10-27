import { listFromLS } from "./localStorage";
import { tasksDone } from "../js/todoLists";
import { Task } from "../models/Task";
import { TaskDone } from "../models/TaskDone";
import { createHtml, createHtmlDone } from "./createHtml";

export function moveTask(i) {
  let doneTask = new TaskDone(i.task, true);
  tasksDone.push(doneTask);
  createHtmlDone(tasksDone);
}
export function moveTaskSplice(i) {
  listFromLS.splice(i, 1);
  createHtml(listFromLS);
}
export function moveTaskBack(i) {
  let reverseDoneTask = new Task(i.taskDone, false);
  listFromLS.push(reverseDoneTask);
  createHtml(listFromLS);
}
export function moveTaskBackSplice(i) {
  tasksDone.splice(i, 1);
  createHtmlDone(tasksDone);
}
