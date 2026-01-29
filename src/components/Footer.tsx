import React from 'react'
import '../styles/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Arquitectura & Construcción HMK</h4>
            <p>Especialistas en diseño y construcción de proyectos innovadores</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#galeria">Galería</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Arquitectura & Construcción HMK. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
