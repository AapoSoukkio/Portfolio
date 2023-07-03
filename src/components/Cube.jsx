import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`

const Cube = () => {
    const textRef = useRef()
    useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
    );
    return (
        <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach="map">
                <PerspectiveCamera
                    makeDefault
                    position={[0,0,5]}
                />
                <color attach="background" args={["pink"]} />
                <Text ref={textRef} fontSize={3} color="#555">
                    hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
    );
};

export default Cube;
