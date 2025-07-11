// Create a context for the counter hook
import * as React from "react";
import {createContext, useState} from "react";

const counterContext = createContext(undefined);

// Propagate information to all children
export const Counting:  React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        // @ts-ignore
        <counterContext.Provider value = {[ count, setCount ]}>
            { children }
        </counterContext.Provider>
    );
}

export default counterContext;