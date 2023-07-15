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
  padding-left: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Right = styled.div`
  flex: 1; 
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
            traveling on motorcycle and engaging in track driving as my favorite pastimes.
            </Desc>
        </Left>
        <Right>
          <Canvas camere>
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