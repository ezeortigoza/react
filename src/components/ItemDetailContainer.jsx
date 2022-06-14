import React, { useState,useEffect} from 'react'
import ItemDetail from './Items/ItemDetail';


function ItemDetailContainer() {
     
    const [objeto,setObjeto] = useState ({});

    
    useEffect(() => {
      const cel = new Promise((res,rej)=>{
        setTimeout(()=>{
         res(
           {id: 1, marca:"Iphone 7 plus 128GB", valor: 350, URL: "https://images-na.ssl-images-amazon.com/images/I/61ArpAHtEIL.__AC_SX300_SY300_QL70_FMwebp_.jpg",caracteristicas:'Alto: 15,82 cm Ancho 7,79 cm Grosor: 0,73 cm Peso: 188 g. Pantalla Retina HDPantalla Multi-Touch panorámica LCD de 5,5 pulgadas (en diagonal) con tecnología IPS Resolución de 1.920 por 1.080 a 401 p/p Contraste de 1.300:1 (típico) Pantalla con gama cromática amplia (P3) , Chip A10 Fusion, Cámara dual de 12 Mpx con gran angular y teleobjetivo Gran angular: apertura de ƒ/1,8 Teleobjetivo: apertura de ƒ/2,8 Zoom óptico x2; zoom digital hasta x10 Modo Retrato Estabilización óptica de imagen'},
           {id: 2, marca:"Iphone x 256GB", valor: 500, URL: "https://m.media-amazon.com/images/I/51phIQXX2eL._AC_SL1244_.jpg"},
           {id: 3, marca:"Iphone xr 64GB ", valor: 400, URL: "https://m.media-amazon.com/images/I/717KHGCJ6eL._AC_SL1500_.jpg"},
           {id: 4, marca:"Iphone 11 pro max 256GB", valor: 900, URL: "https://m.media-amazon.com/images/I/81j2j9x-KWL._FMwebp__.jpg"},
           {id: 5, marca:"Iphone 11 64GB", valor: 820, URL:"https://mercadositio.com/img/Producto/487/4553216499ede13d773ed4281c0b17d0-6206c48a7ef34.jpg"},
           {id: 6, marca:"Iphone 13 256GB", valor: 920, URL: "https://mercadositio.com/img/Producto/1314/4ee18a7b0c2e7fb5fa071a0fc8805d8b-6206cd2377efb-wp.webp"},
           {id: 7, marca:"Iphone 13 pro max 64GB", valor: 1200, URL: "https://mercadositio.com/img/Producto/f4075e0f-9004-9fe7-2de0-699443707f54/iphone13promaz-621cf49d03a55-wp.webp"},
           {id: 8, marca:"Iphone 13 pro 256GB", valor: 1600, URL:"https://mercadositio.com/img/Producto/1315/283cc3f22dd0d1c8476a1d055766bc54-6206cd247fbf9-wp.webp"},
           {id: 9, marca:"Iphone 8 plus 256GB", valor: 450, URL: "https://mercadositio.com/img/Producto/ef864698-d3c0-9a40-6790-f851fe22eca3/iphone-8-plus-1-6222247be4fd7-wp.webp"},
           {id: 10, marca:"Iphone xs max 256GB", valor: 620, URL: "https://m.media-amazon.com/images/I/71LVhKIeesL._AC_SL1500_.jpg"},
           {id: 11, marca:"Iphone 12 mini 64GB", valor: 850, URL: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-mini-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343707000"},
           {id: 12, marca:"Iphone 12  256GB", valor: 620, URL: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000"},

         )
        },);
      },2000)
      
      cel
      .then((result)=>{
        setObjeto(result);
      })
      .catch((error)=>{
        console.error("Error",error);
      })
     
    }, [])
    
    
    
    return (
       <div>
         <ItemDetail objeto={objeto}/> 
       </div>
      )
    }

export default ItemDetailContainer