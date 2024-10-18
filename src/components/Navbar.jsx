import React, { useState } from "react";
import {Link as ScrollLink} from "react-scroll"


export default function Navbar() {
  const [focus, setFocus] = useState("home");
  return (
    <>
      <nav className="bg-gray-900 backdrop-blur supports-[backdropFilter]:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          {/* <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Pranav Titambe
            </span>
          </a> */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              type="button"
              className="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button> */}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-gray-900 :border-gray-700">
              <li>
                <ScrollLink
                  onClick={() => setFocus("home")}
                  to="home"
                  smooth={true}
                  spy={true}
                  duration={500}
                  className={`cursor-pointer block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:p-0  ${
                    focus === "home" ? "md:text-blue-500" : "text-white"
                  }`}
                  aria-current="page"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about" 
                  duration={500}
                  smooth={true}
                  spy={true}
                  onClick={() => setFocus("about")}
                  className={`cursor-pointer block py-2 px-3 md:p-0 md:hover:text-blue-500 text-white  hover:text-white md:hover:bg-transparent ${
                    focus === "about" ? "md:text-blue-500" : "text-white"
                  }`}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="skills"
                  onClick={() => setFocus("services")}
                  smooth={true}
                  spy={true}
                  duration={500}
                  className={`cursor-pointer block py-2 px-3 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700 ${
                    focus === "services"
                      ? "md:text-blue-500"
                      : "text-white"
                  }`}
                >
                  Skills
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact-me"
                  onClick={() => {
                    setFocus("contact");
                  }}
                  smooth={true}
                  spy={true}
                  duration={500}
                  className={`cursor-pointer block py-2 px-3 text-gray-900 rounded md:p-0 md:hover:text-blue-500 dark:text-white hover:bg-gray-700 dark:hover:text-white md:hover:bg-transparent border-gray-700 ${
                    focus === "contact"
                      ? "md:text-blue-500 duration-300"
                      : "text-white"
                  }`}
                >
                  Contact Me
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
