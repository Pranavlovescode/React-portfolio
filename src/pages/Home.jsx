import React from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";
import LandingPage from "../components/LandingPage";
import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import Avatar from "../components/Avatar";

export default function Home() {
  return (
    <>
      <div className="h-screen overflow-hidden absolute w-full m-0">
        <LandingPage />
        <div className="pt-20 h-screen bg-[#242424]" id="home">
          <Avatar/>
        </div>
      </div>
      <div className="pt-20 h-screen bg-lime-200" id="about">
        <About />
      </div>
      <div className="pt-20 h-screen bg-lime-300" id="skills">
        <Skills />
      </div>
      <div className="pt-20 h-screen bg-lime-400" id="contact-me">
        <ContactMe />
      </div>
    </>
  );
}
