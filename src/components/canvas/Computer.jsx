import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

function Computer() {
  const manRef = useRef();

  // Loading the GLTF model
  const { scene } = useGLTF("/models/gaming_desktop_pc.glb"); // Adjust with your model path


  return (
    <mesh>
      <hemisphereLight intensity={2.5} groundColor="green" />
      <pointLight intensity={1} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={2}
        intensity={10}
      />
      <primitive
        ref={manRef}
        object={scene}
        scale={0.5}
        position={[0, -1, -0.09]}
        rotation={[-0.01, -0.1, -0.1]}
      />
    </mesh>
  );
}

export default Computer;
