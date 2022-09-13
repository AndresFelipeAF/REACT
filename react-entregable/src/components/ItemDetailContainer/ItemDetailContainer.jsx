import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idProduct } = useParams();
    useEffect(() => {
        const timer = setTimeout(() => {
            cardFetch()
        }, 1);
    }, []);
    const cardFetch = async () => {
        try {
            const response = await fetch(`https://api.mercadolibre.com/items/${idProduct}`);
            const data = await response.json();
            console.log(data.results);
            setProductos(data);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <ItemDetail productos={productos} />
        </>
    )

}

export default ItemDetailContainer;