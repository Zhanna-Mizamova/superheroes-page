import React, { useState } from 'react';


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


const HeroDetails = ({ hero }) => {
  return (
    <div 
      className="hero-details" 
      style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
    >
      <img 
        src={hero.image} 
        alt={hero.name} 
        style={{ width: '100%', height: 'auto', borderRadius: '5px' }} 
      />
      <h2>{hero.name}</h2>
      <p><strong>Characteristics:</strong> {hero.characteristics}</p>
      <p>{hero.description}</p>
    </div>
  );
};


const App = () => {
  const heroes = [
    {
      name: 'Spider-Man',
      image: 'https://upload.wikimedia.org/wikipedia/ru/thumb/8/81/Spider-Man_Marvel.jpg/640px-Spider-Man_Marvel.jpg',
      characteristics: 'Agile, Strong, Spider-Sense',
      description: 'Spider-Man is a superhero who can climb walls and swing between buildings using webs.'
    },
    {
      name: 'Wonder Woman',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXX3tHfEY_wm5JN6PSiypMy3Wd0W12r9ISw&s',
      characteristics: 'Strong, Fast, Skilled in Combat',
      description: 'Wonder Woman is a warrior princess of the Amazons with superhuman strength and combat skills.'
    },
    {
      name: 'Iron Man',
      image: 'https://www.vokrug.tv/pic/person/2/2/d/b/22db573c1118bc091c4267e15258d8ce.jpeg',
      characteristics: 'Intelligent, Resourceful, Flying Suit',
      description: 'Iron Man uses his advanced suit of armor to protect the world as a high-tech hero.'
    }
  ];

  const [selectedHero, setSelectedHero] = useState(null);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Superheroes</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {heroes.map((hero, index) => (
          <HeroCard key={index} hero={hero} onClick={setSelectedHero} />
        ))}
      </div>
      {selectedHero && <HeroDetails hero={selectedHero} />}
    </div>
  );
};

export default App;
