import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, updateTodos } from "../../../../redux/modules/todos";
import { useNavigate } from "react-router-dom";

export const useRenderTodos = ({ isCompleted }) => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdateTodoButtonClick = (e) => {
    const targetId = e.currentTarget.id;
    const targetTodo = todos.filter(({ id }) => id === targetId)[0];

    dispatch(updateTodos({ ...targetTodo, completed: !targetTodo.completed }));
  };

  const handleDeleteTodoButtonClick = (e) => {
    dispatch(deleteTodos(e.currentTarget.id));
  };

  const handleTodoCardClick = (id) => {
    navigate(`/todo/${id}`);
  };

  return {
    title: isCompleted ? "Done" : "Working",
    todos: todos.filter(({ completed }) =>
      isCompleted ? completed : !completed
    ),
    handleUpdateTodoButtonClick,
    handleDeleteTodoButtonClick,
    handleTodoCardClick,
  };
};
