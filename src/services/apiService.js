// src/services/apiService.js

const MOCK_POSTS_HOME = [
    { id: 1, title: 'Fragmento: El Sueño del Navegante', artist: 'Melodía Lunar', content: 'Aquí un adelanto de mi próximo EP. ¿Qué opinan de esta melodía para el estribillo?', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', initialLikes: 15 },
    { id: 2, title: 'Letra: Ecos de un Silencio', artist: 'CompositoraY', content: 'Acabo de terminar esta letra. ¡Busco feedback para el puente! ¿Qué les parece?', type: 'lyrics', audioUrl: null, initialLikes: 8 },
    { id: 3, title: 'Reto: Un Verso sobre "Estrellas Fugaces"', artist: 'PoetaGaláctico', content: '¡Los reto a escribir un cuarteto sobre estrellas fugaces! Dejen sus creaciones en los comentarios.', type: 'challenge', audioUrl: null, initialLikes: 22 },
    { id: 4, title: 'Boceto de Ritmo Techno', artist: 'BeatMaster', content: 'Experimentando con nuevos ritmos para un track techno. Cualquier sugerencia es bienvenida.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', initialLikes: 30 },
    { id: 5, title: 'Sonido Ambiente del Bosque', artist: 'NaturalezaViva', content: 'Grabaciones de campo para un proyecto ambiental.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', initialLikes: 10 },
    { id: 6, title: 'Narrativa Corta: El Último Cuervo', artist: 'CuentistaNocturno', content: 'Una historia corta de fantasía oscura. ¿Logra captar su atención?', type: 'lyrics', audioUrl: null, initialLikes: 12 },
  ];
  
  const MOCK_POSTS_EXPLORE = [
      { id: 20, title: 'Top Beat Urbano #5', artist: 'RitmoCallejero', content: 'Mi último beat con ese toque de la calle que tanto te gusta.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3', initialLikes: 120 },
      { id: 21, title: 'Ilustración: El Viaje Interior', artist: 'PinceladasDigitales', content: 'Un nuevo estilo que estoy explorando, full de colores y emociones.', type: 'image', imageUrl: 'https://via.placeholder.com/400x300/FF5722/FFFFFF?text=ViajeInterior', initialLikes: 95 },
      { id: 22, title: 'Letra: Ciudad de Cristal', artist: 'PalabrasAlViento', content: 'Inspirado en los rascacielos al atardecer. ¿Qué les sugiere?', type: 'lyrics', audioUrl: null, initialLikes: 70 },
      { id: 23, title: 'Tutorial Rápido: Acordes de Jazz', artist: 'GuitarristaPro', content: 'Mini-tutorial para añadirle un toque jazz a tus canciones.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3', initialLikes: 150 },
      { id: 24, title: 'Desafío: Crea tu Propio Haiku', artist: 'MenteCreativa', content: '¡Compartan sus haikus inspirados en la naturaleza! Los mejores serán destacados.', type: 'challenge', audioUrl: null, initialLikes: 88 },
      { id: 25, title: 'Fotografía: Luces Nocturnas', artist: 'OjoCaptor', content: 'Captura de la ciudad dormida. La magia de la noche.', type: 'image', imageUrl: 'https://via.placeholder.com/400x300/607D8B/FFFFFF?text=LucesNocturnas', initialLikes: 110 },
  ];
  
  const MOCK_PROFILE_POSTS = [
      { id: 1001, title: 'Mi Última Composición: Aurora', artist: 'Melodía Lunar', content: 'Una pieza instrumental inspirada en el amanecer andino. Espero les toque el alma.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', initialLikes: 85 },
      { id: 1002, title: 'Poema Corto: Reflejos de Ciudad', artist: 'Melodía Lunar', content: 'Las luces de la ciudad siempre me inspiran. ¿A ustedes también?', type: 'lyrics', audioUrl: null, initialLikes: 42 },
      { id: 1003, title: 'Concepto Visual: Synesthesia', artist: 'Melodía Lunar', content: 'Probando cómo se vería la música si fuera visible. Primer boceto.', type: 'image', imageUrl: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Synesthesia', initialLikes: 60 },
  ];
  
  
  // Simula una llamada a la API para obtener posts del feed principal
  export const fetchHomePosts = async () => {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(MOCK_POSTS_HOME);
          }, 1500); // Simula el retraso de la red
      });
  };
  
  // Simula una llamada a la API para obtener posts de la página de explorar
  export const fetchExplorePosts = async () => {
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(MOCK_POSTS_EXPLORE);
          }, 1200);
      });
  };
  
  // Simula una llamada a la API para obtener posts del perfil de un usuario
  export const fetchProfilePosts = async (userId) => {
      // En un caso real, aquí usarías el userId para filtrar o pedir a la API
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(MOCK_PROFILE_POSTS); // Retorna los posts de Melodía Lunar por simplicidad
          }, 1000);
      });
  };
  
  // Simula una llamada a la API para buscar posts
  export const searchPosts = async (query) => {
      const allPosts = [...MOCK_POSTS_HOME, ...MOCK_POSTS_EXPLORE, ...MOCK_PROFILE_POSTS];
      const filteredPosts = allPosts.filter(post =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.artist.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase())
      );
      return new Promise(resolve => {
          setTimeout(() => {
              resolve(filteredPosts);
          }, 800);
      });
  };