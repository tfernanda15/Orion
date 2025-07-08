import React, { useState, useEffect } from 'react'; // Importa useState y useEffect
import './HomePage.css';
import PostCard from '../../components/PostCard/PostCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom'; // Importa Link si no lo tenías

// Datos simulados de publicaciones
// ASEGÚRATE DE QUE ESTE ARRAY NO ESTÉ VACÍO Y ESTÉ BIEN FORMATEADO.
const mockPosts = [
  { id: 1, title: 'Fragmento: El Sueño del Navegante', artist: 'Melodía Lunar', content: 'Aquí un adelanto de mi próximo EP. ¿Qué opinan de esta melodía para el estribillo?', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', initialLikes: 15 },
  { id: 2, title: 'Letra: Ecos de un Silencio', artist: 'CompositoraY', content: 'Acabo de terminar esta letra. ¡Busco feedback para el puente! ¿Qué les parece?', type: 'lyrics', audioUrl: null, initialLikes: 8 },
  { id: 3, title: 'Reto: Un Verso sobre "Estrellas Fugaces"', artist: 'PoetaGaláctico', content: '¡Los reto a escribir un cuarteto sobre estrellas fugaces! Dejen sus creaciones en los comentarios.', type: 'challenge', audioUrl: null, initialLikes: 22 },
  { id: 4, title: 'Boceto de Ritmo Techno', artist: 'BeatMaster', content: 'Experimentando con nuevos ritmos para un track techno. Cualquier sugerencia es bienvenida.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', initialLikes: 30 },
  { id: 5, title: 'Sonido Ambiente del Bosque', artist: 'NaturalezaViva', content: 'Grabaciones de campo para un proyecto ambiental.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', initialLikes: 10 },
  { id: 6, title: 'Narrativa Corta: El Último Cuervo', artist: 'CuentistaNocturno', content: 'Una historia corta de fantasía oscura. ¿Logra captar su atención?', type: 'lyrics', audioUrl: null, initialLikes: 12 },
  // ¡Puedes añadir más publicaciones aquí para probar!
];

function HomePage({ isLoggedIn }) { // Asegúrate de recibir la prop isLoggedIn
  const [isLoading, setIsLoading] = useState(true); // Inicialmente en true para mostrar el spinner
  const [posts, setPosts] = useState([]); // Estado para almacenar las publicaciones

  // useEffect para simular la carga de datos
  useEffect(() => {
    console.log('HomePage: Iniciando simulación de carga...');
    const timer = setTimeout(() => {
      console.log('HomePage: Simulación de carga terminada. Estableciendo posts.');
      setPosts(mockPosts); // ¡Aquí es donde se asignan los datos simulados al estado 'posts'!
      setIsLoading(false); // Cambia isLoading a false para ocultar el spinner
    }, 1500); // 1.5 segundos de retraso

    // Función de limpieza: Importante para evitar efectos secundarios si el componente se desmonta antes
    // de que el setTimeout termine.
    return () => {
      console.log('HomePage: Limpiando temporizador.');
      clearTimeout(timer);
    };
  }, []); // El array vacío significa que este efecto se ejecuta SOLO una vez, al montar el componente.

  return (
    <div className="home-page">
      <main className="home-content">
        <h2>Bienvenido a Orion, la comunidad de artistas independientes.</h2>
        <p>Descubre talentos, comparte tu arte y colabora.</p>

        {/* CTA para usuarios no logueados: solo se muestra si isLoggedIn es falso */}
        {!isLoggedIn && (
          <section className="cta-section">
            <h3>¿Nuevo en Orion? ¡Únete a nuestra comunidad!</h3>
            <p>Regístrate para compartir tu arte, conectar con otros creadores y explorar infinitas posibilidades.</p>
            <Link to="/login" className="cta-button">
              Regístrate / Inicia Sesión
            </Link>
          </section>
        )}

        <section className="feed-section">
          <h3>Últimas Publicaciones</h3>
          {isLoading ? ( // Renderizado condicional: si isLoading es true, muestra el spinner
            <LoadingSpinner />
          ) : ( // Si isLoading es false, muestra la lista de publicaciones
            <div className="posts-list">
              {/* Mapea sobre el estado 'posts' para renderizar las publicaciones */}
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default HomePage;