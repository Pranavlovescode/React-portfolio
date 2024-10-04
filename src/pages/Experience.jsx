import { Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import Avatar from "../components/Avatar";

export default function Experience() {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        enablePan={false} 
        enableRotate={true}                 
        minPolarAngle={Math.PI / 2} // Lock the polar angle (vertical rotation)
        maxPolarAngle={Math.PI / 2} // Lock the polar angle (vertical rotation)

      />

      <Environment preset="warehouse" />
      <Avatar position={[10, 8, 3.9]} scale={3} />
    </>
  );
}
