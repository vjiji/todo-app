import TodoCard from "./TodoCard";

const RenderTodos = ({ isCompleted, todos, completeTodo, deleteTodo }) => {
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
          <TodoCard
            key={todo.title + todo.id}
            className={`card-list__card ${
              isCompleted && "card-list__card--completed"
            }`}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderTodos;
