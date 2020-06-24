export default function TodoList(list) {
  console.log(list);
  const itemComponent = (item) => {
    return `
    <div data-phantom="todo-${item.id}" id="todo-${item.id}">
      <h1>${item.id}</h1>
      <p>${item.text}</p>
      <p>${item.completed}</p>
  	</div>
    `;
  };

  return `
    <h1>Todo List</h1>
    <div id="todo-list">
      ${list.map(itemComponent)}
	  </div>
  `;
}
