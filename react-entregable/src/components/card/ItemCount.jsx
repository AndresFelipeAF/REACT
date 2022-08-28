import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import "./ItemCount.css"
import Button from 'react-bootstrap/Button';

const ItemCount = (prop) => {

    const [numeroCarrito, setNumero] = useState(1);

    return (
        <Card>
            <Card.Body>
                <button onClick={()=>{
                    if (numeroCarrito > 0){
                        setNumero(numeroCarrito - 1);
                    }
                }}>-
                </button>
                {numeroCarrito}
                <button onClick={()=>{
                    setNumero(numeroCarrito + 1);
                }}>+</button>
                <div>
                <Button variant="primary" OnClick={()=>{
                    if (numeroCarrito > prop){
                        alert("No hay suficientes productos en Stock")
                    }
                }}>Agregar al carrito</Button>
                </div>
            </Card.Body>
        </Card>
    )

}
export default ItemCount; 