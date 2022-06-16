import React from 'react'
import { MiContexto } from '../App';
import { useContext } from 'react';

export default function HijodeHijoDeHome() {
    /* { darkMode, setDarkMode } */
    /* alert(darkMode); */

    const { darkMode, setDarkMode } = useContext(MiContexto);

    return (
        <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
            HijodeHijoDeHome
            <button onClick={() => setDarkMode(!darkMode)}>Cambiar a dark</button>
        </div>
    )
}
