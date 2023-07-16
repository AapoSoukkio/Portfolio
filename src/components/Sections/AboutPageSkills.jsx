import React from "react";
import styled from "styled-components";
import SkillBar from "./SkillBar"; 

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: auto; /* Remove fixed height on mobile */
    padding: 20px; /* Add some padding on mobile */
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 50px;

  @media only screen and (max-width: 768px) {
    /* display: none; */
    flex: 1;
    align-items: center;
    padding-top: 260px; 
    padding-bottom: 100px; 
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const SubHeadLine = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const AboutPageSkills = () => {
  return (
    <Section id="section2"> 
      <Container>
        <Left>
          <SkillBar />
        </Left>
        <Right>
          <Title>My skillset</Title>
          <SubHeadLine>
            <Line src="./img/line.png" />
            <Subtitle>Skills and strengths</Subtitle>
          </SubHeadLine>
            <Desc>
                When working, I'm a logical thinker with the ability to grasp the broader scope.
                I find satisfaction in applying my problem-solving skills to overcome challenges.
                <br/>
                <br/>
                I possess strong team working skills and effective communication abilities.
                I'm all into open and honest communication, creating a positive and productive team atmosphere. 
                <br/>
                <br/>
                As a programmer, my strengths lie in object-oriented languages,
                working with datasets and modern web development techniques.
            </Desc>
        </Right>
      </Container>
    </Section>
  )
}

export default AboutPageSkills