import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCategoryContainer from './components/ItemCategoryContainer/ItemCategoryComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  CartProvider from './contexts/CartContext';
import Cart from "./components/CartInf/Cart";
import ContactForm from './components/ContactInfo/ContactForm';

// No me deja importarlo, no entiendo que problema tiene el path, si se manejan igual que los de arriba.

function App() {

  return (

    <div className="App">
      <>
            <CartProvider>
            <BrowserRouter>
              <NavBar/>
              <Routes>
                <Route exact path="/" element={<ItemListContainer />} />
                <Route exact path="/categoria/:category" element={<ItemCategoryContainer />} />
                <Route exact path="/producto/:idProduct" element={<ItemListContainer />} />
                <Route exact path="/detalle/:idProduct" element={<ItemDetailContainer />} />
                <Route exact path="/Cart" element={<Cart/>} />
                <Route exact path="/Order" element={<ContactForm/>} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
      </>
    </div >
  );
}

export default App;

