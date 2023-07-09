import React from "react";
import styled from "styled-components"
import AboutPageWho from "./Sections/AboutPageWho"
import AboutPageSkills from "./Sections/AboutPageSkills"

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
`;

const AboutPage = () => {
    return (
        <Container>
            <AboutPageWho />
            <AboutPageSkills />
        </Container>
    )
}

export default AboutPage