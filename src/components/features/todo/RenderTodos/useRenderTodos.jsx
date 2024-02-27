import { useDispatch, useSelector } from "react-redux";
import { updateTodos } from "../../../../redux/modules/todos";

export const useRenderTodos = ({ isCompleted, setTodos }) => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleUpdateTodoButtonClick = (e) => {
    const targetId = e.currentTarget.id;
    const targetTodo = todos.filter(({ id }) => id === targetId)[0];

    dispatch(updateTodos({ ...targetTodo, completed: !targetTodo.completed }));
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
