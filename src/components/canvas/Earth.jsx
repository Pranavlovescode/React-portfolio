import React, { Suspense } from "react";
import {useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./models/earth.glb", true, (error) => {
    console.error("Error loading GLTF model:", error);
  });


  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};


export default Earth;
