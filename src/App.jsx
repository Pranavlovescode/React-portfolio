import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Skills from "@/components/Skills";
import { technologies } from "./data";
import ContactMePage from "@/pages/ContactMePage";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/skills" element={<Skills tech={technologies} />} />
        <Route path="/contact-me" element={<ContactMePage/>}/>
      </Routes>

    </>
  );
}

export default App;
