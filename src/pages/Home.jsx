import React, { Suspense, useEffect } from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Skills from "../components/Skills";
import LandingPage from "../components/LandingPage";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "@/components/Loader";
import { OrbitControls, Preload } from "@react-three/drei";
import Earth from "@/components/canvas/Earth";
import Computer from "@/components/canvas/Computer";
import { motion } from "framer-motion";
import { technologies } from "@/data";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"

export default function Home() {
  useEffect(() => {
    const canvases = document.querySelectorAll("canvas");

    const handleContextLost = (event) => {
      event.preventDefault();
      console.error("WebGL context lost.");
      // Optionally: show an alert or reset the state
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored.");
      // Optionally: reload your models or reset the application state
    };

    canvases.forEach((canvas) => {
      canvas.addEventListener("webglcontextlost", handleContextLost);
      canvas.addEventListener("webglcontextrestored", handleContextRestored);
    });

    return () => {
      canvases.forEach((canvas) => {
        canvas.removeEventListener("webglcontextlost", handleContextLost);
        canvas.removeEventListener(
          "webglcontextrestored",
          handleContextRestored
        );
      });
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className=" " id="home">
          
        </div>
        <div className="" id="about">
          
        </div>
        <div className=" " id="skills">
          <Skills tech={technologies} />
        </div>
        <div className=" " id="contact-me">
          
        </div>
      </div>
    </>
  );
}
