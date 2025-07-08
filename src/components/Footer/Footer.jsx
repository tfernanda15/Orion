import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer-orion">
      <p>&copy; {new Date().getFullYear()} Orion. Todos los derechos reservados.</p>
      <div className="footer-links">
        <Link to="/about">Acerca de</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/privacy">Privacidad</Link> {/* <-- Enlaza a la nueva página */}
      </div>
    </footer>
  );
}

export default Footer;