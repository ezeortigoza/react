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
        <div className="card mb-3" style={{maxWidth: '200px;'}} >
  <div className="row g-0">
    <div className="col-md-4">
      <img src= {objeto.URL} className="img-fluid rounded-start" alt="iphone"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{objeto.marca} </h5>
        <p className="card-text">$ {objeto.valor} </p>
        <h3>CARACTERISTICAS:</h3>
        <p className="card-text"> {objeto.caracteristicas} </p>
        {  <ItemCount inicial= {1} max={10} onAdd={onAdd} />}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ItemDetail