import TodoCard from "./TodoCard";

const RenderTodos = ({ isCompleted, todos, setTodos }) => {
  const title = isCompleted ? "Done" : "Working";

  const updateTodo = (targetId) => {
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
    <div className="card-list">
      <p
        className={`card-list__title ${
          isCompleted && "card-list__title--completed"
        }`}
      >
        {title}
      </p>
      <div className="card-list__card-wrap">
        {todos
          .filter(({ completed }) => (isCompleted ? completed : !completed))
          .map((todo) => (
            <TodoCard
              key={todo.title + todo.id}
              className={`card-list__card ${
                isCompleted && "card-list__card--completed"
              }`}
              todo={todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default RenderTodos;
