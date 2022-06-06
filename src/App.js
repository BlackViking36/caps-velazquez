import React from 'react';
import NavBar from './components/NavBar';
import TestPromises from './components/TestPromises';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


const App = () =>{

  const stock = 6;
  const initial = 1;

  return (
    <>
      <NavBar />
      <ItemListContainer greetings = "BIENVENIDO A LA TIENDA" />
      <TestPromises />
      <ItemCount stock={stock} initial={initial} />
    </>
  );
  
};

export default App;
