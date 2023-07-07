import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cube from "../3D-Components/Cube";

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
`;

const Title = styled.h1`
  font-size: 54px;
`;

const Right = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
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
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const ButtonLink = styled(Link)`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{fov:25, position:[5, 5, 5]}}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1}>
                <MeshDistortMaterial
                  // color="#220736"
                  color="#4e4bf0"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            {/* <Cube /> */}
          </Canvas>
        </Left>
        <Right>
          <Title>"Aapo is the person you wish you had on your team" </Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Consistency, Quality and Logical problem solving</Subtitle>
          </WhatWeDo>
          <Desc>Hands on attitude gets things done</Desc>
          <ButtonLink to="/portfolio">See my work</ButtonLink>
        </Right>
      </Container>
    </Section>
  )
}

export default About