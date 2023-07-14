import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Computer from "../3D-Components/Computer";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 500px;
  color: black;
  font-size: 14px;
  font-weight: 400;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Computer />
      </Canvas>
      <Desc>
        Development work is where my strengths truly lie. 
        <br />
        <Link to="/projects">See my work</Link>
      </Desc>
    </>
  );
};

export default Development;
