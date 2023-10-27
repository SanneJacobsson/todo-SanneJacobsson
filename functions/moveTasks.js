import { tasksDone, todos } from "../js/todoLists";
import { Task } from "../models/Task";
import { TaskDone } from "../models/TaskDone";
import { createHtml, createHtmlDone } from "./createHtml";

//flytta till "done"
export function moveTask(i) {
  let doneTask = new TaskDone(i.task, true);
  tasksDone.push(doneTask);
  createHtmlDone(tasksDone);
  console.log(doneTask);
}

//ta bort tasken som flyttats ur "to do"
export function moveTaskSplice(i) {
  todos.splice(i, 1);
  createHtml(todos);
}
//flytta tillbaka till "to do"
export function moveTaskBack(i) {
  let reverseDoneTask = new Task(i.taskDone, false);
  todos.push(reverseDoneTask);
  createHtml(todos);
}

//ta bort det som flyttats tillbaka ur "done"
export function moveTaskBackSplice(i) {
  tasksDone.splice(i, 1);
  createHtmlDone(tasksDone);
}
