import React from 'react';
/* import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar'; */
/* import TestPromises from './components/TestPromises';
import TestApi from './components/TestApi'; */
import  { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';


const App = () =>{

/*   const stock = 6;
  const initial = 1; */

  return (
    <>
      {/* <TestApi /> */}
      {/* <NavBar />
      <ItemListContainer greetings = "BIENVENIDO A LA TIENDA" />
      <TestPromises />
      <ItemCount stock={stock} initial={initial} /> */}
      <BrowserRouter>
        {/* NAVBAR - SE CREA EL COMPONENTE NAVBAR*/}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* FOOTER - SE CREA EL COMPONENTE FOOTER*/}
      </BrowserRouter>
    </>
  );
  
};

export default App;
