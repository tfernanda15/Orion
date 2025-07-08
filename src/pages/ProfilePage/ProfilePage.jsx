import React, { useState } from 'react';
import './ProfilePage.css';
import PostCard from '../../components/PostCard/PostCard'; // Importa PostCard

const initialArtistProfile = {
  name: 'Melodía Lunar',
  username: '@melodialunar_oficial',
  bio: 'Compositora, cantante y productora. Explorando los sonidos de la noche y la melancolía. ¡Encuéntrame en el feed!',
  profilePic: 'https://picsum.photos/200/200',
  followers: 1250,
  following: 340,
  // Añade publicaciones del perfil aquí. Serán PostCards también.
  myPosts: [
    { id: 1001, title: 'Mi Última Composición: Aurora', artist: 'Melodía Lunar', content: 'Una pieza instrumental inspirada en el amanecer andino. Espero les toque el alma.', type: 'audio', audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3', initialLikes: 85 },
    { id: 1002, title: 'Poema Corto: Reflejos de Ciudad', artist: 'Melodía Lunar', content: 'Las luces de la ciudad siempre me inspiran. ¿A ustedes también?', type: 'lyrics', audioUrl: null, initialLikes: 42 },
    { id: 1003, title: 'Concepto Visual: Synesthesia', artist: 'Melodía Lunar', content: 'Probando cómo se vería la música si fuera visible. Primer boceto.', type: 'image', imageUrl: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Synesthesia', initialLikes: 60 },
  ],
};

function ProfilePage() {
  const [artistProfile, setArtistProfile] = useState(initialArtistProfile);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Nuevo estado para editar perfil
  const [editedBio, setEditedBio] = useState(initialArtistProfile.bio); // Estado para el bio editado

  const handleFollowToggle = () => {
    if (isFollowing) {
      setArtistProfile(prevProfile => ({ ...prevProfile, followers: prevProfile.followers - 1 }));
      setIsFollowing(false);
      alert(`Has dejado de seguir a ${artistProfile.name}`);
    } else {
      setArtistProfile(prevProfile => ({ ...prevProfile, followers: prevProfile.followers + 1 }));
      setIsFollowing(true);
      alert(`Ahora sigues a ${artistProfile.name}`);
    }
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing); // Cambia el estado de edición
    if (isEditing) { // Si estábamos editando y ahora cerramos
        setArtistProfile(prevProfile => ({ ...prevProfile, bio: editedBio })); // Guarda el bio editado
        alert('Perfil actualizado (simulado)');
    }
  };

  const handleBioChange = (e) => {
    setEditedBio(e.target.value);
  };


  return (
    <div className="profile-page">
      <main className="profile-content">
        <div className="profile-header-section">
          <img src={artistProfile.profilePic} alt="Foto de perfil" className="profile-pic" />
          <div className="profile-info">
            <h2>{artistProfile.name}</h2>
            <p className="username">{artistProfile.username}</p>
            {isEditing ? ( // Muestra un textarea si estamos editando
                <textarea
                    className="profile-bio-textarea"
                    value={editedBio}
                    onChange={handleBioChange}
                    rows="3"
                />
            ) : ( // Si no estamos editando, muestra la biografía normal
                <p className="bio">{artistProfile.bio}</p>
            )}
            <div className="stats">
              <span>**{artistProfile.followers}** Seguidores</span>
              <span>**{artistProfile.following}** Siguiendo</span>
            </div>
            {/* Botones condicionales: si estamos editando, muestra "Guardar", sino "Seguir" o "Editar Perfil" */}
            {isEditing ? (
                <button className="save-button" onClick={handleEditToggle}>Guardar Cambios</button>
            ) : (
                <>
                    <button
                      className={isFollowing ? "unfollow-button" : "follow-button"}
                      onClick={handleFollowToggle}
                    >
                      {isFollowing ? "Siguiendo" : "Seguir"}
                    </button>
                    <button className="edit-profile-button" onClick={handleEditToggle}>
                        Editar Perfil
                    </button>
                </>
            )}
          </div>
        </div>

        <section className="profile-posts-section">
          <h3>Publicaciones de {artistProfile.name}</h3>
          <div className="posts-grid">
            {/* Mapea sobre las publicaciones del perfil del artista */}
            {artistProfile.myPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
            {/* Aquí estaban los posts antiguos, los reemplazamos por los de myPosts */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;