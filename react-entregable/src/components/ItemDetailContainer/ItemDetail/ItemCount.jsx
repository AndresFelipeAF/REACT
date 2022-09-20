import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import CartProvider from '../../../contexts/CartContext';



const ItemCount = ({ OnAdd , stock, id, productos }) => {
    const [ quantityToAdd, setQuantity] = useState(1);

    const { CartList,addItem} = useContext(CartProvider);
    
    const findId =(id)=>{
        CartList.find((cart) => cart === id)
    }
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
                            OnAdd(quantityToAdd)
                            if (quantityToAdd > stock) {
                                alert("No hay suficientes productos en Stock")
                            } else {
                                alert("tu producto se a agregado al carrito");

                                if( findId(id)=== false){
                                    {addItem(productos,quantityToAdd)}
                                }else{alert("El producto ya se encuentra en el carrito")}
                            }
                        }}>Agregar al carrito</Button>
                </div>
            </Card.Body>
        </Card>
    )

}
export default ItemCount; 