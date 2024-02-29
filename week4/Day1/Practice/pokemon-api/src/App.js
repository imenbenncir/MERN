import React, { useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState ([]);
  const fetechpokemon = () => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response =>{
        return response.json()})
      .then(response => {
        console.log(response);
        setPokemon(response.results)
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={fetechpokemon}> Fetech Pokemon </button>
      <ul>
        {pokemon.map((Pokem, index) => (
          <li key={index}>{Pokem.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
