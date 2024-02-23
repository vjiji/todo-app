import React, { useState } from "react";
import "./App.css";
import TextInput from "./components/common/TextInput";
import RenderTodos from "./components/features/todo/RenderTodos";
import ActionButton from "./components/common/ActionButton";
import { isNonEmptyText } from "./utils/isNonEmptyText";

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
        <ActionButton
          className={"add-card__button"}
          onClick={addTodo}
          text="추가하기"
        />
      </div>
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
