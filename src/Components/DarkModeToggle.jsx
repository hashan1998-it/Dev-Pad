import React, { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext.jsx";

function DarkModeToggle() {
  const { darkMode, handleDarkModeToggle } =
    useContext(ThemeContext);

  return (
    <div>
      <div className="flex flex-row justify-between toggle pt-1">
        <label
          htmlFor="dark-toggle"
          className="flex items-center cursor-pointer"
        >
          <div className="relative">
            <input
              type="checkbox"
              name="dark-mode"
              id="dark-toggle"
              className="checkbox hidden"
              onChange={handleDarkModeToggle}
              checked={darkMode}
            />
            <div
              className={`block border-[1px] ${
                darkMode ? "dark:border-white" : "border-gray-900"
              } w-10 h-6 rounded-full`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 ${
                darkMode ? "dark:bg-white translate-x-4" : "bg-gray-800 "
              } w-4 h-4 rounded-full transition-all `}
            ></div>
          </div>
          <div
            className={`ml-3 ${
              darkMode ? "dark:text-white" : "text-gray-900"
            } font-medium`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </div>
        </label>
      </div>
    </div>
  );
}

export default DarkModeToggle;
