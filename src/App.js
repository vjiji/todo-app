import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/TextInput";

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
  console.log(todos);

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
      {/* Todo-list */}
      <p>Working</p>
      {todos.map(({ title, content, id }, i) => (
        <div className="card" key={title + i}>
          <p>{title}</p>
          <p>{content}</p>
          <button id={id} onClick={completeTodo}>
            완료
          </button>
          <button>삭제</button>
        </div>
      ))}

      <p>Done</p>
      <div className="card">
        <p>제목</p>
        <p>내용</p>
        <button>완료</button>
        <button>삭제</button>
      </div>
      {/* Todo-list */}
    </div>
  );
};

export default App;
