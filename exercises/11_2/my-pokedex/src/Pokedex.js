import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends Component {
  render() {
    return (
      data.map(pokemonData => (
      <Pokemon 
        key={pokemonData.id} 
        name={pokemonData.name} 
        type={pokemonData.type} 
        averageWeight={pokemonData.averageWeight} 
        image={pokemonData.image} />
      ))
    )
  }
}

export default Pokedex;
