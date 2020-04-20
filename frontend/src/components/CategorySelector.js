import React from 'react';
import '../App.css';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default class CategorySelector extends React.Component {
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

  setPokemons(e) {
    let filters = this.state.filters
    filters.pokemons = e.target.checked
    this.setState({ filters: filters });
    this.props.callbackParent(this.state.filters);
  }

  setItems(e) {
    let filters = this.state.filters
    filters.items = e.target.checked
    this.setState({ filters: filters });
    this.props.callbackParent(this.state.filters);
  }

  render(){
    return (
      <div className="menu">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              onChange={e => this.setPokemons(e)}
              checked={this.state.filters.pokemons}
              value="top"
              control={<Switch color="primary" />}
              label="Pokemons"
              labelPlacement="Pokemons"
            />
            <FormControlLabel
              onChange={e => this.setItems(e)}
              checked={this.state.filters.items}
              value="top"
              control={<Switch color="primary" />}
              label="Items"
              labelPlacement="Items"
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}
