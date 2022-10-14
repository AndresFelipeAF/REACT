import { useState, useEffect } from "react";
import ItemList from "./card/ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore"
import "./card/card.css";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, "items");
        getDocs(items).then((snapshot) => {
            const docs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProductos(docs);
        })
    }, []);
    return (
        <ItemList productos={productos} />
    )
};

export default ItemListContainer;