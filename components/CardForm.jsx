import React, { useState } from 'react';

const CardForm = ({ fetchHero }) => {
  const [heroName, setHeroName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchHero(heroName);
    setHeroName('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
          placeholder="Digite o nome do herói"
          required
        />
        <button type="submit">Adicionar Herói</button>
      </form>
    </div>
  );
};

export default CardForm;