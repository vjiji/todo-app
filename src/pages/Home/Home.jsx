import { useState } from "react";
import AddTodo from "../../components/features/todo/AddTodo";
import RenderTodos from "../../components/features/todo/RenderTodos";

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <AddTodo todos={todos} setTodos={setTodos} />
      <hr />
      <RenderTodos todos={todos} setTodos={setTodos} />
      <RenderTodos isCompleted todos={todos} setTodos={setTodos} />
    </>
  );
};

export default Home;
