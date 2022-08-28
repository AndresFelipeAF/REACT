import {useState}  from "react";
import ItemCount from "./ItemCount";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


const CardProduct = () => {
    const [productos, setProductos] = useState([]);
    
    const cardFetch = async () => {
        try {
            const response = await fetch('htps://api.mercadolibre.com/sites/MLA/search?q=ferrari');
            const data = await response.json();
            console.log(data);
            setProductos(data.results);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            {productos.map((productos) => {
                return (
                    <Card className="text-center">
                        <Card.Header>{productos.tittle}</Card.Header>
                        <Card.Body>
                            <Card.Title>{productos.image}</Card.Title>
                            <Card.Text>
                                {productos.description}
                            </Card.Text>
                            <Card.Text>
                                {productos.price}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            <ItemCount stock={productos.stock} />
                        </Card.Footer>
                    </Card>
                )
            })
            }
        </div>
    )
}

export default CardProduct;