import { useSelector } from "react-redux";

export const useRenderTodos = ({ isCompleted, todos, setTodos }) => {
  const test = useSelector((state) => state.todos);
  console.log(test);

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
