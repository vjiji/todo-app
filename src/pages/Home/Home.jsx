import AddTodo from "../../components/features/todo/AddTodo";
import RenderTodos from "../../components/features/todo/RenderTodos";

export default function Home() {
  return (
    <>
      <AddTodo />
      <hr />
      <RenderTodos />
      <RenderTodos isCompleted />
    </>
  );
}
