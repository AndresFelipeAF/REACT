import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const CardProduct = ({ title, description, price, stock, img, id, key}) => {

    return (
        <div>
            <Card  key ={key} className="text-center card">
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
            </Card>
        </div>
    )
}

export default CardProduct;