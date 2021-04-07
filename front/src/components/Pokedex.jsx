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
    return [
      { id: 25, name: 'Pikachu', type: 'Electric' },
      { id: 143, name: 'Snorlax', type: 'Normal' }
    ]
  }

  componentDidMount() {
    this.setState({ pokemons: this.getPokemons() })
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div>
        <h1>Demonstração sobre Back-end</h1>
        <div>
          {pokemons.map((pokemon) => <PokemonInfo pokeInfo={pokemon} />)}
        </div>
      </div>
    )
  }
}

export default Pokedex;
