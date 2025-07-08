import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa tus componentes esenciales
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Toast from './components/Toast/Toast';
import Modal from './components/Modal/Modal'; // <--- ¡Importamos el Modal de nuevo!

// Importa tus páginas. Asegúrate de que estas rutas sean correctas.
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import UploadPage from './pages/UploadPage/UploadPage';
import ExplorePage from './pages/ExplorePage/ExplorePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';

// Importa los estilos globales
import './styles/global.css'; // <--- CAMBIO AQUÍ
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem('isLoggedIn')) || false
  );
  const [toast, setToast] = useState({ message: '', type: '', visible: false });
  const [showWelcomeModal, setShowWelcomeModal] = useState(false); // <--- Estado para el Modal

  useEffect(() => {
    localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));

    // Lógica para mostrar el modal solo una vez por sesión
    if (!sessionStorage.getItem('hasSeenWelcomeModal')) {
      setShowWelcomeModal(true);
    }
  }, [isLoggedIn]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    showToast('¡Bienvenido de nuevo a Orion!', 'success');
    
    // Al iniciar sesión, siempre mostramos el modal si no lo ha visto en esta sesión
    if (!sessionStorage.getItem('hasSeenWelcomeModal')) {
      setShowWelcomeModal(true);
      sessionStorage.setItem('hasSeenWelcomeModal', 'true'); // Marca que ya lo vio
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Has cerrado sesión.', 'info');
    sessionStorage.removeItem('hasSeenWelcomeModal'); // Limpia para que el modal aparezca de nuevo en la próxima sesión
  };

  const showToast = (message, type, duration = 3000) => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast({ message: '', type: '', visible: false });
    }, duration);
  };

  const hideToast = () => {
    setToast({ message: '', type: '', visible: false });
  };

  const closeWelcomeModal = () => {
    setShowWelcomeModal(false);
    sessionStorage.setItem('hasSeenWelcomeModal', 'true'); // Asegúrate de marcarlo como visto si lo cierra manualmente
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />

      <div className="app-content-wrapper">
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} showToast={showToast} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadPage showToast={showToast} />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>
      </div>

      <Footer />

      {/* Renderiza el Toast si está visible */}
      {toast.visible && (
        <Toast message={toast.message} type={toast.type} onClose={hideToast} />
      )}

      {/* Renderiza el Modal de Bienvenida si showWelcomeModal es true */}
      <Modal isOpen={showWelcomeModal} onClose={closeWelcomeModal} title="¡Bienvenido a Orion!">
        <p>Estamos emocionados de tenerte en nuestra comunidad de artistas independientes.</p>
        <p>Aquí podrás compartir tu música, letras, arte visual y desafíos creativos.</p>
        <p>¡Explora el feed, sigue a tus artistas favoritos y comienza a crear!</p>
        <button onClick={closeWelcomeModal} style={{ marginTop: '1.5rem', padding: '0.8rem 2rem', backgroundColor: '#61dafb', color: '#1a1e24', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
            Comenzar
        </button>
      </Modal>
    </Router>
  );
}

export default App;