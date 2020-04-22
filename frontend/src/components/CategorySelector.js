import React from 'react';
import '../App.css';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default class CategorySelector extends React.Component {

  setPokemons(e) {
    if (JSON.parse(localStorage.getItem("items")) === false){
      alert('Impossible operation.')
    } else {
      localStorage.setItem("pokemons", e.target.checked);
      localStorage.setItem("page", 1);
      this.props.callbackParent();
    }
  }

  setItems(e) {
    if (JSON.parse(localStorage.getItem("pokemon")) === false){
      alert('Impossible operation.')
    } else {
      localStorage.setItem("items", e.target.checked);
      localStorage.setItem("page", 1);
      this.props.callbackParent();
    }
  }

  render(){
    return (
      <div className="menu">
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              onChange={e => this.setPokemons(e)}
              checked={JSON.parse(localStorage.getItem("pokemons"))}
              value="top"
              control={<Switch color="primary" />}
              label="Pokemons"
              labelPlacement="Pokemons"
            />
            <FormControlLabel
              onChange={e => this.setItems(e)}
              checked={JSON.parse(localStorage.getItem("items"))}
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
