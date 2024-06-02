import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ConfigPage = () => {
   const [maxPages, setMaxPages] = useState(localStorage.getItem('maxPages') || 10);
   const [selectedRadio, setSelectedRadio] = useState(localStorage.getItem('selectedTheme') || 'listGroupCheckableRadios1');
   const navigate = useNavigate();

   const handleSave = () => {
      localStorage.setItem('maxPages', maxPages);
      localStorage.setItem('selectedTheme', selectedRadio);
      applyTheme(selectedRadio);
      navigate('/');
   };

   const handleRadioChange = (id) => {
      setSelectedRadio(id);
      localStorage.setItem('selectedTheme', id);
      applyTheme(id);
   };

   const applyTheme = (theme) => {
      const html = document.querySelector('html');
      switch (theme) {
         case 'listGroupCheckableRadios2': // Dark
            html.setAttribute('data-bs-theme', 'dark');
            break;
         case 'listGroupCheckableRadios3': // Light
            html.setAttribute('data-bs-theme', 'light');
            break;
         default: // Auto
            const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            html.setAttribute('data-bs-theme', prefersDarkMode ? 'dark' : 'light');
            break;
      }
   };

   useEffect(() => {
      const savedTheme = localStorage.getItem('selectedTheme');
      applyTheme(savedTheme || 'listGroupCheckableRadios1');
   }, []);

   return (
      <div className="config-page">
         <div className="container px-4 py-4">
            <h2 className='pb-2 border-bottom text-dark-emphasis'>Configurações</h2>

            <h4 className="py-2">Selecione o tema</h4>
            <div className="d-flex flex-column flex-md-row gap-4 py-md-5 justify-content-center">
               <div className="list-group list-group-checkable d-grid gap-2 border-0">
                  <input
                     className="list-group-item-check pe-none"
                     type="radio"
                     name="listGroupCheckableRadios"
                     id="listGroupCheckableRadios1"
                     value=""
                     style={{ display: 'none' }}
                     checked={selectedRadio === 'listGroupCheckableRadios1'}
                     onChange={() => handleRadioChange('listGroupCheckableRadios1')}
                  />
                  <label
                     className={`list-group-item rounded-3 py-3 ${selectedRadio === 'listGroupCheckableRadios1' ? 'active' : ''}`}
                     htmlFor="listGroupCheckableRadios1"
                  >
                     Auto
                     <span className="d-block small opacity-50">O tema será definido de acordo com o sistema</span>
                  </label>

                  <input
                     className="list-group-item-check pe-none"
                     type="radio"
                     name="listGroupCheckableRadios"
                     id="listGroupCheckableRadios2"
                     value=""
                     style={{ display: 'none' }}
                     checked={selectedRadio === 'listGroupCheckableRadios2'}
                     onChange={() => handleRadioChange('listGroupCheckableRadios2')}
                  />
                  <label
                     className={`list-group-item rounded-3 py-3 ${selectedRadio === 'listGroupCheckableRadios2' ? 'active' : ''}`}
                     htmlFor="listGroupCheckableRadios2"
                  >
                     Dark
                     <span className="d-block small opacity-50">Define o tema como escuro</span>
                  </label>

                  <input
                     className="list-group-item-check pe-none"
                     type="radio"
                     name="listGroupCheckableRadios"
                     id="listGroupCheckableRadios3"
                     value=""
                     style={{ display: 'none' }}
                     checked={selectedRadio === 'listGroupCheckableRadios3'}
                     onChange={() => handleRadioChange('listGroupCheckableRadios3')}
                  />
                  <label
                     className={`list-group-item rounded-3 py-3 ${selectedRadio === 'listGroupCheckableRadios3' ? 'active' : ''}`}
                     htmlFor="listGroupCheckableRadios3"
                  >
                     Light
                     <span className="d-block small opacity-50">Define o tema como claro</span>
                  </label>
               </div>
            </div>

            <hr />

            <h4 className="py-2">Cards</h4>
            <span className="d-block small opacity-50 pb-2">Selecione o numero de cards que irá aparecer no app</span>
            <div className="form-floating">
               <select
                  className="form-select"
                  id="maxPages"
                  aria-label="Floating label select example"
                  value={maxPages}
                  onChange={(e) => setMaxPages(e.target.value)}
               >
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
               </select>
               <label htmlFor="maxPages">Selecione o número de cards</label>
            </div>
            <button onClick={handleSave} className="btn btn-primary mt-3">Salvar</button>
            <hr />
         </div>
      </div>
   );
};

export default ConfigPage;