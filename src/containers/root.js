import React, {Component} from 'react'

import {PokemonList} from '../components/pokemonList'
import {Pokemon} from '../components/pokemon'

class Root extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    data: {
      currentPokemon: {},
      pokemons: []
    },
    loadList: false
  }

  componentDidMount() {
    fetch(process.env.BASE_URL).then((response) => {
      return response.json()
    }).then((response) => {

      this.setState({
        data: {
          pokemons: response.pokemon
        },
        loadList: true
      })
    })
  }

  setCurrentPokemon = (pokemonUrl) => {
    var div = document.getElementById('test');
    div.textContent = 'Cargando ...';
    fetch(pokemonUrl).then((response) => {
      return response.json()
    }).then((response) => {
      if(div != null){
        div.textContent = '';
      }
      this.setState((prevState) => ({
        data: {
          ...prevState.data,
          currentPokemon: response
        }
      }))
    })
  }

  render() {
    return (
      <div className="App">
        <a href="https://github.com/growthHyo" target="_blank"><h2 id="header">Pokemon's {process.env.POK_TYP} Type </h2></a>
        <div id="left">
          {this.state.loadList
            ? <div><h3>Pokemon's List</h3><PokemonList pokemons={this.state.data.pokemons} newClickFunc={this.setCurrentPokemon}/>
          </div>: <h2>Capturando a los Pokemon's ...</h2>}
        </div>
        <div id="right">
          <Pokemon {...this.state.data.currentPokemon}/>
        </div>
      </div>
    )
  }
}

export default Root;
