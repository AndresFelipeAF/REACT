import React from 'react';
import { useCartContext } from '../../contexts/CartContext';

const CartItem = ({id,price,title})=>{
    const {removeItem} = useCartContext();
    return (
        <div>
        <h2>{title}</h2>
        <h2>{price}</h2>
        <button onClick={() =>removeItem(id)}>Borrar</button>
        </div>
    )
}
export default CartItem;