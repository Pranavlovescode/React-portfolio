import React from "react";
import { technologies } from "../data/index";
import BallCanvas from "./canvas/Ball";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";

export default function Skills() {
  return (
    <>
      <h2 className="text-white mt-[300px] p-6 text-[30px] font-semibold px-[100px]">
        My Skills
      </h2>
      <p className="text-white p-6 text-[20px] px-[100px]">
        I would like to share that I am familiar with these many skills !!
      </p>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Starts invisible and slightly lower
        whileInView={{ opacity: 1, y: 0 }} // Fades in and moves up when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.23 }}
        className="flex flex-row flex-wrap justify-center gap-20 mt-[100px] px-[100px]"
      >
        {technologies.map((tech) => (
          <motion.div
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5 },
            }}
            className="w-40 h-25"
            key={tech.name}
          >
            <Card className="bg-[#ffffff24] shadow-2xl border-transparent">
              <CardContent>
                <BallCanvas icons={tech.icon} />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
