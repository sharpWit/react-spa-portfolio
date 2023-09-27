import styled from "styled-components";
import DiscSection from "../features/home-page/DiscSection";
import PictureSection from "../features/home-page/PictureSection";
// import BackgroundImage from "../features/home-page/BackgroundImage";

const StyledTitle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Lalezar&display=swap");

  svg {
    font-family: "Lalezar", sans-serif;
    width: 100%;
    height: 100%;
  }
  svg text {
    animation: stroke 5s infinite alternate;
    stroke-width: 2;
    stroke: #4831d4;
    font-size: 100px;
  }
  @keyframes stroke {
    0% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba(79, 49, 212, 1);
      stroke-dashoffset: 25%;
      stroke-dasharray: 0 50%;
      stroke-width: 2;
    }
    70% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba(79, 49, 212, 1);
    }
    80% {
      fill: rgba(72, 138, 204, 0);
      stroke: rgba(79, 49, 212, 1);
      stroke-width: 3;
    }
    100% {
      fill: rgba(79, 49, 212, 1);
      stroke: rgba(54, 95, 160, 0);
      stroke-dashoffset: -25%;
      stroke-dasharray: 50% 0;
      stroke-width: 3px;
    }
  }
`;

const HomePage = () => {
  return (
    <>
      {/* <BackgroundImage /> */}
      <StyledTitle className=" w-[34rem] mt-3 mr-3 mb-6 self-start">
        <svg>
          <text x="50%" y="50%" dy=".35em" text-anchor="middle">
            سعید خسروی
          </text>
        </svg>
      </StyledTitle>
      <section className=" flex justify-between gap-6 w-full">
        <DiscSection />
        <PictureSection />
      </section>
    </>
  );
};

export default HomePage;
