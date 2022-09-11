import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ productos }) => {
    
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
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
};

export default ItemDetail;