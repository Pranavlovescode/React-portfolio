import Navbar from "./pages/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import ContactMePage from "@/pages/ContactMePage";
import { SkillsSection } from "@/pages/skillsSection";
import {ProjectPage} from "@/pages/ProjectPage"
import { useState } from "react";

function App() {
  const [focus, setFocus] = useState(localStorage.getItem("focus") || "home");
  return (
    <>
      <Navbar focus={focus} setFocus={setFocus} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/skills" element={<SkillsSection/>} />
        <Route path="/contact-me" element={<ContactMePage/>} />
        <Route path="/projects" element={<ProjectPage/>} />
      </Routes>

    </>
  );
}

export default App;
