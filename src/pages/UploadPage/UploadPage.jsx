import React, { useState } from 'react';
import './UploadPage.css';

function UploadPage({ showToast }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contentType, setContentType] = useState('audio');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!title.trim()) {
      setError('El título de la publicación es obligatorio.');
      showToast('Error: El título es obligatorio.', 'error');
      return;
    }
    if (!description.trim()) {
      setError('La descripción de la publicación es obligatoria.');
      showToast('Error: La descripción es obligatoria.', 'error');
      return;
    }

    if (contentType === 'audio' && !file) {
      setError('Por favor, selecciona un archivo de audio para tu publicación.');
      showToast('Error: Falta el archivo de audio.', 'error');
      return;
    }
    if (contentType === 'image') {
      if (!file && !imageUrl.trim()) {
        setError('Por favor, selecciona un archivo de imagen o ingresa una URL.');
        showToast('Error: Falta archivo o URL para la imagen.', 'error');
        return;
      }
      if (imageUrl.trim() && !imageUrl.trim().startsWith('http')) {
          setError('La URL de la imagen debe ser una URL válida (empezar con http/https).');
          showToast('Error: URL de imagen inválida.', 'error');
          return;
      }
    }

    console.log('Datos a enviar (simulado):', {
      title,
      description,
      contentType,
      fileName: file ? file.name : 'N/A',
      imageUrl: imageUrl || 'N/A'
    });

    showToast('¡Publicación creada exitosamente!', 'success');

    setTitle('');
    setDescription('');
    setContentType('audio');
    setFile(null);
    setImageUrl('');
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError('');
      setImageUrl('');
    }
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setError('');
    setFile(null);
  };

  return (
    <div className="upload-page">
      <main className="upload-content">
        <h2>Subir Contenido a Orion</h2>
        <p>Comparte tu música, letras, imágenes o desafíos con la comunidad.</p>

        <form onSubmit={handleSubmit} className="upload-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="contentType">Tipo de Contenido:</label>
            <select
              id="contentType"
              value={contentType}
              onChange={(e) => {
                setContentType(e.target.value);
                setFile(null);
                setImageUrl('');
                setError('');
              }}
              required
            >
              <option value="audio">Audio (Canción, Beat, Demo)</option>
              <option value="lyrics">Letra / Poema / Guion</option>
              <option value="image">Imagen (Ilustración, Arte Conceptual)</option>
              <option value="challenge">Desafío / Prompt Creativo</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError('');
              }}
              placeholder="Título de tu obra o publicación"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setError('');
              }}
              rows="5"
              placeholder="Describe tu obra, el proceso, o lo que te inspiró..."
              required
            ></textarea>
          </div>

          {(contentType === 'audio' || contentType === 'image') && (
            <div className="form-group">
              <label htmlFor="fileUpload">
                {contentType === 'audio' ? 'Archivo de Audio:' : 'Archivo de Imagen:'}
              </label>
              <input
                type="file"
                id="fileUpload"
                onChange={handleFileChange}
                accept={contentType === 'audio' ? 'audio/*' : 'image/*'}
                required={(contentType === 'audio' && !file) || (contentType === 'image' && !file && !imageUrl.trim())}
              />
              {file && <p className="file-info">Archivo seleccionado: {file.name}</p>}
            </div>
          )}

          {contentType === 'image' && (
            <div className="form-group">
              <label htmlFor="imageUrl">O URL de Imagen (opcional):</label>
              <input
                type="url"
                id="imageUrl"
                value={imageUrl}
                onChange={handleImageUrlChange}
                placeholder="https://ejemplo.com/tu-imagen.jpg"
                required={!file && imageUrl.trim()}
              />
            </div>
          )}

          <button type="submit" className="submit-upload-button">
            Subir Publicación
          </button>
        </form>
      </main>
    </div>
  );
}

export default UploadPage;