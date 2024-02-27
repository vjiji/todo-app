const READ_TODOS = "READ_TODOS";
const ADD_TODOS = "ADD_TODOS";

const readTodos = () => {
  return { type: READ_TODOS };
};

export const addTodos = (payload) => {
  return { type: ADD_TODOS, payload: payload };
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
          { ...action.payload, id: state.todos.length + 1 },
        ],
      };

    default:
      return state;
  }
};

export default todos;
