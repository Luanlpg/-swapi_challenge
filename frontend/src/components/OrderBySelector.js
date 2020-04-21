import React from 'react';
import '../App.css';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export default class OrderBySelector extends React.Component {

  setOrderBy(e) {
    localStorage.setItem("order_by", e.target.value);
    localStorage.setItem("page", 1);
    this.props.callbackParent();
  }

  render(){

    return (
      <div className="menu menu-order-by">
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">Order By:</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={JSON.parse(localStorage.getItem("order_by"))}
            onChange={e => this.setOrderBy(e)}
          >
            <MenuItem value={1}>Name</MenuItem>
            <MenuItem value={2}>Weight</MenuItem>
            <MenuItem value={3}>Height</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }
}
