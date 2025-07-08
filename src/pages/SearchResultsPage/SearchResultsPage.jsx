import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; // Para leer parámetros de la URL
import './SearchResultsPage.css';

import PostCard from '../../components/PostCard/PostCard'; // Reutilizamos PostCard

// Datos simulados (pueden ser los mismos que en HomePage o ExplorePage)
const mockSearchResults = [
  {
    id: 201,
    title: 'Summer Vibes Beat',
    artist: 'DJ Flow',
    content: 'Un beat refrescante para el verano, con toques de house.',
    type: 'audio',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    initialLikes: 60,
  },
  {
    id: 202,
    title: 'Poema: Luz de la Mañana',
    artist: 'VersosLibres',
    content: 'Inspirado en los primeros rayos de sol que entran por mi ventana.',
    type: 'lyrics',
    audioUrl: null,
    initialLikes: 25,
  },
  {
    id: 203,
    title: 'Retrato Abstracto',
    artist: 'ColoresVivos',
    content: 'Mi más reciente obra, explorando la expresión a través de formas abstractas.',
    type: 'image',
    imageUrl: 'https://via.placeholder.com/400x300/8A2BE2/FFFFFF?text=Retrato', // Otro color de ejemplo
    initialLikes: 70,
  },
];

function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // Obtiene el parámetro 'q' de la URL

  useEffect(() => {
    // Simula una búsqueda. En una app real, aquí harías una petición a un backend.
    // Filtramos los resultados simulados basados en el query.
    if (query) {
      const filteredResults = mockSearchResults.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.artist.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]); // No hay query, no hay resultados
    }
  }, [query]); // Se ejecuta cada vez que el query cambia

  return (
    <div className="search-results-page">
      <main className="search-results-content">
        <h2>Resultados de Búsqueda para "{query}"</h2>
        {searchResults.length > 0 ? (
          <div className="search-results-feed">
            {searchResults.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="no-results">No se encontraron resultados para "{query}". Intenta con otra palabra clave.</p>
        )}
      </main>
    </div>
  );
}

export default SearchResultsPage;