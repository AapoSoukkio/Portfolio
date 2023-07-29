import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import CV from "../../assets/CV Aapo Soukkio.pdf";
import { Link } from "react-router-dom";

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

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 54px;

  @media only screen and (max-width: 768px) {
    font-size: 40px;;
  }
`;

const Right = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

const WhatWeDo = styled.div`
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
    font-size: 18px;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Anchor = styled.a`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
` 

const HomePageCV = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={0.7}>
                <MeshDistortMaterial
                  color="#4e4bf0"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
          </Canvas>
        </Left>
        <Right>
          <Title>"Aapo has a remarkable talent for tackling complex problems."</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Consistency, Quality and Logical problem solving</Subtitle>
          </WhatWeDo>
          <Desc>Hands on attitude to get things done</Desc>
          <Anchor href={CV} download>
           Download CV
          </Anchor>
        </Right>
      </Container>
    </Section>
  )
}

export default HomePageCV