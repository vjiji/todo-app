import { useState } from "react";
import Header from "./components/layout/Header";
import AddTodo from "./components/features/todo/AddTodo";
import RenderTodos from "./components/features/todo/RenderTodos";
import { isNonEmptyText } from "./utils/isNonEmptyText";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = () => {
    if (!(isNonEmptyText(title) && isNonEmptyText(content))) {
      window.alert("제목과 내용을 모두 작성해주세요!");
      return;
    }
    setTodos([
      ...todos,
      { id: String(todos.length), title, content, completed: false },
    ]);
    setTitle("");
    setContent("");
  };

  const completeTodo = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (targetId) => {
    setTodos(todos.filter(({ id }) => id !== targetId));
  };

  return (
    <div className="app-container">
      <Header />
      <AddTodo
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        addTodo={addTodo}
      />
      <hr />
      <RenderTodos
        todos={todos.filter(({ completed }) => !completed)}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <RenderTodos
        isCompleted
        todos={todos.filter(({ completed }) => completed)}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
