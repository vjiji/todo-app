import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <p>To Do List</p>
      <p>React</p>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;
