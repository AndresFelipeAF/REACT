import { useEffect, useState } from 'react';
import { useCartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const { CartList, Clear, Total } = useCartContext();
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
        setPrecioTotal(Total);
    }, [CartList, Total]);

    return (
        <> <div style={{margin:"20px"}}>
            {CartList.length > 0 ?
                (<>{CartList.map(item => <CartItem key={item.id} id={item.id} price={item.price} title={item.title} />)}
                    <h1> El precio total es {precioTotal} USD</h1>
                    <Button style={{ margin: "5px" }} onClick={Clear}>Borrar todo carrito</Button>
                    <Link to={"/Order"}>
                        <Button>Terminar compra</Button>
                    </Link>
                </>
                )
                :
                (<>
                    <h2>No hay productos en tu carro</h2>
                    <Link to={"/"}>
                        <Button >Seguir comprando</Button>
                    </Link>
                </>)}
        </div>
        </>
    )
};

export default Cart;