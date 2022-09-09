import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {

  return (

    <div className="App">
      <NavBar />
      <>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/producto/:idProduct" element={<ItemListContainer />} />
            <Route exact path="/detalle/:idProduct" element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;

