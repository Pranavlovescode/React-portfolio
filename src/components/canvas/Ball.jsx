import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  Decal,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float speed={5} rotationIntensity={2} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          map={decal}
          rotation={[2 * Math.PI, 0, 6.25]}
        />
      </mesh>
    </Float>
  );
};
const BallCanvas = ({ icons }) => {
  return (
    <Canvas frameloop="always" >
      <ambientLight intensity={0.5} />
      <Ball imgUrl={icons} />
      <OrbitControls enableZoom={false} />
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
