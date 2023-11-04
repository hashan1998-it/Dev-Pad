import { createContext,useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode",false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, setDarkMode, handleDarkModeToggle }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
