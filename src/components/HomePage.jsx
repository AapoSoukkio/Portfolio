import React from "react";
import styled from "styled-components"
import HomePageAbout from "./Sections/HomePageAbout"
import HomePageContact from "./Sections/HomePageContact"
import HomePageLanding from "./Sections/HomePageLanding"
import HomePageProjects from "./Sections/HomePageProjects"

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
            <HomePageLanding />
            <HomePageAbout />
            <HomePageProjects />
            <HomePageContact />
        </Container>
    )
}

export default Home