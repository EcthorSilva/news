import React, { useState, useEffect } from 'react';
import './App.css';
import { Header, Card } from './components';
import withTheme from './withTheme';

const App = () => {
   const [loading, setLoading] = useState(true);
   const [cards, setCards] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const maxPages = localStorage.getItem('maxPages') || 10;
            const response = await fetch(`http://localhost:3005?maxPages=${maxPages}`);
            if (!response.ok) {
               throw new Error('Failed to fetch');
            }
            const data = await response.json();
            setCards(data);
            setLoading(false);
         } catch (error) {
            console.error('Erro ao carregar os dados da API:', error.message);
            setLoading(false);
         }
      };

      fetchData();
   }, []);

   return (
      <div className="App">
         <Header />

         {loading ? (
            <div className="d-flex justify-content-center align-content-center">
               <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
               </div>
            </div>
         ) : (
            <div className="cards">
               {cards.map((card, index) => (
                  <Card
                     key={index}
                     title={card.title}
                     link={card.link}
                     magnetLink={card.magnetLink}
                     postDate={card.postDate}
                     imageUrl={card.imageLink}
                  />
               ))}
            </div>
         )}
      </div>
   );
};

export default withTheme(App);