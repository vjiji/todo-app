const READ_TODOS = "READ_TODOS";

const readTodos = () => {
  return { type: READ_TODOS };
};

const initialState = {
  todos: [
    {
      id: "0",
      title: "test",
      content: "testContent",
      completed: "false",
    },
  ],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case READ_TODOS:
      return state;

    default:
      return state;
  }
};

export default todos;
