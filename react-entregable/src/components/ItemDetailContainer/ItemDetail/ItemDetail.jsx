import React from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";


const ItemDetail = ({ productos }) => {
    const OnAdd =(quantity)=>{
        console.log(`Agregaste ${quantity} productos`)
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
                <ItemCount OnAdd={OnAdd} stock={productos.available_quantity}/>
            </Card.Body>
        </Card>
    )
};

export default ItemDetail;