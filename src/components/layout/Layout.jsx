import Header from "./Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export default function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
