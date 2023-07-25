import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import MyAvatarV3 from "../3D-Components/MyAvatarV3";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    min-height: 100vh;
    scroll-snap-align: start;
    margin-top: 80px;
  }
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding-left: 20px;
  margin-bottom: 60px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 60px;

  @media only screen and (max-width: 768px) {
    font-size: 38px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 1; 

  @media only screen and (max-width: 768px) {
    display: none;
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

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const AboutPagePersonal = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Title>Beyond Software Development</Title>
          <SubHeadLine>
            <Line src="./img/line.png" />
            <Subtitle>Personal Insights</Subtitle>
          </SubHeadLine>
          <Desc>
            On a personal note, I am a calm and easygoing individual with a curious and
            creative mind.  I find great joy in exploring new things and expanding my
            knowledge through reading and various experiences. I'm a big fan of the arts,
             especially live music, and I enjoy playing the guitar myself.
            <br/>
            <br/>
            I have a long history of competing in sports at a high level, so I like to keep active. 
            I have always been drawn to two-wheelers, and nowadays, I enjoy in 
            traveling on motorcycle and track driving as my favorite pastimes.
            </Desc>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <MyAvatarV3 />
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default AboutPagePersonal