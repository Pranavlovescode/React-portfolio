import React, { Suspense, useEffect } from "react";
import ContactMe from "@/components/ContactMe";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Earth from "@/components/canvas/Earth";
import { motion } from "framer-motion";
import "@/pages/styles.css";

export default function ContactMePage() {
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="text-white main">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={headingVariants}
          className="text-center pt-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-t  from-purple-400 to-pink-600">
            Contact Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Feel free to reach out for collaborations, inquiries, or just to say hello. I&apos;m always excited to connect!
          </p>
        </motion.div>
        <div className="flex items-start justify-evenly py-5">
          <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px] h-screen">
            <motion.div
              initial={{ opacity: 0, x: 50 }} // Starts invisible and slightly lower
              whileInView={{ opacity: 1, x: 0 }} // Fades in and moves up when in view
              transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
              viewport={{ once: true, amount: 0.23 }}
              className=""
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
