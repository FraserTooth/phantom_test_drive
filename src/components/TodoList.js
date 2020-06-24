export default function TodoList(list) {
  const itemComponent = (item) => {
    `
    <div data-phantom="${item}" id="todo-${item.id}">
      <h1>${item.id}</h1>
      <p>${item.text}</p>
      <p>${item.completed}</p>
  	</div>
    `;
  };

  return `
    <h1>Todo List</h1>
    <div data-phantom="${list} id="todo-list">
      ${list.map(itemComponent)}
	  </div>
  `;
}
