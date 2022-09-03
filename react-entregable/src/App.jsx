import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
  
    <div className="App">
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;

