import styled from "styled-components";
import DarkModeToggle from "../ui/DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-start;
`;

const Header = () => {
  return (
    <StyledHeader>
      <DarkModeToggle />
    </StyledHeader>
  );
};

export default Header;