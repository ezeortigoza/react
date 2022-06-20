import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './Items/ItemList';
import {productos} from '../data/products'

function ItemListContainer({saludar}) {
    /*  const {id} = useParams(); */
     const [celulares,setCelulares] = useState([]);
     const [error, setError] = useState(false);
     const {id} = useParams();
     const {cel} = useParams();
     const {reloj} = useParams();
     const {carga} = useParams();
     const {ipad} = useParams();


     useEffect(() => {
      const cel = new Promise((res,rej)=>{
        setTimeout(()=>{
          if(id === undefined){
            res(productos);
          }else{
              const itemFound = productos.filter(note =>{
                return note.categoria === id;
              })
              res(itemFound);
          }
          if(cel === undefined){
            res(productos);
          }else{
              const found = productos.filter(celular =>{
                return celular.categoria === cel;
              })
              res(found);
          }
          if(reloj === undefined){
            res(productos);
          }else{
            const reloj = productos.filter(rel =>{
              return rel.categoria === reloj;
            })
            res(reloj);
          }
          if(ipad === undefined){
            res(productos);
          }else{
            const ipd = productos.filter(ipd =>{
              return ipd.categoria === ipd;
            })
            res(ipd);
          }
          if (carga === undefined){
            res(productos)
          }else{
            const charge = productos.filter (cargador =>{
              return cargador.categoria === carga;
            })
            res(charge);
          } 

        }
        ,); 
      }, 2000)
      
      cel
      .then((result)=>{
        setCelulares(result);
      })
      .catch((error)=>{
        console.error("Error",error);
      })
     
    }, [id,cel,reloj])
    

    console.log(celulares)
      


  return (
    <div>
    {/* <div className='fs-1 my-5 text-center primary white'>{saludar}</div> */}
      <ItemList celulares={celulares}/>
    </div>
  )
}

export default ItemListContainer