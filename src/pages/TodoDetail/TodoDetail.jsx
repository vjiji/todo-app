import { useParams } from "react-router-dom";

const TodoDetail = () => {
  const param = useParams();
  const todoId = param.id;
  return (
    <>
      <div>TodoDetail</div>
      <p>{todoId}</p>
    </>
  );
};

export default TodoDetail;
