import React, {useEffect, useState} from 'react';
import { useCartContext } from '../../../contexts/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Cart = () => {
    const { CartList, Clear, Total } = useCartContext();
    const {precioTotal,setPrecioTotal} = useState(0);

    useEffect(()=>{
        setPrecioTotal(Total());
    },[CartList]);

    return (
        <>
            {CartList.lenght > 0 ?
                (<>{CartList.map(item => <CartItem item={item} />)}
                    <h1>EL precio total es {precioTotal}</h1>
                    <button onClick={Clear}>Borrar todo carrito</button></>)
                :
                (<>
                <h2>No hay productos en tu carro</h2>
                <Link to={"/"}>
                    <button>Seguir comprando</button>
                </Link>
                </>)}
        </>
    )
};

export default Cart;