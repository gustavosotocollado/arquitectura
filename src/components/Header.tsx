import React from 'react'
import '../styles/Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Arquitectura & Construcción</h1>
          <p>Portafolio de Proyectos</p>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#galeria">Galería</a></li>
            <li><a href="#videos">Videos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
