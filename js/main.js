import { addToList } from "../functions/addTask";
import { createHtml } from "../functions/createHtml";
import "./../scss/style.scss";
import { listFromLS } from "../functions/localStorage";

const sortButton = document.getElementById("sort");

sortButton.addEventListener("click", () => {
  listFromLS.sort(function (a, b) {
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
  createHtml(listFromLS);
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", addToList);

createHtml(listFromLS);
