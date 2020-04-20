import React from 'react';
import '../App.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


export default class PagSelector extends React.Component {
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

  setPage(e) {
    let filters = this.state.filters
    filters.page = this.state.filters.page + e
    this.setState({ filters: filters });
    this.props.callbackParent(filters);
  }

  render() {
    return (
      <div className="menu">
        <Button
          color="primary"
          // className={classes.button}
          startIcon={<ArrowBackIcon/>}
          onClick={() => this.setPage(-1)}
        >
        </Button>
        <Button
          color="primary"
          // className={classes.button}
        >
        {this.state.filters.page}
        </Button>
        <Button
          color="primary"
          // className={classes.button}
          startIcon={<ArrowForwardIcon/>}
          onClick={() => this.setPage(1)}
        >
        </Button>
      </div>
    )
  }
}
