
import bootstrap from 'bootstrap'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function Item({celulares}) {
    const {marca,URL,valor} = celulares
  return (  
<div className="card" style={{width: '20rem'}}>
  <div className='overflow'>
  <img  src= {URL} className="card-img-top" alt="Iphone"/>
  </div>
  <div className="card-body mx-auto">
    <h5 className="card-title text-center">{marca}</h5>
    <p className="card-text text-center">${valor}USD</p>
    <div className='mx-auto'>
    <button className="btn btn-outline-dark ">Ver mas detalles</button>
    </div>
  </div>
</div>
  )
}

export default Item