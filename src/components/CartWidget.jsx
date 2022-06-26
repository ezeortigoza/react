import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartContext } from './context/CartContext';



function CartWidget({onAdd,count}) {

  const {getItemCount} = useContext(CartContext);

  return (
    <>
    
        < ShoppingCartIcon  />
        {getItemCount() !== 0 ? getItemCount() : 0}
    </>   
  )   
}

export default CartWidget

