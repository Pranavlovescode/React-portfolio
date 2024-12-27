import Navbar from "./components/Navbar";
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
        {focus == "home" && <Route path="/" element={<HomePage/>} />}
        {focus == "skills" && <Route path="/skills" element={<SkillsSection/>} />}
        {focus == "contact" && <Route path="/contact-me" element={<ContactMePage/>} />}
        {focus == "projects" && <Route path="/projects" element={<ProjectPage/>} />}
      </Routes>

    </>
  );
}

export default App;
