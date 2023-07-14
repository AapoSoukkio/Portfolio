import { Link } from "react-router-dom";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import MyAvatarV5 from "../3D-Components/MyAvatarV5";

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
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <MyAvatarV5 />
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
