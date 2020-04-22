import React from 'react';
import '../App.css';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';


export default class PagSelector extends React.Component {

  setPage(e) {
    if (JSON.parse(localStorage.getItem("page")) > 1 | e > 0){
      localStorage.setItem("page", JSON.parse(localStorage.getItem("page")) + e);
      this.props.callbackParent();
    } else {
      alert('Impossible operation.')
    }
  }

  showArrow() {
    if (JSON.parse(localStorage.getItem("page")) > 1){
      return (
        <Button
          color="primary"
          startIcon={<ArrowBackIcon/>}
          onClick={() => this.setPage(-1)}
        >
        </Button>)
    } else {
      return (<Button color="primary">      </Button>)
    }
  }

  render() {
    return (
      <div className="menu">
        {this.showArrow()}
        <Button color="primary">
          {localStorage.getItem("page")}
        </Button>
        <Button
          color="primary"
          startIcon={<ArrowForwardIcon/>}
          onClick={() => this.setPage(1)}
        >
        </Button>
      </div>
    )
  }
}
