import React from 'react'
import '../styles/VideoShowcase.css'
import { videos } from '../data/projects'

const VideoShowcase: React.FC = () => {
  return (
    <section id="videos" className="video-showcase">
      <div className="container">
        <h2>Videos de Proyectos</h2>
        <p className="section-subtitle">Visualiza nuestros trabajos en detalle</p>
        
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-container">
                <iframe
                  width="100%"
                  height="315"
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase
