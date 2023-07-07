import { Link } from "react-router-dom";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mousey from "../3D-Components/Mousey";

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

const MoreOfMyWork = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mousey />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate={true} />
        </Suspense>
      </Canvas>
      <Desc>
        I also enjoy Hackathons, Competitive programming, Algorithms, Math...  
        <br />
        <Link to="/portfolio">Link to projects here</Link>
      </Desc>
    </>
  );
};

export default MoreOfMyWork;