import React, { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';
import Notifications from '../Notifications/Notifications'; // Importa el componente de notificaciones

function Header({ isLoggedIn, onLogout }) {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Buscando:', searchQuery);
      alert(`Simulando búsqueda de: "${searchQuery}"`);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="header-orion">
      <div className="header-logo">
        {/* Usamos Link para navegar a la página principal al hacer clic en el logo */}
        <Link to="/" className="logo-link">
          {/* Aplicamos la clase logo-text al h1 para estilizarlo */}
          <h1 className="logo-text">Orion</h1>
        </Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li><Link to="/">Feed</Link></li>
          <li><Link to="/profile">Perfil</Link></li>
          <li><Link to="/upload">Subir</Link></li>
          <li><Link to="/explore">Explorar</Link></li>
        </ul>
      </nav>
      <div className="header-search">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Buscar artistas o canciones..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Buscar</button>
        </form>
      </div>
      <div className="header-user-actions">
        {isLoggedIn ? (
          <>
            <Notifications /> {/* Componente de Notificaciones */}
            <Link to="/profile">
              <button>Mi Perfil</button>
            </Link>
            <button onClick={onLogout} className="logout-button">Cerrar Sesión</button>
          </>
        ) : (
          <Link to="/login">
            <button className="login-register-button">Login / Registro</button> {/* Añadida clase para estilos */}
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;