import React from 'react';
import '../App.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';


export default class PagSelector extends React.Component {

  setPage(e) {
    localStorage.setItem("page", JSON.parse(localStorage.getItem("page")) + e);
    this.props.callbackParent();
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
        {localStorage.getItem("page")}
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
