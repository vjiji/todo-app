import { useState } from "react";
import Header from "./components/layout/Header";
import AddTodo from "./components/features/todo/AddTodo";
import RenderTodos from "./components/features/todo/RenderTodos";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="app-container">
      <Header />
      <AddTodo todos={todos} setTodos={setTodos} />
      <hr />
      <RenderTodos todos={todos} setTodos={setTodos} />
      <RenderTodos isCompleted todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
