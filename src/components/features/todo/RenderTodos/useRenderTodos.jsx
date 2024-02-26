export const useRenderTodos = ({ isCompleted, todos, setTodos }) => {
  const handleUpdateTodoButtonClick = (e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === e.currentTarget.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodoButtonClick = (e) => {
    setTodos(todos.filter(({ id }) => id !== e.currentTarget.id));
  };

  return {
    title: isCompleted ? "Done" : "Working",
    handleUpdateTodoButtonClick,
    handleDeleteTodoButtonClick,
  };
};
