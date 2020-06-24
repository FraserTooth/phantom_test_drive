import "./styles/global.css";
import phantom from "@sidiousvic/phantom";
import reduxStore from "./store.js";
import TodoList from "./components/TodoList.js";

function phantomComponent() {
  const { slices, todos } = data();
  return `
    <input id="newItem"/>
    <button id="addItem">Add Item</button>
    ${TodoList(todos)}
  `;
}

export const { fire, data, launch } = phantom(reduxStore, phantomComponent);

launch(); // initial render

document.getElementById("addItem").addEventListener("click", addItem);

function addItem(e) {
  const { todos } = data();
  const lastId = todos[todos.length - 1].id;
  const text = document.getElementById("newItem").value;
  fire({
    type: "ADD_TODO",
    text,
    id: lastId + 1,
  });
}
