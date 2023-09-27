import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
import styled from "styled-components";
import Header from "../header/Header";

// const StyledAppLayout = styled.div`
//   /* display: grid;
//   grid-template-columns: 26rem 1fr;
//   grid-template-rows: auto 1fr; */
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100vh;
// `;

const Main = styled.main`
  /* background-color: var(--color-grey-50); */
  background: linear-gradient(270deg, #ccf381 67%, #4831d4 33%);
  min-height: 100vh;
  width: 100%;
  outline: none;
  display: block;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 6rem;
  padding-bottom: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-right: 6rem;
`;

function AppLayout() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
}

export default AppLayout;
