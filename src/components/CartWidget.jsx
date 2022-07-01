import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './context/CartContext';
import { Link} from 'react-router-dom'



function CartWidget({onAdd,count}) {

  const {getItemCount} = useContext(CartContext);

  return (
    <>
    {
      <Link className='btn btn-outline-light' to='/cart' >< ShoppingCartIcon/>{getItemCount() !== 0 ? getItemCount() : 0}</Link> 
    }
    </>   
  )   
}

export default CartWidget

