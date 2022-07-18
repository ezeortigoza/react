import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import {addDoc,collection,getFirestore} from 'firebase/firestore';
import Swal from 'sweetalert2'

function Checkout() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [cel,setCel] = useState ("");
    const {cart,getItemPrice,clearCart} = useContext(CartContext);
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
    Swal.fire({
      icon: 'success',
      title: 'Wow!!',
      text: 'Compra exitosa!',
      width: "30rem",
      showConfirmButton: false,
      timer : 700,
  })
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
   
    const validate = (email) =>{
      if(name === '') return 'Por favor ingrese su nombre!'
      if(!email.includes('@')) return 'Por favor ingrese su email,debe contener un @!';
      if(!cel.includes('15')) return 'Por favor ingrese su cel, debe comenzar con 15!'
    }
    const errorMessage = validate(email);

  return (
  
    <form className='form-register ' onSubmit={evt =>{
      evt.preventDefault();
    }} >
        <h1 className='text-center'>Complete para terminar su compra</h1>
        <input onChange={(e)=> setName(e.target.value)} value={name} className="controls"  type="text" name="nombres" id="nombres" placeholder='Ingrese su nombre' ></input>
        <input onChange={(e)=> setEmail(e.target.value)} value={email} className="controls" type="email" name="correo" id="correo"  placeholder='Ingrese su email' ></input>
        <input onChange={(e)=> setCel(e.target.value)} value={cel} className="controls"   type="text" name="celular" id="celular" placeholder='Ingrese su cel' ></input>
        <p className='text-center'>{errorMessage}</p>
          <button  onClick={() =>  {HandleClick(); clearCart();}} disabled={errorMessage} className="btn btn-outline-light botons" type="submit" value="enviar">TERMINAR COMPRA</button>
    </form>
    )
  }
  

export default Checkout