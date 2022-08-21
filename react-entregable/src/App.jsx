import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
  
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting ="Mensaje" color="grey"/>
    </div>
  );
}

export default App;

