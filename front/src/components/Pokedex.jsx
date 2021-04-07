import React from 'react';
import PokemonInfo from './PokemonInfo';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [] }
    this.getPokemons = this.getPokemons.bind(this);
  }

  getPokemons() {
    //fazer fetch no lugar desse retorno aqui
    const url = 'http://127.0.0.1:3001/pokemons';
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ pokemons: data.pokemons })
      })
  }

  componentDidMount() {
    this.getPokemons();
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        <h1>Demonstração sobre Back-end</h1>
        <div>
          {pokemons.map((pokemon) => <PokemonInfo key={pokemon.id} pokeInfo={pokemon} />)}
        </div>
      </div>
    )
  }
}

export default Pokedex;
