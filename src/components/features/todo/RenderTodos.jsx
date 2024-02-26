import TodoCard from "./TodoCard";

const useRenderTodos = ({ isCompleted, todos, setTodos }) => {
  const updateTodo = (e) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === e.currentTarget.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (e) => {
    setTodos(todos.filter(({ id }) => id !== e.currentTarget.id));
  };

  return {
    title: isCompleted ? "Done" : "Working",
    updateTodo,
    deleteTodo,
  };
};

const RenderTodos = ({ isCompleted, todos, setTodos }) => {
  const { title, updateTodo, deleteTodo } = useRenderTodos({
    isCompleted,
    todos,
    setTodos,
  });

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
