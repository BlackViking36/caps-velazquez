import React from 'react';
import NavBar from './components/NavBar';
import TestPromises from './components/TestPromises';
import ItemListContainer from './components/ItemListContainer';


const App = () =>{

  return (
    <>
      <NavBar />
      <ItemListContainer greetings = "BIENVENIDO A LA TIENDA" />
      <TestPromises />
    </>
  );
  
};

export default App;
