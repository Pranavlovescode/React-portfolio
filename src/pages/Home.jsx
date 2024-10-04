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
        <div className=" overflow-hidden w-full m-0">
          <div className="pt-20 h-screen" id="home">
            <LandingPage />
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
