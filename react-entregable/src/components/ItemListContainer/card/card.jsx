import React from "react";
import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CardProduct = ({ title, description, price, stock, img, id }) => {

    return (
        <div>
            <Card className="text-center card">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <img src={img} alt="" />
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/detalle/${id}`}>
                            <Button>Ver detalles</Button>
                        </Link>
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