import { createContext } from "react";
import { useState } from "react";

export const StyleMethodContext = createContext();

export default function StyleMethodContextProvider(props) {
  const [styleMethod, setStyleMethod] = useState("css");
  const handleStyleMethod = (e) => {
    setStyleMethod(e.target.value);
  };
  return (
    <StyleMethodContext.Provider value={{ styleMethod,handleStyleMethod }}>{props.children}</StyleMethodContext.Provider>
  );
}
