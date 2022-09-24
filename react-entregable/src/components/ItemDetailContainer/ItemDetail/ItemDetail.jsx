import react, { useState } from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartContext';


const ItemDetail = ({ productos }) => {
    // estado terminar compra
    const [TerminarCompra, setTerminarCompra] = useState(false);
    
    const {addItem} = useCartContext();

    const OnAdd = (quantity) => {
        console.log(`Agregaste ${quantity} productos`)
        setTerminarCompra(!TerminarCompra);
        addItem(productos,quantity);
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={productos.thumbnail} />
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text>
                    {productos.condition}
                </Card.Text>
                <Card.Text>
                    {productos.price}
                </Card.Text>
                {TerminarCompra ? (
                    <Link to={"/Cart"}>
                        <button >Terminar la compra</button>
                    </Link>) :( <ItemCount OnAdd={OnAdd}  productos={productos} stock={productos.available_quantity}  idProduct={productos.id}/>)}
            </Card.Body>
        </Card> )
};

export default ItemDetail;