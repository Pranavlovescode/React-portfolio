import React from "react";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./ui/card";
import "@/pages/styles.css"

export default function Skills({ tech }) {
  // getting the props from the parent component
  return (
    <>
      <div className="main">
        <h2 className="text-blue-300 p-6 mt-14 text-[30px] font-extrabold px-[100px] ">
          My Skills
        </h2>
        <p className="text-white px-[100px]">
          I would like to share that I am familiar with these many skills !!
        </p>
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Starts invisible and slightly lower
          whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up when in view
          transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          viewport={{ once: true, amount: 0.23 }}
          className="flex flex-row flex-wrap justify-center items-center gap-20 mt-[100px] px-[100px]"
        >
          {tech.map((tech) => (
            <motion.div
              whileHover={{ scale: 1.1 }} // Scales up when hovered
              className="w-40 h-25"
              key={tech.name}
            >
              <Card className="bg-[#ffffff24] shadow-[10px] border-transparent text-center">
                <CardContent className="mx-auto flex flex-col items-center justify-center">
                  {/* <BallCanvas icons={tech.icon} /> */}
                  <img src={tech.icon} alt="" className="h-[110px] w-[100px]" />
                  <p className="text-center text-blue-300 font-semibold">
                    {tech.name}
                  </p>
                </CardContent>
                {/* <CardFooter className='text-center text-blue-300'>{tech.name}</CardFooter> */}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
