import { defaultTodos } from "../js/todoLists";

export function saveTodoLS(updatedList) {
  localStorage.setItem("todos", JSON.stringify(updatedList));
}

export const listFromLS = JSON.parse(
  localStorage.getItem("todos") || JSON.stringify(defaultTodos)
);
