import React, { useState } from 'react';
import './App.css';
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState ([]);
  const axiospokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response => {
        console.log(response.data.results);
        setPokemon(response.data.results)
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={axiospokemon}> Fetech Pokemon </button>
      <ul>
        {pokemon.map((Pokem, index) => (
          <li key={index}>{Pokem.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;