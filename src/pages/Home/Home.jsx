import { useState } from "react";
import AddTodo from "../../components/features/todo/AddTodo";
import RenderTodos from "../../components/features/todo/RenderTodos";
import { useDispatch, useSelector } from "react-redux";
import { addNum } from "../../redux/modules/counter";

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
