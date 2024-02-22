import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: String(todos.length), title, content, completed: false },
    ]);
  };

  const completeTodo = (e) => {
    const currentTodoId = e.currentTarget.id;
    setTodos(
      todos.map((todo) => {
        if (todo.id === currentTodoId) {
          return { ...todo, completed: true };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (e) => {
    const currentTodoId = e.currentTarget.id;
    setTodos(todos.filter(({ id }) => id !== currentTodoId));
  };

  return (
    <div className="app-container">
      <div className="header">
        <p>To Do List</p>
        <p>React</p>
      </div>
      <div className="add-card__content">
        <div className="add-card__input-container-wrap">
          <div className="add-card__input-container">
            <p>제목</p>
            <TextInput
              className="add-card__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="add-card__input-container">
            <p>내용</p>
            <TextInput
              className="add-card__input"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <button className="add-card__button" onClick={addTodo}>
          추가하기
        </button>
      </div>
      <hr />
      <Todos
        todos={todos.filter(({ completed }) => !completed)}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
      <Todos
        isCompleted
        todos={todos.filter(({ completed }) => completed)}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default App;
