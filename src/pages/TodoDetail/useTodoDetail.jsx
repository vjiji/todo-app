import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function useTodoDetail() {
  const { todos } = useSelector((state) => state.todos);
  const currentId = useParams().id;
  const navigate = useNavigate();

  const todo = todos.filter(({ id }) => id === currentId)[0];
  const handleButtonClick = () => {
    navigate("/");
  };

  return { todo, handleButtonClick };
}
