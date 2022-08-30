import { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./card.css"



const CardProduct = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        cardFetch()
    }, []);


    const cardFetch = async () => {
        try {
            const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=ducati');
            const data = await response.json();
            console.log(data.results);
            setProductos(data.results);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            {productos.map((productos) => {
                return (
                    <Card className="text-center card" key={productos.id}>
                        <Card.Header>{productos.title}</Card.Header>
                        <Card.Body>
                            <img src={productos.thumbnail} alt="" />
                            <Card.Text>
                                {productos.description}
                            </Card.Text>
                            <Card.Text>
                                {productos.price}
                            </Card.Text>
                            <Card.Text>
                            <Button>Ver detalles</Button>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <ItemCount stock={productos.available_quantity} />
                        </Card.Footer>
                    </Card>
                )
            })
            }
        </div>
    )
}

export default CardProduct;