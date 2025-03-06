import React from 'react';
import '../styles/character.css';

const CharacterCard = ({ character }) => {
  return (
    <div className="card" key={character.id}>
      <img src={character.image} alt={character.name} />
      <h2 className='character-name'>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Especie: {character.species}</p>
      <p>Género: {character.gender}</p>
    </div>
  );
};

export default CharacterCard;