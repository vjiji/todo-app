import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = () => {
    setTodos([...todos, { title, content, completed: false }]);
  };

  return (
    <div className="app-container">
      <div className="header">
        <p>To Do List</p>
        <p>React</p>
      </div>
      <div className="add-card__content">
        <p>제목</p>
        <input
          className="add-card__input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p>내용</p>
        <input
          className="add-card__input"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="add-card__button" onClick={addTodo}>
          추가하기
        </button>
      </div>
      <hr />
      {/* Todo-list */}
      <p>Working</p>
      {todos.map((todo, i) => (
        <div className="card" key={todo + i}>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
          <button>완료</button>
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
