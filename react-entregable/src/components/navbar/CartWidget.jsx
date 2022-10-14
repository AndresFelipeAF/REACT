import React from "react";
import "./navBar.css"; 
import { useCartContext } from '../../contexts/CartContext';

const CartWidget = ( ) => {

const { CartList } = useCartContext();     

return <>

{(CartList.length> 0) ? (<> <div className="container">
<i className="ri-shopping-cart-line cart"></i>
<p className="text">{CartList.length}</p></div></>):( <div className="container">
<i className="ri-shopping-cart-line cart"></i></div>) }

</> 
};
export default CartWidget;