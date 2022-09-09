import { useState, useEffect } from "react";
import ItemList from "./card/ItemList";
import { useParams } from "react-router-dom";
import "./card/card.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { idProduct } = useParams();
    useEffect(() => {
        const timer = setTimeout(() => {
            cardFetch()
        }, 2000);
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
        <ItemList productos={productos} />
    )
};

export default ItemListContainer