import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState({});
    const { idProduct } = useParams();
    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", idProduct);
        getDoc(itemRef).then((snapshot) => {
            const productDetail = {
                id: snapshot.id,
                ...snapshot.data()
            }
            setProductos(productDetail);
        })
    }, [idProduct, productos]);
    return (
        <>
            <ItemDetail productos={productos} />
        </>
    )

}

export default ItemDetailContainer;