import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfigPage = () => {
  const [maxPages, setMaxPages] = useState(localStorage.getItem('maxPages') || 10);
  const navigate = useNavigate();

  const handleSave = () => {
    localStorage.setItem('maxPages', maxPages);
    navigate('/'); // Navegue de volta para a página principal
  };

  return (
    <div className="config-page">
      <h2>Configurações da API</h2>
      <div className="form-group">
        <label htmlFor="maxPages">Número de Páginas:</label>
        <input
          type="number"
          id="maxPages"
          value={maxPages}
          onChange={(e) => setMaxPages(e.target.value)}
          className="form-control"
        />
      </div>
      <button onClick={handleSave} className="btn btn-primary">
        Salvar
      </button>
    </div>
  );
};

export default ConfigPage;