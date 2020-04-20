import React from 'react';

import PokemonCard from './PokemonCard';

export default class CardTable extends React.Component {
  
  render() {
    return <div>{this.props.data.map((item) => <PokemonCard item={item}/>)}</div>
  }
}
