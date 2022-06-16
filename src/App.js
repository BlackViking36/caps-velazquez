import React from 'react';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import TestPromises from './components/TestPromises';
import TestApi from './components/TestApi';
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import TestEventos from './components/TestEventos';
import CartContext from './components/CartContext';
import { createContext } from 'react';

export const MiContexto = createContext({});

//MI COMPONENTE POR DEFECTO
const App = () =>{

  const stock = 6;
  const initial = 1;

  return (
    <>
      <CartContext>
        <TestApi />
        <NavBar />
        <ItemListContainer greetings = "BIENVENIDO A LA TIENDA" />
        <TestPromises />
        <ItemCount stock={stock} initial={initial} />
        <ItemList />
        <BrowserRouter>
          NAVBAR - SE CREA EL COMPONENTE NAVBAR
          <Routes>
              <Route path="/evento" element={<TestEventos />} />
              <Route path="/" element={<Home /* darkMode={darkMode} setDarkMode={darkMode} */ />} />
              <Route path="/home" element={<Home /* darkMode={darkMode} setDarkMode={darkMode} */ />} />
              <Route path="/contact" element={<Contact /* darkMode={darkMode} setDarkMode={darkMode} */ />} />
          </Routes>
          FOOTER - SE CREA EL COMPONENTE FOOTER
        </BrowserRouter>
      </CartContext>
    </>
  );
  
};

export default App;
