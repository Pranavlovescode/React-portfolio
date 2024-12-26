import React, { Suspense, useEffect } from "react";
import ContactMe from "@/components/ContactMe";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Earth from "@/components/canvas/Earth";
import { motion } from "framer-motion";
import '@/pages/styles.css'


export default function ContactMePage() {  

  return (
    <>
      <div className="text-white main">
        <div className="flex items-start justify-center py-5">
          <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Starts invisible and slightly lower
              whileInView={{ opacity: 1, x: 0 }} // Fades in and moves up when in view
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
              viewport={{ once: true, amount: 0.23 }}
              className="mt-36"
            >
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
            </motion.div>
            <ContactMe />
          </div>
        </div>
      </div>
    </>
  );
}
