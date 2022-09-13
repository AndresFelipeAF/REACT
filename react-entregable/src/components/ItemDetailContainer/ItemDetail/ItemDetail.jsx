import React from "react";
import Card from 'react-bootstrap/Card';
import ItemCount from "./ItemCount";
import { useState } from 'react';

const ItemDetail = ({ productos }) => {
    const OnAdd =()=>{
        const [ quantityToAdd, setQuantity] = useState(1);
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
                <ItemCount quantityToAdd={quantityToAdd} setQuantity={setQuantity}/>
            </Card.Body>
        </Card>
    )
};

export default ItemDetail;