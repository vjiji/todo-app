import AddTodo from "../../components/features/todo/AddTodo";
import RenderTodos from "../../components/features/todo/RenderTodos";

const Home = () => {
  return (
    <>
      <AddTodo />
      <hr />
      <RenderTodos />
      <RenderTodos isCompleted />
    </>
  );
};

export default Home;
