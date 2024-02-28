import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function useTodoDetail() {
  const { todos } = useSelector((state) => state.todos);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };

  return { todos, handleButtonClick };
}
