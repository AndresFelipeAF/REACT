import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './contexts/CartContext';

function App() {

  return (

    <div className="App">
      <>
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/producto/:idProduct" element={<ItemListContainer />} />
              <Route exact path="/detalle/:idProduct" element={<ItemDetailContainer />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </>
    </div >
  );
}

export default App;

