import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './Items/ItemList';
import { traerProducto, traerProductosDeCategoria } from '../services/firestore';
import PacmanLoader from 'react-spinners/PacmanLoader';

function ItemListContainer({saludar}) {
  /*  const {id} = useParams(); */
   const [celulares,setCelulares] = useState(null);
   const [loading,setLoading] = useState(true);
   const {id} = useParams();


   useEffect(() => {
    setTimeout(() => {
      
      if(id){
       traerProductosDeCategoria(id)
      .then((res)=>{
        setCelulares(res);
        setLoading(false);
      })
      .catch((error)=>{
        console.log(error);
      });
      }else{
        traerProducto()
        .then((res)=>{
          setCelulares(res);
        setLoading(false);
        })
        .catch((error)=>{
          console.log(error);
        })
      }
    }, 1500);
      }, [id]);
  
    
    
     if(loading){
        return< PacmanLoader className='text-center mx-auto my-5'/>
    }  


  return (
    <div>
   
      <ItemList celulares={celulares}/>
    </div>
  )
}

export default ItemListContainer