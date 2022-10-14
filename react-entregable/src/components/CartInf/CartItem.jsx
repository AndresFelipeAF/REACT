import React from 'react';
import { useCartContext} from '../../contexts/CartContext';
import Button from 'react-bootstrap/Button';
const CartItem = ({id,price,title})=>{
    const {removeItem} = useCartContext();
    return (
        <div style={{display:"flex", justifyContent:"center", margin:"5px"}}>
        <h2>{title}   {price} USD</h2>
        <Button  style={{marginLeft:"5px"}} onClick={() =>removeItem(id)}>Borrar</Button>
        </div>
    )
}
export default CartItem;