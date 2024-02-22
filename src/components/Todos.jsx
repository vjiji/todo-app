import React from "react";
import Todo from "./Todo";

const Todos = ({ isCompleted, todos, completeTodo, deleteTodo }) => {
  const title = isCompleted ? "Done" : "Working";

  return (
    <>
      <p>{title}</p>
      {todos.map((todo) => (
        <Todo
          key={todo.title + todo.id}
          className={"card"}
          todo={todo}
          completeTodo={isCompleted ? () => {} : completeTodo}
          deleteTodo={isCompleted ? () => {} : deleteTodo}
        />
      ))}
    </>
  );
};

export default Todos;
