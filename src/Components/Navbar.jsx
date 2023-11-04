import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <nav className={`py-6 w-100 ${darkMode ? `bg-[#1E1E1E]` : ""} h-full`}>
      <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
        <section className="flex items-center text-gray-900 space-x-2">
          <a
            href="#"
            className={`font-bold text-xl focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg ${darkMode ? `text-white` : ""}`}
          >
            Dev.Pad
          </a>
        </section>
        <section>
          <ul className="md:space-x-8 space-x-6 text-gray-900 font-semibold hidden md:flex">
            <li className="relative group">
              <a
                href="#"
                className={`group focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg ${darkMode ? `text-white` : ""}`}
              >
                {" "}
                Home{" "}
              </a>
              <div className="w-full h-0.5 bg-transparent group-hover:bg-purple-500 transition-al absolute bottom-0" />
            </li>
            <DarkModeToggle />
          </ul>
          <button className="flex md:hidden hover:bg-gray-100 p-2 rounded-full transition-all focus:ring focus:ring-purple-500 focus:ring-opacity-25 active:bg-gray-200 outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
      </div>
     
    </nav>
  );
}

export default Navbar;
