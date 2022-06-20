import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

 
 function MUNavbar() {
   return (
     <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
  <div className="container-fluid">
        <Link to='/home'> <img src={require ('../assets/Logo.png')} width="50" height="40" className="d-inline-block align-text-top"/> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className='nav-link' to='/categoria/cel'>Iphone</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link'to='/categoria/reloj'>Watch</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to='/categoria/note'>MacBook</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link'  to='/categoria/carga'>Accesorios</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' to='/categoria/ipad'>Ipad</Link>
        </li>
      </ul>
    <form className="d-flex mx-auto">
      <input className="form-control me-4" type="search" placeholder="Search" aria-label="Search"/>
   <Link to='/productos'><button className="btn btn-outline-light" type="submit">Search</button> </Link> 
    </form>
    </div>
    <div className='d-flex espacio'>
      <p className='d-flex espacio'>Hello guest</p>
      <button className="btn btn-outline-light espacio" type="submit">Login </button>
      < CartWidget/>
    </div>
  </div>
</nav>
     </div>
   )
 }
 
 export default MUNavbar