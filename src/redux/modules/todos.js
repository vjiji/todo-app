const READ_TODOS = "READ_TODOS";
const ADD_TODOS = "ADD_TODOS";
const UPDATE_TODOS = "UPDATE_TODOS";

export const addTodos = (payload) => {
  return { type: ADD_TODOS, payload: payload };
};

export const updateTodos = (payload) => {
  return { type: UPDATE_TODOS, payload: payload };
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

    default:
      return state;
  }
};

export default todos;
