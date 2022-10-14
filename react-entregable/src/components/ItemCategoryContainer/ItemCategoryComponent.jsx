import { useState, useEffect } from "react";
import ItemList from "../ItemListContainer/card/ItemList"
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

const ItemCategoryContainer = () => {
    const [productos, setProductos] = useState([]);
    const {category} = useParams(); 
    useEffect(() => {
        const db = getFirestore();
        const items = collection(db, "items");
        const queryList =query(items, where("categoryId","==",category))
        getDocs(queryList).then((snapshot) => {
            const docs = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data()
            }));
            setProductos(docs);
        })
    }, [category]);
    return (
        <ItemList  productos={productos} />
    )
};

export default ItemCategoryContainer;