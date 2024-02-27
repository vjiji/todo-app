import TodoCard from "../TodoCard";
import { useRenderTodos } from "./useRenderTodos";

const RenderTodos = ({ isCompleted }) => {
  const {
    title,
    todos,
    handleUpdateTodoButtonClick,
    handleDeleteTodoButtonClick,
    handleTodoCardClick,
  } = useRenderTodos({
    isCompleted,
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
        {todos.map((todo) => (
          <TodoCard
            key={todo.title + todo.id}
            className={`card-list__card ${
              isCompleted && "card-list__card--completed"
            }`}
            todo={todo}
            handleUpdateTodoButtonClick={handleUpdateTodoButtonClick}
            handleDeleteTodoButtonClick={handleDeleteTodoButtonClick}
            handleTodoCardClick={handleTodoCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderTodos;
