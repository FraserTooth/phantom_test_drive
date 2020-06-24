import "./styles/global.css";
import phantom from "@sidiousvic/phantom";
import reduxStore from "./store.js";
import TodoList from "./components/TodoList.js";

function phantomComponent() {
  const { todos } = data();
  return `
    <input id="newItem"/>
    <button id="addItem">Add Item</button>
    ${TodoList(todos)}
  `;
}

export const { fire, data, launch } = phantom(reduxStore, phantomComponent);

launch(); // initial render

document.getElementById("addItem").addEventListener("click", addItem);
document.addEventListener("click", completeItem);

function addItem(e) {
  const { todos } = data();
  const lastId = todos[todos.length - 1].id;
  const textBox = document.getElementById("newItem");
  fire({
    type: "ADD_TODO",
    text: textBox.value,
    id: lastId + 1,
  });
  textBox.value = "";
}

function completeItem(e) {
  const itemId = e.target.id;
  const parentId = e.target.parentElement ? e.target.parentElement.id : "";
  const regex = /todo-item-\d+/gm;
  if (itemId.match(regex)) {
    const id = parseInt(itemId.slice(10));
    fire({ type: "TOGGLE_TODO", id }); // fire an action to the store
  } else if (parentId.match(regex)) {
    const id = parseInt(parentId.slice(10));
    fire({ type: "TOGGLE_TODO", id });
  }
}
