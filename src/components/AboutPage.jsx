import React from "react";
import styled from "styled-components"
import AboutPageWho from "./Sections/AboutPageWho"
import AboutPageSkills from "./Sections/AboutPageSkills"
import AboutPagePersonal from "./Sections/AboutPagePersonal"

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpg");
  &::-webkit-scrollbar{
    display: none;
  }

  @media only screen and (max-width: 768px) {
    scroll-snap-type: none;
    scroll-snap-align: none;
  }
`;

const AboutPage = () => {
    return (
        <Container>
            <AboutPageWho />
            <AboutPageSkills />
            <AboutPagePersonal />
        </Container>
    )
}

export default AboutPage