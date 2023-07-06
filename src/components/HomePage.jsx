import React from "react";
import styled from "styled-components"
import About from "./Sections/About"
import Contact from "./Sections/Contact"
import Landing from "./Sections/Landing"
import Projects from "./Sections/Projects"

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

const Home = () => {
    return (
        <Container>
            <Landing />
            <About />
            <Projects />
            <Contact />
        </Container>
    )
}

export default Home