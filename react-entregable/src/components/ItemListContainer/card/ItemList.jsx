import React from "react";
import CardProduct from "./card";

const ItemList = ({productos}) => {
    return(
        <div>
            {productos.map((producto) => {
                return (
                    <CardProduct
                        title={producto.title}
                        description={producto.description}
                        price={producto.price}
                        key={producto.id}
                        stock={producto.available_quantity}
                        img={producto.thumbnail} />
                );
            }
            )
            }
        </div>
    );
};

export default ItemList;