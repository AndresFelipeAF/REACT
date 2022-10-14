import { useState } from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartContext';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ productos }) => {
    const [TerminarCompra, setTerminarCompra] = useState(false);
    const {addItem} = useCartContext();

    const OnAdd = (quantity) => {
        console.log(`Agregaste ${quantity} productos`)
        setTerminarCompra(!TerminarCompra);
        addItem(productos,quantity);
    }
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <Card style={{ width:"250px", alignItems:"center",
    margin:"50px"}}>
            <Card.Img style={{margin:"5px"}} variant="top" src={productos.image} />
            <Card.Body>
                <Card.Title>{productos.title}</Card.Title>
                <Card.Text>
                    {productos.condition}
                </Card.Text>
                <Card.Text>
                    {productos.price}
                </Card.Text>
                {TerminarCompra ? (<>
                    <Link to={"/"}>
                    <Button style={{marginBottom:"4px"}} >Seguir comprando</Button>
                    </Link>
                    <Link to={"/Cart"}>
                        <Button >Terminar la compra</Button>
                    </Link></>) :( <ItemCount OnAdd={OnAdd}  productos={productos} stock={productos.stock}  idProduct={productos.id}/>)}
            </Card.Body>
        </Card>
        </div> )
};

export default ItemDetail;