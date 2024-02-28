import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, updateTodos } from "../../../../redux/modules/todos";
import { useNavigate } from "react-router-dom";

export default function useRenderTodos() {
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

  const handleCardDetailButtonClick = (e) => {
    navigate(`/todo/${e.currentTarget.id}`);
  };

  return {
    todos,
    handleUpdateTodoButtonClick,
    handleDeleteTodoButtonClick,
    handleCardDetailButtonClick,
  };
}
