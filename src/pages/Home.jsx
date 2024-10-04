import React from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";
import LandingPage from "../components/LandingPage";
import Avatar from "../components/Avatar";
import "./styles.css"

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="h-screen overflow-hidden w-full m-0">
          <LandingPage />
          <div className="pt-20 h-screen" id="home">
            <Avatar />
          </div>
        </div>
        <div className="pt-20 h-screen" id="about">
          <About />
        </div>
        <div className="pt-20 h-screen" id="skills">
          <Skills />
        </div>
        <div className="pt-20 h-screen" id="contact-me">
          <ContactMe />
        </div>
      </div>
    </>
  );
}
