import React from 'react';
import { useCartContext } from '../../contexts/CartContext';

const CartItem = (item)=>{
    const {removeItem} = useCartContext();
    return (
        <>
        <h2>{item.title}</h2>
        <h2>{item.quantity}</h2>
        <h2>{item.price}</h2>
        <button onClick={removeItem(item.id)}>Borrar</button>
        </>
    )
}
export default CartItem;