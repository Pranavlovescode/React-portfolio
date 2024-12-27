import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Skills from "@/components/Skills";
import {skillCategories} from "@/data/index";
import ContactMePage from "@/pages/ContactMePage";
import { SkillsSection } from "@/pages/skillsSection";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/skills" element={<SkillsSection/>} />
        <Route path="/contact-me" element={<ContactMePage/>}/>
      </Routes>

    </>
  );
}

export default App;
