import React from 'react';

const PokemonInfo = ({pokeInfo}) => {
  const { id, name, type } = pokeInfo;
  return (
    <div>
      <p>{id} - {name} - {type}</p>
    </div>
  )
}

export default PokemonInfo;
