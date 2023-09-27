import styled from "styled-components";
import NavMenu from "../menu/NavMenu";
import Logo from "./Logo";
// import DarkModeToggle from "../ui/DarkModeToggle";

const StyledHeader = styled.header`
  /* background-color: var(--color-grey-900); */
  background: transparent;
  padding: 0 6rem;
  max-height: 12rem;
  height: 11.12rem;
  width: 100%;
  z-index: 100;
  top: 0;
  right: 0;
  position: fixed;
  /* border-bottom: 1px solid var(--color-grey-100); */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <StyledHeader>
      {/* <div><DarkModeToggle /></div> */}
      <div className=" basis-1/6">
        <Logo />
      </div>
      <div className=" basis-1/6 flex justify-end">
        <NavMenu />
      </div>
    </StyledHeader>
  );
};

export default Header;
