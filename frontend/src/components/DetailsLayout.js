import React from 'react';
import '../App.css';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

export default class DetailsLayout extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="menu">
        <a href={"/"}>
          <Button
            color="primary"
            startIcon={<ArrowBackIcon/>}
          >
          Return
          </Button>
        </a>
      </div>
    )
  }
}
