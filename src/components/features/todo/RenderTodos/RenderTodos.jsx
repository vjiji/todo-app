import TodoCard from "../TodoCard";
import { useRenderTodos } from "./useRenderTodos";

const RenderTodos = ({ isCompleted }) => {
  const {
    title,
    todos,
    handleUpdateTodoButtonClick,
    handleDeleteTodoButtonClick,
    handleCardDetailButtonClick,
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
            handleCardDetailButtonClick={handleCardDetailButtonClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RenderTodos;
