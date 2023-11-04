import { createContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

export const StyleMethodContext = createContext();

export default function StyleMethodContextProvider(props) {
  const [styleMethod, setStyleMethod] = useLocalStorage("styleMethod","css");
  const handleStyleMethod = (e) => {
    setStyleMethod(e.target.value);
  };
  return (
    <StyleMethodContext.Provider value={{ styleMethod,handleStyleMethod }}>{props.children}</StyleMethodContext.Provider>
  );
}
