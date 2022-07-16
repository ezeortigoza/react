import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { traerUnProducto } from '../services/firestore';
import ItemDetail from './Items/ItemDetail';
import PacmanLoader from 'react-spinners/PacmanLoader'


function ItemDetailContainer() {
     
    const [objeto,setObjeto] = useState ({});
    const {id} = useParams();
    const [isLoading,setIsloading] = useState(true);
   

    
    useEffect(() => {
      setTimeout(() => {
        traerUnProducto(id)
        .then((res)=>{
          setObjeto(res);
          setIsloading(false);
        })
        .catch((error)=>{
          console.log(error)
        })
      }, 2000);
    }, [id])
    
     if(isLoading){
      return <PacmanLoader className='text-center mx-auto my-5' />
    } 
    
    return (
       <div>
         <ItemDetail objeto={objeto}/> 
       </div>
      )
    }

export default ItemDetailContainer