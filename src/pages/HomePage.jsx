import React, { Suspense, useEffect } from "react";
import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Computer from "@/components/canvas/Computer";

export default function HomePage() {
  return (
    <>
      <div className="main">
        <div className="flex flex-col md:flex-row justify-center overflow-hidden items-center">
          <LandingPage />
          <div className="pt-20 h-screen w-full md:pr-10" id="home">
            <Canvas
              frameloop="demand"
              shadows
              dpr={[1, 2]}
              gl={{ preserveDrawingBuffer: true }}
              camera={{ position: [20, 2, 0], fov: 25 }}
            >
              <ambientLight intensity={0.5} />
              <Suspense fallback={<CanvasLoader />}>
                <Computer />
                <OrbitControls
                  autoRotate
                  maxPolarAngle={Math.PI / 2}
                  minPolarAngle={Math.PI / 2}
                  enableZoom={false}
                  enablePan={false}
                />
                <Preload all />
              </Suspense>
            </Canvas>
          </div>
        </div>
        <About />
      </div>
    </>
  );
}
