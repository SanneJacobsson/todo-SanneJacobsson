import { addToList } from "../functions/addTask";
import { createHtml } from "../functions/createHtml";
import "./../scss/style.scss";
import { todos } from "./todoLists";

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

// function getTodoLS(taskFromUser) {
//   const taskFromUser = JSON.parse(localStorage.getItem("todos") || "[]");
// }
// getTodoLS(taskFromUser);

// function saveTodoLS(todos) {
//   localStorage.setItem("todos", JSON.stringify(todos));
// }
createHtml(todos);
