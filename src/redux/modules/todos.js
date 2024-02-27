const ADD_TODOS = "ADD_TODOS";
const UPDATE_TODOS = "UPDATE_TODOS";
const DELETE_TODOS = "DELETE_TODOS";

export const addTodos = (todo) => {
  return { type: ADD_TODOS, payload: todo };
};

export const updateTodos = (todo) => {
  console.log(todo, "redux updateTodo action");
  return { type: UPDATE_TODOS, payload: todo };
};

export const deleteTodos = (todoId) => {
  console.log(todoId, "redux delete todo action");
  return { type: DELETE_TODOS, payload: todoId };
};

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        todos: [
          ...state.todos,
          { ...action.payload, id: String(state.todos.length + 1) },
        ],
      };

    case UPDATE_TODOS:
      return {
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload.id ? action.payload : todo
          ),
        ],
      };

    case DELETE_TODOS:
      return {
        todos: state.todos.filter(({ id }) => id !== action.payload),
      };

    default:
      return state;
  }
};

export default todos;
