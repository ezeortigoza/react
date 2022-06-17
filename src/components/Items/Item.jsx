
import bootstrap from 'bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {Link} from 'react-router-dom';

function Item({celulares}) {
  const urlDetalle = `/detalle/${celulares.id} `
    
  return (  
<div className="card" style={{width: '20rem'}} key={Item.id} >
  <div className='overflow'>
  <img  src= {celulares.URL} className="card-img-top" alt="Iphone"/>
  </div>
  <div className="card-body mx-auto">
    <h5 className="card-title text-center">{celulares.marca}</h5>
    <p className="card-text text-center">$ {celulares.valor} USD</p>
    <div className='mx-auto'>
    <Link to={urlDetalle} >
         <button className="btn btn-outline-dark mx-auto">Ver mas detalles</button>
    </Link>
    </div>
  </div>
</div>
  )
}

export default Item