import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page">
      <main className="contact-content">
        <div className="contact-container">
          <h2>Contáctanos</h2>
          <p>¿Tienes preguntas, sugerencias o quieres colaborar? ¡Estamos aquí para ayudarte!</p>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Tu Nombre:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Tu Correo Electrónico:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tu Mensaje:</label>
              <textarea id="message" name="message" rows="6" required></textarea>
            </div>
            <button type="submit" className="send-message-button">Enviar Mensaje</button>
          </form>
          <p className="contact-info">También puedes escribirnos directamente a: <a href="mailto:info@orionapp.com">info@orionapp.com</a></p>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;