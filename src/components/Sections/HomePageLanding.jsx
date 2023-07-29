import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyAvatarV2 from "../3D-Components/MyAvatarV2";
import Typist from "react-typist";
import { Link } from "react-router-dom";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px;
  width: 100%;
  padding: 0 20px;
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
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 100%;
  padding-left: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 48px;
    text-align: center;
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
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const typingAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const typingStyles = css`
  &.typing {
    &::after {
      content: "";
      display: inline-block;
      vertical-align: bottom;
      width: 0;
      height: 1.1em;
      animation: ${typingAnimation} 3s steps(40) infinite;
    }
  }
`;

const Speak = styled.div`
  width: 215px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  right: 430px;
  color: black;
  font-size: 14px;
  font-weight: 340;
  overflow: hidden;
  opacity: ${props => (props.visible  ? "1" : "0")};

  ${typingStyles}

  @media only screen and (max-width: 768px) {
    top: 0;
    margin-right: 1px;
    left: 0;
    margin: auto;
    width: 170px;
    height: 65px;
    padding: 10px;
    border-radius: 10px;
    font-size: 11px;
  }
`;

const HomePageLanding = () => {
  const [visited, setVisited] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showSpeak, setShowSpeak] = useState(true);

  useEffect(() => {
    const typingDelay = setTimeout(() => {
      setIsTyping(true);
    }, 1000);

    return () => {
      clearTimeout(typingDelay);
    };
  }, []);

  useEffect(() => {
    if (isTyping) {
      const speakDelay = setTimeout(() => {
        setShowSpeak(false);
      }, 15000);

      return () => {
        clearTimeout(speakDelay);
      };
    }
  }, [isTyping]);

  useEffect(() => {
    setVisited(true);
  }, []);

  const isMobileDevice = window.innerWidth <= 768;

  return (
    <Section>
      <Container>
        <Left>
          <Title>Imaginative, ambitious programmer</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Aapo Soukkio</Subtitle>
          </WhatWeDo>
          <Desc>Development and Software-design</Desc>
          <ButtonLink to="/about">About Me</ButtonLink>
        </Left>
        <Right>
          {visited && isTyping && (
            <Speak className={isTyping ? "typing" : ""} visible={showSpeak}>
              <Typist cursor={{ show: false }} avgTypingDelay={30}>
                Hi! My name is Aapo Soukkio. Thanks for visiting my website 🙂
                Take a good look around and if you like what you see drop me a message!
              </Typist>
            </Speak>
          )}
          <Canvas shadows camera={{ position: [-3, 5, 9], fov: 30}}>
            {isMobileDevice ? (
              <>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <MyAvatarV2 />
              </>
            ) : (
              <>
                <OrbitControls enableZoom={false} enableRotate={true} />
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <MyAvatarV2 />
              </>
            )}
          </Canvas>
        </Right>
      </Container>
    </Section>
  );
};

export default HomePageLanding;