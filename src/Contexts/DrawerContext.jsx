import { createContext } from "react";
import { useState } from "react";

export const DrawerContext = createContext();

export default function DrawerContextProvider(props) {
    const [hidden, setHidden] = useState(true);
    function toggleHidden() {
        setHidden(!hidden);
    }
    return (
        <DrawerContext.Provider value={{hidden,toggleHidden}}>
        {props.children}
        </DrawerContext.Provider>
    );
}