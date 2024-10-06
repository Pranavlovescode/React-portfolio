import React from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";
import LandingPage from "../components/LandingPage";
import Avatar from "../components/Avatar";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="flex flex-col md:flex-row justify-center overflow-hidden items-center">
          <div className="w-full md:pl-11"><LandingPage /></div>
          <div className="pt-20 h-screen w-full md:pr-10" id="home">
            <Avatar />
          </div>
        </div>

        <div className="pt-20" id="about">
          <About />
        </div>
        <div className="pt-20 " id="skills">
          <Skills />
        </div>
        <div className="pt-20 " id="contact-me">
          <ContactMe />
        </div>
      </div>
    </>
  );
}
