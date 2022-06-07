import React, { useState } from 'react'

function ItemCount({inicial,max, onAdd}) {
    const [count,setCount] = useState(inicial)

    const sumar = () =>{
    count < max ? setCount(count + 1) : alert("No puedes agregar mas productos");}


    const restar = () =>{
     count > inicial ? setCount(count - 1) : alert("No puedes quitar mas productos"); }


    const reset = () =>{
        setCount(inicial)
    }

  return (
    <div className='text-center'>
        <h2 className='white'>{count}</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={() => {onAdd(count); reset()}}>Agregar al carrito</button>
        <button onClick={reset}>Reset</button>
    </div>
  )   
}

export default ItemCount