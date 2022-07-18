import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import {Link} from 'react-router-dom';

function Item({celulares}) {
  const urlDetalle = `/detalle/${celulares.id} `
    
  return (  
<div className="card w-75 h-100 mx-auto" style={{width: '20rem'}} key={celulares.id} >
  <div className='overflow'>
  <img   src= {celulares.pictureURL} className="card-img-top " alt="Iphone"/>
  </div>
  <div className="card-body mx-auto">
    <h5 className="card-title text-center">{celulares.title}</h5>
    <p className="card-text text-center">${celulares.precio} USD</p>
    <div className='text-center'>
    <Link className='mx-auto text-center' to={urlDetalle} >
         <button className="btn btn-outline-dark mx-auto text-center">Ver mas detalles</button>
    </Link>
    </div>
  </div>
</div>
  )
}

export default Item