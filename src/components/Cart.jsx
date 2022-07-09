import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './context/CartContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';




function Cart() {

  const {cart,deleteItem,getItemPrice,clearCart,getItemCount} = useContext(CartContext);

  if(cart.length === 0){
   return <div className='mx-auto text-center my-5'>
     < ShoppingCartIcon style={{height: '20rem',width: "10rem"}}/>
    <h1 className='text-center'>Todavia no agregaste ningun producto al carrito</h1>
    <Link className='btn btn-outline-dark mx-auto text-center mx-auto my-4' to='/home'>Volver al inicio</Link>
    </div>
  }


  return (
    
  <div className='grid row container-fluid justify-content-center my-5 espacio mx-auto '>
      {
        cart.map(item =>(
  <div className=" card espacio my-5" style={{width: '15rem',height:'30rem'}} key={item.id} >
  <div className='g-col-6 '>
      <img   src= {item.pictureURL}  className="card-img-top " alt="Iphone"/>
  </div>
  <div className="g-col-6 ">
      <h6 className='text-center my-2'>Cantidad: {item.count} </h6>
      <h5 className="card-title text-center"> {item.title}</h5>
      <p  className="card-text text-center fs-5">${item.precio} USD</p> 
  <div className='g-col-6 mx-auto text-center'>
         <button onClick={() =>{deleteItem(item.id)}} className="btn btn-outline-danger mx-auto text-center">Eliminar</button>   
  </div>
  <div g-col-6 mx-auto text-center>
          <p className='fs-5 my-3 text-center'>Subtotal: <span className='fs-4'>{item.precio * item.count}USD</span> </p>
  </div>
  </div>
</div>
      
      ))
      }
    <div className='text-center mx-auto my-5 espacio'>
      <Link to='/checkout'>
         <button className="btn btn-outline-dark mx-auto text-center espacio">Ir al checkout</button>
      </Link>
         <button onClick={clearCart} className="btn btn-outline-danger mx-auto text-center espacio"> Eliminar todos los productos </button>
         <h5 className='my-4'>El monto total de productos agregados es de: ${getItemPrice()}USD</h5>
  
    </div>
         
    </div>
   
    
  )
}
export default Cart