import React, { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage({ onLoginSuccess, showToast }) { // Recibe showToast como prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState(''); // Estado para mensajes de error del formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Limpia cualquier error previo al intentar enviar

    // --- Validaciones de Formulario ---
    if (!email.trim() || !password.trim()) {
      setError('Por favor, ingresa tu correo electrónico y contraseña.');
      showToast('Error: Campos vacíos', 'error'); // Muestra toast de error
      return; // Detiene la ejecución si hay un error
    }
    // Podrías añadir más validaciones aquí, como formato de email, longitud de contraseña, etc.

    // --- Simulación de Autenticación Exitosa ---
    // En una aplicación real, aquí enviarías credenciales a tu backend y esperarías una respuesta
    console.log('Intentando iniciar sesión con:', { email, password });
    
    // Suponemos que la autenticación es siempre exitosa para esta simulación
    showToast('¡Login simulado exitoso!', 'success'); // Muestra toast de éxito
    onLoginSuccess(); // Llama a la función de éxito de login en App.jsx (que también muestra un toast)
    navigate('/'); // Redirige al feed principal
  };

  return (
    <div className="login-page">
      <main className="login-content">
        <h2>Iniciar Sesión en Orion</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {/* Mostrar mensaje de error si existe */}
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email" // Usa type="email" para validación básica del navegador
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(''); // Limpia el error al empezar a escribir
              }}
              placeholder="tu.correo@ejemplo.com"
              required // Atributo HTML5 para validación básica
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(''); // Limpia el error al empezar a escribir
              }}
              placeholder="Tu contraseña"
              required // Atributo HTML5 para validación básica
            />
          </div>
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        <p className="register-link">
          ¿No tienes cuenta? <Link to="/register">Regístrate</Link> {/* Puedes crear una página /register simple si quieres */}
        </p>
      </main>
    </div>
  );
}

export default LoginPage;