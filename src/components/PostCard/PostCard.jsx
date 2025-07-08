import React, { useState } from 'react'; // Importa useState
import './PostCard.css';

function PostCard({ post }) {
  const [likes, setLikes] = useState(post.initialLikes || 0); // Estado para los likes
  const [hasLiked, setHasLiked] = useState(false); // Estado para saber si el usuario ya le dio like

  const handleCommentClick = () => {
    alert(`Simulando comentario para: "${post.title}"\n¡Aquí iría la sección de comentarios!`);
  };

  const handleLikeClick = () => {
    if (hasLiked) {
      setLikes(prevLikes => prevLikes - 1);
      setHasLiked(false);
    } else {
      setLikes(prevLikes => prevLikes + 1);
      setHasLiked(true);
    }
  };

  return (
    <div className="post-card">
      <h4 className="post-card-title">{post.title}</h4>
      <p className="post-card-artist">Por: {post.artist}</p>
      <p className="post-card-content">{post.content}</p>

      {post.type === 'audio' && (
        <audio controls className="post-card-audio">
          <source src={post.audioUrl} type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      )}

      {post.type === 'image' && post.imageUrl && (
        <img src={post.imageUrl} alt={post.title} className="post-card-image" />
      )}

      <div className="post-card-actions"> {/* Nuevo contenedor para botones */}
        <button
          className={`like-button ${hasLiked ? 'liked' : ''}`} // Clase condicional
          onClick={handleLikeClick}
        >
          👍 {likes}
        </button>
        <button className="post-card-comment-button" onClick={handleCommentClick}>
          Comentar
        </button>
      </div>
    </div>
  );
}

export default PostCard;