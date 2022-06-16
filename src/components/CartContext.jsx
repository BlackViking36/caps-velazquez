import React from "react";
import {createContext, useState} from 'react';

export const MiContexto = createContext({});

export default function CartContext( children ) {

    const [darkMode, setDarkMode] = useState(true);

    return (
        <MiContexto.Provider value={{ darkMode: darkMode, setDarkMode: setDarkMode, x: 100 }}>{children}</MiContexto.Provider>
    )
}
