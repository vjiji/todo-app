import styled from "styled-components";
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
    <Container isCompleted={isCompleted}>
      <p>{title}</p>
      <CardBox>
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
      </CardBox>
    </Container>
  );
};

export default RenderTodos;

const Container = styled.div`
  min-height: 190px;
  margin: 0 10px;

  & > p {
    color: ${({ isCompleted }) => (isCompleted ? "blue" : "red")};
    font-weight: 600;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
