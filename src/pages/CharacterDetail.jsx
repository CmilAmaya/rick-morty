import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { API_URL } from '../config';
import '../styles/character.css';

function CharacterDetail() {
  const { id } = useParams(); 
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`${API_URL}/character/${id}`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  if (!character) return <div>Loading...</div>;

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
      <p>ID: {character.id}</p>
      <p>Creado: {character.created}</p>
    </div>
  );
}

export default CharacterDetail;