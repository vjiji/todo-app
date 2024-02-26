import { TodoCard } from "../TodoCard";
import { useRenderTodos } from "./useRenderTodos";

export const RenderTodos = ({ isCompleted, todos, setTodos }) => {
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
