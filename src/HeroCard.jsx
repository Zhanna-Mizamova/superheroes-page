import React from 'react';

const HeroCard = ({ hero, onClick }) => {
  return (
    <div 
      className="hero-card" 
      style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', cursor: 'pointer' }}
      onClick={() => onClick(hero)}
    >
      <h2>{hero.name}</h2>
    </div>
  );
};

export default HeroCard;
