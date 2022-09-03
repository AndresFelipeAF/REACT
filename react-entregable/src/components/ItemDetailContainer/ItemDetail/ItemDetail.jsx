import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ productos }) => {
    const ProductDescription = productos[1];
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ProductDescription.thumbnail} />
            <Card.Body>
                <Card.Title>{ProductDescription.title}</Card.Title>
                <Card.Text>
                    {ProductDescription.condition}
                </Card.Text>
                <Card.Text>
                    {ProductDescription.price}
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
};

export default ItemDetail;