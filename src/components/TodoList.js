export default function TodoList(list) {
  console.log(list);
  const itemComponent = (item) => {
    return `
    <div data-phantom="todo-${item.id}" id="todo-${
      item.id
    }" class="todo-list-item">
      <h2>Todo List Item ${item.id}</h2>
      <p>${item.text}</p>
      <p>${item.completed ? "✅" : "❎"}</p>
  	</div>
    `;
  };

  return `
    <h1>Todo List</h1>
    <div data-phantom="${list}" id="todo-list">
      ${list.map(itemComponent)}
	  </div>
  `;
}
