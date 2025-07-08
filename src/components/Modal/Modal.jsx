import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children, title }) {
  if (!isOpen) return null; // No renderiza nada si no está abierto

  // Detiene la propagación del clic para que un clic dentro del modal
  // no cierre el modal si se clickea el overlay
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleContentClick}>
        <div className="modal-header">
          {title && <h3 className="modal-title">{title}</h3>}
          <button className="modal-close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children} {/* Aquí se renderizará el contenido que se le pase al modal */}
        </div>
      </div>
    </div>
  );
}

export default Modal;