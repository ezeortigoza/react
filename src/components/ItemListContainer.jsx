import React, { useState ,useEffect } from 'react'
import ItemList from './Items/ItemList';


function ItemListContainer({saludar}) {
    /*  const {id} = useParams(); */
     const [celulares,setCelulares] = useState([]);
     const [error, setError] = useState(false);
 
     useEffect(() => {
      const cel = new Promise((res,rej)=>{
        setTimeout(()=>{
         res([
           {id: 1, marca:"Iphone 7 plus 128GB", valor: 350, URL: "https://images-na.ssl-images-amazon.com/images/I/61ArpAHtEIL.__AC_SX300_SY300_QL70_FMwebp_.jpg"},
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

         ])
        },);
      },2000)
      
      cel
      .then((result)=>{
        setCelulares(result);
      })
      .catch((error)=>{
        console.error("Error",error);
      })
     
    }, [])
    

    console.log(celulares)
      


  return (
    <div>
    {/* <div className='fs-1 my-5 text-center primary white'>{saludar}</div> */}
      <ItemList celulares={celulares}/>
    </div>
  )
}

export default ItemListContainer