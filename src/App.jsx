import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
