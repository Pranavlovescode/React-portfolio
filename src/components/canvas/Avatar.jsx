import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


function Computer() {
  const manRef = useRef();

  // Loading the GLTF model
  const { scene } = useGLTF("/models/gaming_desktop_pc.glb"); // Adjust with your model path

  useEffect(() => {
    let id;
    // const animate = () => {
    //   if (manRef.current) {
    //     manRef.current.rotation.y += 0.01; // Rotate around Y-axis
    //   }
    //   id = requestAnimationFrame(animate);
    // };
    // animate();
    // return () => cancelAnimationFrame(id);
  }, []);

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

export default function Avatar() {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 2, 0], fov: 25 }}
    >
      <ambientLight intensity={0.5} />
      <Computer />
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
      <Preload all/>
    </Canvas>
  );
}
