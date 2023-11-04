import { createContext } from "react";
import { useState } from "react";

export const FullScreenContext = createContext();

export default function FullScreenContextProvider(props) {
    const [isFullScreen, setFullScreen] = useState(false);

    function toggleFullScreen() {
        setFullScreen(!isFullScreen);
        
    }
  return (
    <FullScreenContext.Provider value={{isFullScreen,toggleFullScreen}}>
      {props.children}
    </FullScreenContext.Provider>
  );
}