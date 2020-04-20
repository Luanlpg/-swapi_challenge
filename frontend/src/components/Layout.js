import React from 'react';
import '../App.css';

import CategorySelector from './CategorySelector';
import OrderBySelector from './OrderBySelector';
import PagSelector from './PagSelector';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      filters: {
              order_by: null,
              page: 1,
              items: false,
              pokemons: true
      }
    }
  }

  onChildChanged(filters) {
        this.setState({filters: filters});
        this.props.callbackParent(this.state.filters)
    }

  render() {
    return (
      <div>
        <CategorySelector filters={this.filters} callbackParent={(filters) => this.onChildChanged(filters)}/>
        <PagSelector filters={this.filters} callbackParent={(filters) => this.onChildChanged(filters)}/>
        <OrderBySelector filters={this.filters} callbackParent={(filters) => this.onChildChanged(filters)}/>
      </div>
    )
  }
}
