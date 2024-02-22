import React from "react";
import Todo from "./Todo";

const Todos = ({ category, todos, completeTodo, deleteTodo }) => {
  return (
    <>
      <p>{category}</p>
      {todos.map((todo) => (
        <Todo
          className={"card"}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Todos;
