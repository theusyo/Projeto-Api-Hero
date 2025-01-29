import React from 'react';

const SearchBar = ({ filterCards }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por herói ou universo"
        onChange={(e) => filterCards(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;