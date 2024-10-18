import React, { Suspense, useEffect } from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";
import LandingPage from "../components/LandingPage";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Earth from "@/components/canvas/Earth";
import Computer from "@/components/canvas/Computer";

export default function Home() {
  useEffect(() => {
    const canvases = document.querySelectorAll("canvas");

    const handleContextLost = (event) => {
      event.preventDefault();
      console.error("WebGL context lost.");
      // Optionally: show an alert or reset the state
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored.");
      // Optionally: reload your models or reset the application state
    };

    canvases.forEach((canvas) => {
      canvas.addEventListener("webglcontextlost", handleContextLost);
      canvas.addEventListener("webglcontextrestored", handleContextRestored);
    });

    return () => {
      canvases.forEach((canvas) => {
        canvas.removeEventListener("webglcontextlost", handleContextLost);
        canvas.removeEventListener(
          "webglcontextrestored",
          handleContextRestored
        );
      });
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className=" " id="home">
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
        </div>
        <div className="" id="about">
          <About />
        </div>
        <div className=" " id="skills">
          <Skills />
        </div>
        <div className=" " id="contact-me">
          <div className="text-white">
            <div className="flex items-start justify-center py-12">
              <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
                <ContactMe />
                <div className="mt-36">
                  <Canvas
                    shadows
                    frameloop="demand"
                    dpr={[1, 2]}
                    gl={{ preserveDrawingBuffer: true }}
                    camera={{
                      fov: 45,
                      near: 0.1,
                      far: 200,
                      position: [-4, 0, 6],
                    }}
                  >
                    <ambientLight intensity={0.5} />
                    <Suspense fallback={<CanvasLoader />}>
                      <OrbitControls
                        autoRotate
                        enableZoom={false}
                        maxPolarAngle={Math.PI / 2}
                        minPolarAngle={Math.PI / 2}
                      />
                      <Earth />
                    </Suspense>
                    <Preload all />
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
