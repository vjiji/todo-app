import React from "react";
import Todo from "./Todo";

const Todos = ({ isCompleted, todos, completeTodo, deleteTodo }) => {
  const title = isCompleted ? "Done" : "Working";

  return (
    <div className="card-list">
      <p
        className={`card-list__title ${
          isCompleted && "card-list__title--completed"
        }`}
      >
        {title}
      </p>
      <div className="card-list__card-wrap">
        {todos.map((todo) => (
          <Todo
            key={todo.title + todo.id}
            className={`card-list__card ${
              isCompleted && "card-list__card--completed"
            }`}
            todo={todo}
            completeTodo={isCompleted ? () => {} : completeTodo}
            deleteTodo={isCompleted ? () => {} : deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
