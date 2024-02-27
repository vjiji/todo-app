import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <p>To Do List</p>
      <p>React</p>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;
