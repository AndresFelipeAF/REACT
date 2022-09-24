import React, { useState, useContext } from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

    const [CartList, setCarList] = useState([]);

    const Clear = () => {
        setCarList({});
    };
    // función eliminar todos los productos del carrito

    const addItem = (item, quantity) => {
        const previousProduct = IsInCart(item.id);
        if (previousProduct) {
            const newCartList = CartList.filter(product=>product.id !== item.id);
            // crea una nueva lista donde no se encuentra el producto con el id
            item.quantity = quantity + previousProduct.quantity;
            // se agrega al nuevo item el valor de quantity del item anterior al actual
            newCartList.push(item);
            // se agrega a la nueva lista
            setCarList(newCartList);
            // se agrega en el carro 
        } else {
            item.quantity = quantity;
            setCarList([...CartList, item]);
            // agregar un producto al carrito
        };
    }
    
    const Total =()=>{
        let tot= 0;
        CartList.forEach(item =>{
            tot= tot + item.price * item.quantity;
            return tot;
        })
    }

    const removeItem =(itemId)=>{
        const newList = CartList.filter(product=> product.id !== itemId);
        setCarList(newList);
    }
    // remueve un item en especifico con el id

    const IsInCart = (itemId) => {
        return CartList.find((cart) => cart.id === itemId);
    };
    // dar true o false si se envia un producto
    return (
        < CartContext.Provider value={{ CartList, Clear, addItem,removeItem, Total }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;