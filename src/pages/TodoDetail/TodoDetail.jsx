import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const currentId = useParams().id;
  const { todos } = useSelector((state) => state.todos);
  const todo = todos.filter(({ id }) => id === currentId)[0];
  return (
    <>
      <div>TodoDetail</div>
      <p>{todo.id}</p>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
      <p>{todo.completed ? "완료" : "대기"}</p>
    </>
  );
};

export default TodoDetail;
