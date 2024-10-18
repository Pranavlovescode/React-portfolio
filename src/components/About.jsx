import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>      
      <motion.div
        initial={{ opacity: 0, x: -30}} // Starts invisible and slightly lower
        whileInView={{ opacity: 1, x: 0 }} // Fades in and moves up when in view
        transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
        viewport={{ once: true, amount: 0.23 }} // Animation triggers once, when 20% of the component is visible
        className="mx-auto md:px-[100px]"
      >
        {/* used card to show the details About me */}
        <Card className="bg-[#ffffff24] shadow-2xl border-transparent">
          <CardHeader>
            <CardTitle className="text-blue-300 text-[30px] font-extrabold">About Me</CardTitle>
            <CardDescription className="text-slate-300 font-semibold">
              Btw I use Linux 🖥️
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row justify-evenly items-center text-white">
            <div className="md:px-5 py-5">
              <img
                src="/pranav-photo-2.png"
                alt="My Photo"
                className="h-[250px] w-[250px] rounded-full"
              />
            </div>
            <div className="px-5">
              <p className="text-white">
                I am a software engineer with a passion for web development.
              </p>
              <p className="text-white">
                I am a self-taught developer and I have been coding for over 2
                years.
              </p>

              <p className="text-white">
                I have worked on various projects and have experience in
                building full-stack applications.
              </p>

              <p className="text-white">
                I am passionate about coding and I enjoy building applications
                that solve real-world problems.
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
}
