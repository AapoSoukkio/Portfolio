import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import MyAvatarV4 from "../3D-Components/MyAvatarV4";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 177vh;
    scroll-snap-align: start;
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

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
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

const Subtitle2 = styled.h2`
  color: #da4ea2;
  padding-top: 30px;
  font-size: 20px;

  @media only screen and (max-width: 768px) {
    padding-top: 20px;
    font-size: 20px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
    font-size: 16px;
  }
`;

const AboutPageWho = () => {
  const isMobileDevice = window.innerWidth <= 768;
  return (
    <Section>
      <Container>
        <Left>
          <Title>Aapo Soukkio</Title>
          <SubHeadLine>
            <Line src="./img/line.png" />
            <Subtitle>Who I am</Subtitle>
          </SubHeadLine>
          <Desc>
          I'm 25- years old IT-engineer and software developer from Tampere, Finland.
          Currently, I work as a full-stack developer alongside highly skilled colleagues.
          What drives me is a commitment to clean code, ensuring security, and continuous learning.
            </Desc>
            <Subtitle2>Scroll down for more ↴</Subtitle2>
        </Left>
        <Right>
        <Canvas>
            {isMobileDevice ? (
              <>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <MyAvatarV4 />
              </>
            ) : (
              <>
                <OrbitControls enableZoom={false} enableRotate={false} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <MyAvatarV4 />
              </>
            )}
          </Canvas>
        </Right>
      </Container>
    </Section>
  )
}

export default AboutPageWho