import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='border-top'>
     <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-link"><Link to="/home" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-link"><Link to="/categoria/cel" className="nav-link px-2 text-muted">Celulares</Link></li>
      <li className="nav-link"><Link to="/categoria/reloj" className="nav-link px-2 text-muted">Relojes</Link></li>
      <li className="nav-link"><Link to="/categoria/note" className="nav-link px-2 text-muted">Notebooks</Link></li>
      <li className="nav-link"><Link to="/categoria/carga" className="nav-link px-2 text-muted">Accesorios</Link></li>
    </ul>
    <p className="text-center text-muted">© 2022 Ezequiel Ortigoza</p>
  </footer>
    </div>
  )
}

export default Footer