import { createContext,useState } from "react";

export const ThemeContext = createContext();

function ThemeContextProvider(props) {
  const [darkMode, setDarkMode] = useState(false);

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
