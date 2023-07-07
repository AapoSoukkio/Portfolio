import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ComputerDesign from "../3D-Components/ComputerDesign";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  color: black;
  font-size: 14px;
  font-weight: 300;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas fov={30}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <ComputerDesign />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate={false} position={[5, 5, 5]} />
        </Suspense>
      </Canvas>
      <Desc>
        I have gained solid amount of experience in creating and developing web pages.
        <br />
        <Link to="/portfolio">See my work</Link>
      </Desc>
    </>
  );
};

export default WebDesign;
