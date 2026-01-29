import React, { useState } from 'react'
import '../styles/Gallery.css'
import { projects } from '../data/projects'

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <h2>Galería de Proyectos</h2>
        <p className="section-subtitle">Explora nuestros proyectos arquitectónicos</p>
        
        <div className="gallery-grid">
          {projects.map((project) => (
            <div key={project.id} className="gallery-card">
              <div className="image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onClick={() => setSelectedImage(project.image)}
                />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Expanded" />
            <button className="close-btn" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
