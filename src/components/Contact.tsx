import React, { useState } from 'react'
import '../styles/Contact.css'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    alert(`Mensaje enviado: ${formData.name}`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2>Contáctanos</h2>
        <p className="section-subtitle">Estamos interesados en tus proyectos</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3>Dirección</h3>
              <p>Calle Principal 123<br />Ciudad, País</p>
            </div>
            <div className="info-item">
              <h3>Teléfono</h3>
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>info@arquitectura.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Tu mensaje"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
