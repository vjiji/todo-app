import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <p>To Do List</p>
        <p>React</p>
      </div>
      <div className="add-card__content">
        <input className="add-card__input"></input>
        <input className="add-card__input"></input>
        <button className="add-card__button">추가하기</button>
      </div>
      {/* Todo-list */}
      <p>Working</p>
      <div className="card">
        <p>제목</p>
        <p>내용</p>
        <button>완료</button>
        <button>삭제</button>
      </div>
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
}

export default App;
