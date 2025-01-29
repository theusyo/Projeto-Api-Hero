import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import CardForm from './components/CardForm';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchHero = async (heroName) => {
    try {
      const response = await axios.get(`https://superheroapi.com/api/3df7e3eb23b5b2ae53e1aed960eb29ef/search/${heroName}`);
      
      // Verificar se a resposta contém o campo "results" e se o array não está vazio
      if (response.data && Array.isArray(response.data.results) && response.data.results.length > 0) {
        const hero = response.data.results[0];
        const newCard = {
          name: hero.name,
          image: hero.image.url,
          powerstats: hero.powerstats,
          biography: hero.biography,
        };
        setCards(prevCards => [...prevCards, newCard]);
        setFilteredCards(prevCards => [...prevCards, newCard]);
      } else {
        // Se a resposta não tiver resultados ou algum erro na API
        console.error("Herói não encontrado ou resposta inválida.");
      }
    } catch (error) {
      console.error('Erro ao buscar herói:', error);
    }
  };

  const filterCards = (term) => {
    setSearchTerm(term);
    const filtered = cards.filter(
      (card) =>
        card.name.toLowerCase().includes(term.toLowerCase()) ||
        card.biography.publisher.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCards(filtered);
  };

  useEffect(() => {
    if (searchTerm) {
      filterCards(searchTerm);
    } else {
      setFilteredCards(cards);
    }
  }, [searchTerm, cards]);

  return (
    <div className="container">
      <h1>Cartas de Super-heróis</h1>
      <CardForm fetchHero={fetchHero} />
      <SearchBar filterCards={filterCards} />
      <CardList cards={filteredCards} />
    </div>
  );
};

export default App;