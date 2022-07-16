import React, { useState } from 'react'
import { useContext } from 'react';
import { CartContext } from './context/CartContext';
import {addDoc,collection,getFirestore} from 'firebase/firestore';
import {useForm} from 'react-hook-form';



function Checkout() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [cel,setCel] = useState ("");
    const {cart,getItemPrice,clearCart} = useContext(CartContext);
    const [idCompra,setIdCompra] = useState("");
    const {register,formState: { errors }, handleSubmit} = useForm();
    
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
  return (
  
    <form className='form-register ' onSubmit={handleSubmit()}>
        <h1 className='text-center'>Complete para terminar su compra</h1>
        <input onChange={(e)=> setName(e.target.value)} className="controls" type="text" {...register('nombre',{
          required: true,
          maxLength: 10
        })} placeholder='Ingrese su nombre' ></input>
        {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}
        <input onChange={(e)=> setCel(e.target.value)} className="controls" type="text" {...register('celular',{
          required: true,
        })} placeholder='Ingrese su cel' ></input>
         {errors.celular?.type === 'required' && <p>El celular es requerido</p>}
        <input onChange={(e)=> setEmail(e.target.value)} className="controls" type="text" {...register('email',{
          pattern:  !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        })}  placeholder='Ingrese su email' ></input>
        {errors.email?.type === 'pattern' && <p>El email es incorrecto</p>}
          <button  onClick={() =>  {HandleClick(); clearCart();}}  className="btn btn-outline-light botons" type="submit" value="enviar">TERMINAR COMPRA</button>
    </form>
    )
  }
  
  

export default Checkout