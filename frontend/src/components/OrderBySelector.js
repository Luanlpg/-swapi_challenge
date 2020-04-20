import React from 'react';
import '../App.css';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class OrderBySelector extends React.Component {
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

  setOrderBy(e) {
    let filters = this.state.filters
    filters.order_by = e.target.value
    this.setState({ filters: filters });
    this.props.callbackParent(this.state.filters);
  }


  render(){

    return (
      <div className="menu menu-order-by">
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">Order By:</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={this.state.filters.order_by}
            onChange={e => this.setOrderBy(e)}
          >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Name</MenuItem>
            <MenuItem value={2}>Gender</MenuItem>
            <MenuItem value={3}>Weight</MenuItem>
            <MenuItem value={4}>Height</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}
