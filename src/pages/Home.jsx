import React from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <>
      <div className="pt-20 h-screen bg-lime-100" id="home">
        <LandingPage/>
      </div>
      <div className="pt-20 h-screen bg-lime-200" id="about">
        <About/>
      </div>
      <div className="pt-20 h-screen bg-lime-300" id="skills">
        <Skills/>
      </div>
      <div className="pt-20 h-screen bg-lime-400" id="contact-me">
        <ContactMe/>
      </div>

    </>
  );
}
