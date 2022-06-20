import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'



function ItemDetail({objeto}) {
  const [isAddedToCart,setAddedToCart] = useState(false);

   function handleOnAdd(){
    console.log('On add handler');
    setAddedToCart(true);
  } 

   const onAdd = (count) =>{
    Swal.fire({
      icon: 'success',
      title: 'Woww!',
      text: `Sumaste ${count} productos` ,
    })  
  } 
  return (
    <div>
        <div className="card mb-3 " style={{maxWidth: '200px;'}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {objeto.URL} className="img-fluid rounded-start" alt="iphone"/>
    </div>
    <div className="col-md-8 text-center">
      <div className="card-body">
        <h1 className="card-title text-center">{objeto.marca} </h1>
        <p className="card-text text-center fs-3">${objeto.valor} USD </p>
        <h3 className=''>CARACTERISTICAS:</h3>
        <p className="card-text text-center "> {objeto.caracteristicas} </p>
      { 
        (isAddedToCart === false)
        ?
          <ItemCount inicial= {1} max={10} onAdd={onAdd} handleOnAdd={handleOnAdd} />
        : <Link className='nav-item btn btn-outline-dark text-center mx-auto' to='/cart'>Ver carrito</Link>
      }

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemDetail