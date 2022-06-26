import { useState,useEffect } from "react";
import { createContext } from "react";


// 1. Creo el contexto y lo exporto para poder consumirlo luego en los componentes que necesiten info
export const CartContext = createContext()

export const CartProvider = ({children}) =>{
    //estados
    const [cart,setCart] = useState([]);


        useEffect(() => {
            console.log(cart);
        }, [cart])
        
    //funciones

    //Agregar al carrito
    const addToCart = (objeto, count) =>{
      if(isInCart(objeto.id)){
        //sumo cantidad
        console.log("Ya esta en el carrito");
      } else{

          setCart([ ...cart,{...objeto , count}]);
      }
    }

    //Verificar si el producto ya esta en el carrito
    const isInCart = (id) =>{
        //some devuelve true o flaso
        return cart.some((prod)=>prod.id === id )
    }

   
    const clearCart = () =>{
        setCart([]);
    }

    //Eliminar item del carrito
    const deleteItem = (id) =>{
        const findProduct = cart.find((x)=> x.id === id);
        const ProductIndex = cart.indexOf(findProduct);
        const arrayAux = [...cart];
        arrayAux.splice(ProductIndex,1)
        setCart(arrayAux);
    }

    //Obtener cantidad total de objetos
    const getItemCount = () =>{
        return cart.reduce((total,item)=>total += item.count,0);
    }

    //Obtener precio total de los productos
    const getItemPrice = () =>{
        return cart.reduce((total,item)=> total += item.price * item.count,0);
    }

    return(
        <CartContext.Provider value={{cart,addToCart,clearCart,deleteItem,getItemCount,getItemPrice,isInCart}}>
            {children}
        </CartContext.Provider>
    )
}

