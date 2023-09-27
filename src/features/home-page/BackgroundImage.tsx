import styled from "styled-components";

const StyledBG = styled.svg`
  background-image: url("/backgrounds/HomePage-Elements.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 28rem;
  width: 32rem;
  outline: none;
  display: block;
  position: relative;
`;

const BackgroundImage = () => {
  return (
    <div>
      <StyledBG />
    </div>
  );
};

export default BackgroundImage;
