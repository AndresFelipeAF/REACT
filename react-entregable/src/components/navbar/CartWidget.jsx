import React from "react";
import "./navBar.css"; 
import { useCartContext } from '../../contexts/CartContext';

const CartWidget = ( ) => {

const { CartList } = useCartContext();     

return <>

{(CartList.length> 0) ? (<><h2>{CartList.length}</h2>
<i className="ri-shopping-cart-line cart"></i></>):(
<i className="ri-shopping-cart-line cart"></i>) }

</> 
};
export default CartWidget;