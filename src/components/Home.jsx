import React from "react";
import styled from "styled-components"
import Navbar from "./Navbar";
import About from "./About"
import Contact from "./Contact"
import Landing from "./Landing"
import Projects from "./Projects"
import Portfolio from "./Portfolio"


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
            <Navbar />
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Portfolio />
        </Container>
    )
}

export default Home