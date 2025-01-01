import React from "react";
import { Button } from "../components/ui/button";
import { NavLink as Link } from "react-router-dom";

export default function LandingPage() {
  const downlaodFile = (e) => {
    e.preventDefault();
    fetch("/Pranav_titambe_resume_new.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "Pranav_titambe_resume_new.pdf";
        a.click();
        document.removeChild(a);
        URL.revokeObjectURL(url);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="w-full md:pl-11">
        <div className="pt-32 md:pt-0">
          <div className=" mt-32 text-center">
            <h1 className="font-extrabold text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hey How's your day !?
            </h1>
          </div>
          <div className="flex flex-row justify-center items-center pt-8">
            <div className="px-3">
              <Button
                onClick={downlaodFile}
                className="bg-gradient-to-tl from-blue-400 to-blue-900 text-black"
              >
                Resume
              </Button>
            </div>
            <div className="px-3">
              <a href="#about">
                <Button className="bg-gradient-to-tl from-blue-400 to-blue-900 text-black">
                  Know More
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
