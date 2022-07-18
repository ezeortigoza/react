import { useState } from "react";
import { createContext } from "react";
import Swal from 'sweetalert2';


export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const [cart,setCart] = useState([]);

    const addToCart = (objeto, count) =>{
      if(isInCart(objeto.id)){
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Ya esta agregado en el carrito!',
          
          })
      } else{

          setCart([ ...cart,{...objeto , count}]);
      }
    }

    const isInCart = (id) =>{
        return cart.some((prod)=>prod.id === id )
    }

   
    const clearCart = () =>{
        setCart([]);
    }

    const deleteItem = (id) => {
        const findProduct = cart.find((x) => x.id === id);
        const porductIndex =  cart.indexOf(findProduct);
        const arrayAux = [...cart];
        arrayAux.splice(porductIndex , 1)
        setCart(arrayAux);
      }


    const getItemCount = () =>{
        return cart.reduce((total,item)=>total += item.count,0);
    }


    const getItemPrice = () =>{
        return cart.reduce((total,item) => total += item.precio * item.count,0)
    }

    return(
        <CartContext.Provider value={{cart,setCart,addToCart,clearCart,deleteItem,getItemCount,getItemPrice,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

