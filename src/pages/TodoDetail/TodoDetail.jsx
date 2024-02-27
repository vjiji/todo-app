import { styled } from "styled-components";
import useTodoDetail from "./useTodoDetail";

const TodoDetail = () => {
  const { todo, handleButtonClick } = useTodoDetail();

  return (
    <Container>
      <Head>
        <p>id: {todo.id}</p>
        <button onClick={handleButtonClick}>뒤로가기</button>
      </Head>
      <Content>
        <Title>{todo.title}</Title>
        <p>{todo.content}</p>
      </Content>
      <Status status={todo.completed}>
        {todo.completed ? "완료" : "진행 중"}
      </Status>
    </Container>
  );
};

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

const Head = styled.div`
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

const Status = styled.p`
  color: ${({ status }) => (status ? "blue" : "red")};
`;

export default TodoDetail;
