import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";

const ItemDetail = ({ productos }) => {
    const { idProduct } = useParams();
    console.log(idProduct)
    const ProductDescription = productos.filter(product=>product.id ==={idProduct});
    console.log(ProductDescription);
    // profe porque si estoy exportando correctamente el idProduct cuando hago el filter no me sale ningun array para usar?
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