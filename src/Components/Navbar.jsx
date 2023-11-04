import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";
import { DrawerContext } from "../Contexts/DrawerContext";
import { FullScreenContext } from "../Contexts/FullScreenContext";

function Navbar() {
  const { darkMode } = useContext(ThemeContext);
  const { toggleHidden } = useContext(DrawerContext);
  const { isFullScreen, toggleFullScreen } = useContext(FullScreenContext);

  const fullScreenSvg = (
    <svg
      height="200px"
      width="200px"
      className="w-5 h-5"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 384.97 384.97"
      fill={darkMode ? "white" : "black"}
      xmlSpace="preserve"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g id="Fullscreen_1_">
            {" "}
            <path d="M372.939,216.545c-6.123,0-12.03,5.269-12.03,12.03v132.333H24.061V24.061h132.333c6.388,0,12.03-5.642,12.03-12.03 S162.409,0,156.394,0H24.061C10.767,0,0,10.767,0,24.061v336.848c0,13.293,10.767,24.061,24.061,24.061h336.848 c13.293,0,24.061-10.767,24.061-24.061V228.395C384.97,221.731,380.085,216.545,372.939,216.545z"></path>{" "}
            <path d="M372.939,0H252.636c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h91.382L99.635,268.432 c-4.668,4.668-4.668,12.235,0,16.903c4.668,4.668,12.235,4.668,16.891,0L360.909,40.951v91.382c0,6.641,5.39,12.03,12.03,12.03 s12.03-5.39,12.03-12.03V12.03l0,0C384.97,5.558,379.412,0,372.939,0z"></path>{" "}
          </g>{" "}
          <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  const exitFullScreenSvg = (
    <svg
      height="200px"
      width="200px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 13.594 13.594"
      xmlSpace="preserve"
      fill={darkMode ? "white" : "black"}
      className="h-5 w-5"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <g>
            {" "}
            <path d="M0.035,1.76c0.632,0.631,1.6,1.601,2.185,2.186c0.253,0.252,0.417,0.416,0.417,0.416 S1.963,5.039,1.682,5.318C1.403,5.596,1.903,5.583,1.903,5.583L5.65,5.937c0,0,0.304,0.025,0.304-0.268 c0-0.401-0.474-3.761-0.474-3.761s0-0.511-0.339-0.171c-0.34,0.342-0.884,0.884-0.884,0.884S4.11,2.473,3.884,2.246 C3.312,1.674,2.303,0.666,1.67,0.033C1.439,0.842,0.825,1.487,0.035,1.76z"></path>{" "}
            <path d="M7.896,11.58c0,0-0.001,0.512,0.339,0.172s0.885-0.883,0.885-0.883s0.146,0.146,0.372,0.373 c0.601,0.602,1.689,1.689,2.312,2.313c0.294-0.781,0.957-1.381,1.776-1.586c-0.598-0.6-1.758-1.76-2.423-2.426 c-0.253-0.252-0.418-0.416-0.418-0.416s0.677-0.678,0.955-0.955c0.28-0.279-0.221-0.266-0.221-0.266L7.727,7.551 c0,0-0.303-0.021-0.303,0.27C7.424,8.221,7.896,11.58,7.896,11.58z"></path>{" "}
            <path d="M1.716,13.561c0.614-0.613,1.721-1.721,2.363-2.363c0.251-0.252,0.416-0.416,0.416-0.416 s0.677,0.678,0.957,0.957c0.279,0.277,0.265-0.223,0.265-0.223L6.07,7.77c0,0,0.025-0.303-0.267-0.303 C5.4,7.467,2.04,7.94,2.04,7.94S1.529,7.938,1.87,8.28c0.341,0.338,0.883,0.881,0.883,0.881S2.606,9.309,2.378,9.536 C1.754,10.159,0.607,11.309,0,11.915C0.806,12.151,1.448,12.768,1.716,13.561z"></path>{" "}
            <path d="M13.594,1.685c-0.629,0.629-1.644,1.644-2.247,2.249c-0.252,0.251-0.417,0.414-0.417,0.414 s0.676,0.677,0.955,0.957c0.28,0.28-0.22,0.266-0.22,0.266L7.917,5.925c0,0-0.302,0.024-0.302-0.269 c0-0.402,0.472-3.761,0.472-3.761s-0.002-0.511,0.34-0.172C8.766,2.065,9.31,2.606,9.31,2.606S9.458,2.46,9.683,2.232 c0.551-0.55,1.508-1.509,2.146-2.144C12.117,0.871,12.776,1.472,13.594,1.685z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  return (
    <nav className={`py-6 w-100 ${darkMode ? `bg-[#1E1E1E]` : ""} h-full`}>
      <div className="flex items-center justify-between mx-auto xl:max-w-7xl lg:max-w-5xl md:max-w-3xl md:px-2 px-4">
        <section className="flex items-center text-gray-900 space-x-2">
          <a
            href="#"
            className={`font-bold text-xl focus:ring focus:ring-purple-500 focus:ring-opacity-25 outline-none rounded-lg ${
              darkMode ? `text-white` : ""
            }`}
          >
            Dev.Pad
          </a>
        </section>
        <section>
          <ul className="md:space-x-8 space-x-6  hidden md:flex">
            <button
              onClick={toggleFullScreen}
              className={`flex ${
                darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
              } 
                p-2 rounded-full transition-all focus:ring focus:ring-purple-500 focus:ring-opacity-25 active:bg-gray-200 outline-none`}
            >
              {isFullScreen ? exitFullScreenSvg : fullScreenSvg}
            </button>
            <DarkModeToggle />
            <button
              className={`flex ${
                darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
              }   p-2 rounded-full transition-all focus:ring focus:ring-purple-500 focus:ring-opacity-25 active:bg-gray-200 outline-none`}
              onClick={toggleHidden}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill={darkMode ? "white" : "black"}
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </ul>
        </section>
      </div>
    </nav>
  );
}

export default Navbar;
