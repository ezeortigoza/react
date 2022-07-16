import React, { useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ItemCount from './ItemCount';
import Swal from 'sweetalert2'
import { Link, } from 'react-router-dom'
import {CartContext} from '../context/CartContext';


function ItemDetail({objeto}) {
  const {addToCart} = useContext(CartContext);
 
  const [isAddedToCart,setAddedToCart] = useState(false);


   function handleOnAdd(){
    console.log('On add handler');
    setAddedToCart(true);
    addToCart();
  } 

   const onAdd = (count) =>{
    Swal.fire({
      icon: 'success',
      title: 'Woww!',
      text: `Sumaste ${count} productos` ,
    })  
    setAddedToCart(true);
    addToCart(objeto,count)
  }
  return (
  <div>
       <div className=" mb-3 " style={{maxWidth: '2000px'}} >
  <div className="row g-0">
    <div className="col-md-4">
       <img src= {objeto.pictureURL} className="img-fluid rounded-start my-3" alt="iphone"/>
    </div>
    <div className="col-md-8 text-center">
      <div className="my-5">
         <h1 className="card-title text-center">{objeto.title} </h1>
         <p className="card-text text-center fs-3">${objeto.precio} USD </p>
         <h3 className='my-2'>CARACTERISTICAS:</h3>
         <h5 className="card-text text-center "> {objeto.caracteristicas} </h5>
      { 
        (isAddedToCart === false)
        ?
          <ItemCount inicial= {1} max={10} onAdd={onAdd} handleOnAdd={handleOnAdd} />
        : <Link className='nav-item btn btn-outline-dark text-center mx-auto my-5' to='/cart'>Ver carrito</Link>
      }
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemDetail