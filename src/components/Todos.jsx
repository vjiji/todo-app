import React from "react";

const Todos = ({ category, todos, completeTodo, deleteTodo }) => {
  return (
    <>
      <p>{category}</p>
      {todos.map(({ title, content, id }, i) => (
        <div className="card" key={title + i}>
          <p>{title}</p>
          <p>{content}</p>
          <button id={id} onClick={completeTodo}>
            완료
          </button>
          <button id={id} onClick={deleteTodo}>
            삭제
          </button>
        </div>
      ))}
    </>
  );
};

export default Todos;
