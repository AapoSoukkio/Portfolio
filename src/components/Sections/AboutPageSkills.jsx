import React from "react";
import styled from "styled-components";
import SkillBar from "./SkillBar"; 

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 50px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Right = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-right: 20px;
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
                I value open and honest communication, creating a positive and productive team atmosphere. 
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