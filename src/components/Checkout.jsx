import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import {addDoc,collection,getFirestore} from 'firebase/firestore';





function Checkout() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [cel,setCel] = useState ("");
    const {cart,getItemPrice} = useContext(CartContext);
    const [idCompra,setIdCompra] = useState("");
  

    const db = getFirestore();
    const orderCollection = collection(db, 'ordenes');

    if(idCompra){
      return   <div  className='form-register '>
      <h1 className='text-center'>Resumen de la compra</h1>
       <h3 className='text-center'>Su orden fue generada correctamente bajo el código</h3>
       <p className='text-center'> {idCompra} </p>
       <p>En los próximos días nos pondremos en contacto.</p>
 </div>
    }

    
    function HandleClick(){
        const order = {
          Buyer: {name,email,cel},
          items: cart,
          total: getItemPrice(),
        };
        addDoc(orderCollection,order).then(({id})=>{
          setIdCompra(id);
        })
        console.log(order);
    
    }
    
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    validateEmail();

    function validMobileNumber () {
      if ( !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(cel)) 
      {
          return false
      }
  }
  validMobileNumber();
   
  return (
  
    <div className='form-register '>
        <h1 className='text-center'>Complete para terminar su compra</h1>
        <input onChange={(e)=> setName(e.target.value)} className="controls" type="text" name="nombres" id="nombres" placeholder='Ingrese su nombre'></input>
        <input onChange={(e)=> setCel(e.target.value)} className="controls" type="text" name="celular" id="celular" error={validMobileNumber} placeholder='Ingrese su cel'></input>
        <input onChange={(e)=> setEmail(e.target.value)} className="controls" type="email" name="correo" id="correo" error={validateEmail}  placeholder='Ingrese su email'></input>
          <button onClick={HandleClick} className="btn btn-outline-light botons" type="submit" value="Registrar">TERMINAR COMPRA</button>
    </div>
    )
  }
  
  

export default Checkout