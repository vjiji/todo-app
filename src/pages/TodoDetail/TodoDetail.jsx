import { styled } from "styled-components";
import useTodoDetail from "./useTodoDetail";
import ActionButton from "../../components/common/ActionButton";

export default function TodoDetail() {
  const { todo, handleButtonClick } = useTodoDetail();

  return (
    <Container>
      <TopSection>
        <p>id: {todo.id}</p>
        <ActionButton type="cancel" onClick={handleButtonClick}>
          뒤로가기
        </ActionButton>
      </TopSection>
      <Content>
        <Title>{todo.title}</Title>
        <p>{todo.content}</p>
      </Content>
      <Paragraph $isCompleted={todo.completed}>
        {todo.completed ? "Working" : "Done"}
      </Paragraph>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  margin: 60px auto;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 4px;
  color: #333;
  display: grid;
  grid-template-rows: 1fr auto 1fr;
  row-gap: 20px;
`;

const TopSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Content = styled.div`
  min-height: 200px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  color: ${({ $isCompleted }) => ($isCompleted ? "blue" : "red")};
`;
