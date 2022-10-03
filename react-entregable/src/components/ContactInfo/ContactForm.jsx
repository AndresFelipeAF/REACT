import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {addDoc, getFirestore,collection} from "firebase/firestore";
import { useCartContext } from "../../contexts/CartContext";

const ContactForm = () => {
    const [id,setId]= useState();
    const [totalPrice, setTotalPrice]= useState("")
    const [form,setForm]= useState({
        name: "",
        email: "",
        number:""
    });
    const { CartList, Total } = useCartContext();
    useEffect(() => {
        setTotalPrice(Total);
    }, [CartList,Total]);
    const changeHandler=(event)=>{
        const newForm={...form, [event.target.name]:event.target.value}
        setForm(newForm);
    };
    const submitHandler=(event)=>{
    event.preventDefault();
    const db=getFirestore();
    const contactFormCollection= collection(db,"orders");
    addDoc(contactFormCollection,Form,CartList,totalPrice).then((snapshot)=>{
        setId(snapshot.id)
    })
    };
    return (
        (typeof id !== "undefined")?
        (<div>
            <p>Su compra ha sido enviada y el codigo de rastrego es {id}</p>
        </div>):(
        <>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Nombre completo" onChange={changeHandler} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={changeHandler}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Numero telefonico</Form.Label>
                    <Form.Control type="message" name="number" placeholder="Numero telefonico"  onChange={changeHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Ordenar
                </Button>
            </Form >
        </>
    ))
}

export default ContactForm;