import React from "react";
import About from "./About";
import ContactMe from "./ContactMe";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <div className="pt-20 h-screen bg-lime-100" id="home">

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
