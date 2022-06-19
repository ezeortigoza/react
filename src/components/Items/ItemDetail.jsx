import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import ItemCount from './ItemCount';


function ItemDetail({objeto}) {
   const onAdd = (count) =>{
    alert(`Sumaste ${count} productos`);    
  } 
  return (
    <div>
        <div className="card mb-3 " style={{maxWidth: '200px;'}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {objeto.URL} className="img-fluid rounded-start" alt="iphone"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h2 className="card-title text-center">{objeto.marca} </h2>
        <p className="card-text text-center fs-3">${objeto.valor} USD </p>
        <h3 className=''>CARACTERISTICAS:</h3>
        <p className="card-text text-center "> {objeto.caracteristicas} </p>
        {  <ItemCount inicial= {1} max={10} onAdd={onAdd} />}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemDetail