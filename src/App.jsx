import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
