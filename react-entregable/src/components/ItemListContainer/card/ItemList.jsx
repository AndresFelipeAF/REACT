import React from "react";
import CardProduct from "./card";

const ItemList = ({productos}) => {
    return(
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
            {productos.map((producto) => {
                return (
                    <CardProduct
                        title={producto.title}
                        description={producto.description}
                        price={producto.price}
                        key={producto.id}
                        stock={producto.stock}
                        img={producto.image} 
                        id={producto.id}/>
                );
            }
            )
            }
        </div>
    );
};

export default ItemList;