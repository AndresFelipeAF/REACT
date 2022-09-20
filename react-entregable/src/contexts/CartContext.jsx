import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

// para que se implementaria esta función ??

const CartProvider = ({ children }) => {

    const [CartList, setCarList] = useState({});

    const clear = () => {
        setCarList();
    };
    // función eliminar todos los productos del carrito

    const addItem = (item, quantity) => {
        setCarList(...{ item, quantity });
    }
    // agregar un producto al carrito

    const removeItem = (itemId) => {
        const newCartList = CartList.filter((item) => {
            return item !== itemId;
        })
        setCarList(...newCartList);
    }
    // eliminar un objeto del carrito

    const IsInCart = (itemId) => {
        CartList.find((cart) => cart === itemId)
    }
    // dar true o false si se envia un producto
    return (
        < CartContext.Provider value={{ CartList, clear, addItem, removeItem, IsInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;