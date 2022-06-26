import { Button } from '@mui/material'
import React, { useState } from 'react'
import Swal from 'sweetalert2'



function ItemCount({inicial,max, onAdd,handleOnAdd}) {
    const [count,setCount] = useState(inicial)

    const sumar = () =>{
    count < max ? setCount(count + 1) :Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'No puedes agregar mas productos!',
    })}


    const restar = () =>{
     count > inicial ? setCount(count - 1) : Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'No puedes quitar mas productos!',
    
    })}


    const reset = () =>{
        setCount(inicial)
    }

  return (
    <div className='text-center my-5'>
        <h2>{count}</h2>
        <button className='btn btn-outline-dark' onClick={sumar}>+</button>
        <button className='btn btn-outline-dark' onClick={restar}>-</button>
        <button className='btn btn-outline-dark' onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
        <button className='btn btn-outline-dark' onClick={reset}>Reset</button>
        <br></br>
        <button className='btn btn-outline-dark my-2' onClick={handleOnAdd}>Terminar compra</button>
    </div>  
  )   
}

export default ItemCount