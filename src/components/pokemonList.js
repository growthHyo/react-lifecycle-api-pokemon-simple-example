import React, {Component} from 'react'
import {PokemonItem} from './pokemonItem'

export class PokemonList extends Component{
  render(){

    const { pokemons, newClickFunc } = this.props;

    return(
      <div className="article-list">
        {pokemons.map((pokemon, index) =>
          <PokemonItem key={index} {...pokemon.pokemon} onClick={newClickFunc}/>
        )}
      </div>
    )
  }
}
