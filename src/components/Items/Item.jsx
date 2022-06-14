
import bootstrap from 'bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function Item({celulares}) {
    
  return (  
<div className="card" style={{width: '20rem'}}>
  <div className='overflow'>
  <img  src= {celulares.URL} className="card-img-top" alt="Iphone"/>
  </div>
  <div className="card-body mx-auto">
    <h5 className="card-title text-center">{celulares.marca}</h5>
    <p className="card-text text-center">$ {celulares.valor}</p>
    <div className='mx-auto'>
    <button className="btn btn-outline-dark mx-auto">Ver mas detalles</button>
    </div>
  </div>
</div>
  )
}

export default Item