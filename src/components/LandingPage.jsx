import React from "react";
import { Button } from "./ui/button";
import {Link as ScrollLink } from "react-scroll";

export default function LandingPage() {
  const downlaodFile = (e) => {
    e.preventDefault();
    fetch("/pranav_titambe_resume.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "pranav_titambe_resume.pdf";
        a.click();
        document.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="pt-32 md:pt-0">
        <div className="text-blue-300 mt-32 text-center">
          <h1 className="font-extrabold text-4xl">Hey How's your day !?</h1>
        </div>
        <div className="flex flex-row justify-center items-center pt-8">
          <div className="px-3">
            <Button
              onClick={downlaodFile}
              className="bg-gradient-to-tr from-blue-600 to-white text-black"
            >
              Resume
            </Button>
          </div>
          <div className="px-3">
            <ScrollLink to="about" duration={500} smooth={true} spy={true}>
              <Button className="bg-gradient-to-tl from-blue-600 to-white text-black">
                Know More
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </>
  );
}
