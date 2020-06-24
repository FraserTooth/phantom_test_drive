import { createStore } from "redux";

const data = {
  todos: [
    {
      id: 0,
      text: "Test",
      completed: false,
    },
  ],
};

function reducer(state = data, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
