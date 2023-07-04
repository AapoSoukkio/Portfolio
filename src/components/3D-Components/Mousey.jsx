/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 mousey.gltf --transform
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/mousey-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ch14.geometry} material={materials.Ch14_Body} />
    </group>
  )
}

useGLTF.preload('/mousey-transformed.glb')
