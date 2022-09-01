import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const ItemCount = ({ stock }) => {

    const [numeroCarrito, setNumero] = useState(1);

    return (
        <Card className='item-count'>
            <Card.Body>
                <button onClick={() => {
                    if (numeroCarrito > 1) {
                        setNumero(numeroCarrito - 1);
                    }
                }}>-
                </button>
                {numeroCarrito}
                <button onClick={() => {
                    setNumero(numeroCarrito + 1);
                }}>+</button>
                <div>
                    <Button variant="primary" onClick={() => {
                        if (numeroCarrito > stock) {
                            alert("No hay suficientes productos en Stock")
                        } else {
                            alert("tu producto se a agregado al carrito");
                        }
                    }}>Agregar al carrito</Button>
                </div>
            </Card.Body>
        </Card>
    )

}
export default ItemCount; 