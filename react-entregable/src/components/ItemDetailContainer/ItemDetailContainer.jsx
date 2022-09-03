import {useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const timer = setTimeout(() => {
            cardFetch()
        }, 3000);
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
        <>
            <ItemDetail  productos={productos}/>
        </>
    )

}

export default ItemDetailContainer;