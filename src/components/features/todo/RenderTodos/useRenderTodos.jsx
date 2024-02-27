import { useSelector } from "react-redux";

export const useRenderTodos = ({ isCompleted, setTodos }) => {
  const { todos } = useSelector((state) => state.todos);

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
    todos: todos.filter(({ completed }) =>
      isCompleted ? completed : !completed
    ),
    handleUpdateTodoButtonClick,
    handleDeleteTodoButtonClick,
  };
};
