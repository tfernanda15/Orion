import React from 'react';
// import Header from '../../components/Header/Header'; // ¡Esta línea debe ELIMINARSE!
import PostCard from '../../components/PostCard/PostCard'; // Reutilizamos PostCard

import './ExplorePage.css';


// Datos simulados para la página de explorar (puedes variar los tipos)
const explorePosts = [
    {
      id: 101,
      title: 'Nuevo Beat de Lo-Fi Jazz',
      artist: 'ChillWaves',
      content: 'Acabo de terminar este beat perfecto para estudiar o relajarse. ¡Espero les guste!',
      type: 'audio',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      initialLikes: 45, // <-- Añade esto
    },
    // ... (resto de tus posts, añade initialLikes a cada uno)
    {
      id: 102,
      title: 'Poema: Despertar en la Ciudad',
      artist: 'PalabrasClaras',
      content: 'Un poema que escribí esta mañana viendo el amanecer desde mi ventana.',
      type: 'lyrics',
      audioUrl: null,
      initialLikes: 18, // <-- Añade esto
    },
    {
      id: 103,
      title: 'Reto de Improvisación: Acordes Menores',
      artist: 'GuitarHero_Pro',
      content: '¡Desafío a la comunidad a improvisar sobre esta secuencia de acordes en G menor!',
      type: 'challenge',
      audioUrl: null,
      initialLikes: 33, // <-- Añade esto
    },
    {
      id: 104,
      title: 'Ilustración: Reflejos del Alma',
      artist: 'PincelDigital',
      content: 'Mi última ilustración digital, explorando temas de identidad y reflexión.',
      type: 'image',
      imageUrl: 'https://via.placeholder.com/400x300/FF6347/FFFFFF?text=Ilustracion',
      initialLikes: 50, // <-- Añade esto
    },
  ];

function ExplorePage() {
  return (
    <div className="explore-page">
      {/* <Header />  ¡Esta línea debe ELIMINARSE! */}
      <main className="explore-content">
        <h2>Explora Nuevas Creaciones</h2>
        <p className="explore-intro">Descubre arte de diversos géneros y artistas de la comunidad Orion.</p>
        <section className="explore-feed">
          {explorePosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default ExplorePage;