import React, { useState, useEffect } from 'react';
import './Toast.css';

function Toast({ message, type, duration = 3000, onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`toast-container ${type}`}>
      <span>{message}</span>
      <button className="toast-close-button" onClick={() => { setIsVisible(false); if (onClose) onClose(); }}>
        &times;
      </button>
    </div>
  );
}

export default Toast;