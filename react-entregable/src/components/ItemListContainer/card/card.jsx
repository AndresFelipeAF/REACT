import React from "react";
import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



const CardProduct = ({ title, description, price, stock, img }) => {

    return (
        <div>
            <Card className="text-center card">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <img src={img} alt="" />
                    <Card.Text>
                        <p>{description}</p>
                    </Card.Text>
                    <Card.Text>
                    <p> {price}</p>
                    </Card.Text>
                    <Card.Text>
                        <Button>Ver detalles</Button>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ItemCount stock={stock} />
                </Card.Footer>
            </Card>
        </div>
    )
}

export default CardProduct;