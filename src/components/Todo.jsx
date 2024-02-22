import React from "react";

const Todo = ({ className, todo, completeTodo, deleteTodo }) => {
  const { id, title, content } = todo;
  return (
    <div className={className} key={title + id}>
      <p>{title}</p>
      <p>{content}</p>
      <button id={id} onClick={completeTodo}>
        완료
      </button>
      <button id={id} onClick={deleteTodo}>
        삭제
      </button>
    </div>
  );
};

export default Todo;
