import React, { useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './Items/ItemDetail';
import {productos} from '../data/products'
import PacmanLoader from 'react-spinners/PacmanLoader'


function ItemDetailContainer() {
     
    const [objeto,setObjeto] = useState ({});
    const {id} = useParams();
    const {obj} = useParams();
    const [isLoading,setIsloading] = useState(true);

    
    useEffect(() => {
      const cel = new Promise((res,rej)=>{
        setTimeout(()=>{
          let idNumber = parseInt(id)
          const itemFound = productos.find(detalle =>{
          return  detalle.id === idNumber
          })
          res(itemFound);

        },);
      },2000)
      
      cel
      .then((result)=>{
        setObjeto(result);
      })
      .catch((error)=>{
        console.error("Error",error);
      })
      .finally(()=>{
        setIsloading(false);
      })
    }, [id])
    
    if(isLoading){
      return <PacmanLoader/>
    }
    
    return (
       <div>
         <ItemDetail objeto={objeto}/> 
       </div>
      )
    }

export default ItemDetailContainer