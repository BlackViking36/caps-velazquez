import React from 'react'
import HijodeHijoDeHome from './HijodeHijoDeHome';
import { MiContexto } from '../App';
import { useContext } from 'react';

export default function Hijo1DeHome() {

    const {darkMode} = useContext(MiContexto)

    return (
        <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black' }}>
            Hijo1DeHome
            <HijodeHijoDeHome />
        </div>
    )
}
