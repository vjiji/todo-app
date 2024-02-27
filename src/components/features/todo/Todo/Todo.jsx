import { useParams } from "react-router-dom";

const Todo = () => {
  const param = useParams();
  const todoId = param.id;
  return (
    <>
      <div>Todo</div>
      <p>{todoId}</p>
    </>
  );
};

export default Todo;
