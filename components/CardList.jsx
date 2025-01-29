import React from 'react';

const CardList = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.image} alt={card.name} />
          <h3>{card.name}</h3>
          <p><strong>Força:</strong> {card.powerstats.strength}</p>
          <p><strong>Inteligência:</strong> {card.powerstats.intelligence}</p>
          <p><strong>Biografia:</strong> {card.biography['full-name']}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;