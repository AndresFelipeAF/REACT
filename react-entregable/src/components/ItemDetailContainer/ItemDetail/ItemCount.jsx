import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const ItemCount = ({ setQuantity,quantityToAdd,stock }) => {


    return (
        <Card className='item-count'>
            <Card.Body>
                <button onClick={() => {
                    setQuantity(quantityToAdd -1 ) 
                }}>-
                </button>
                {quantityToAdd}
                <button onClick={() => {
                    setQuantity(quantityToAdd + 1);
                }}>+</button>
                <div>
                        <Button variant="primary" onClick={() => {
                            if (quantityToAdd > stock) {
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