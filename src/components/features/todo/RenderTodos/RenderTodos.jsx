import styled from "styled-components";
import TodoCard from "../TodoCard";
import useRenderTodos from "./useRenderTodos";

export default function RenderTodos({ isCompleted }) {
  const {
    todos,
    handleUpdateTodoButtonClick,
    handleDeleteTodoButtonClick,
    handleCardDetailButtonClick,
  } = useRenderTodos();

  const title = isCompleted ? "Done" : "Working";

  const filteredTodos = todos.filter(({ completed }) =>
    isCompleted ? completed : !completed
  );

  return (
    <Container $isCompleted={isCompleted}>
      <p>{title}</p>
      <CardBox>
        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.title + todo.id}
            todo={todo}
            handleUpdateTodoButtonClick={handleUpdateTodoButtonClick}
            handleDeleteTodoButtonClick={handleDeleteTodoButtonClick}
            handleCardDetailButtonClick={handleCardDetailButtonClick}
          />
        ))}
      </CardBox>
    </Container>
  );
}

const Container = styled.div`
  min-height: 190px;
  margin: 0 10px;

  & > p {
    color: ${({ $isCompleted }) => ($isCompleted ? "blue" : "red")};
    font-weight: 600;
  }
`;

const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
