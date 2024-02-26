export const useRenderTodos = ({ isCompleted, todos, setTodos }) => {
  const updateTodo = (e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === e.currentTarget.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (e) => {
    setTodos(todos.filter(({ id }) => id !== e.currentTarget.id));
  };

  return {
    title: isCompleted ? "Done" : "Working",
    updateTodo,
    deleteTodo,
  };
};
