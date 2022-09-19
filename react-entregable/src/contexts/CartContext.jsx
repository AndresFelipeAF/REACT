import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ({ children }) => {

    const [CartList, setCarList] = useState({});

    const clear = () => {
        setCarList();
    };
    // función eliminar todos los productos del carrito

    const addItem = (item, quantity) => {
        setCarList(... {item, quantity});
    }
    // agregar un producto al carrito

    const removeItem = (itemId) => {
        const newCartList = CartList.filter((item) => {
            item !== itemId;
        })
        setCarList(...newCartList);
    }
    // eliminar un objeto del carrito
    
    const IsInCart = (itemId) => {
        CartList.find((cart) => cart === itemId)
    }
    // dar true o false si se envia un producto
    return (
        < CartProvider.Provider value={{clear,addItem,removeItem, IsInCart}}>
            {children}
        </CartProvider.Provider>
    )
}

export { CartContext,CartProvider };