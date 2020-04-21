import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import DetailsLayout from './components/DetailsLayout';


class Details extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    }
  }

  componentWillMount(id=this.props.match.params.id) {
    axios.get("http://127.0.0.1:5000/api/pokemon/"+id)
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  render() {
    console.log(this.state.data);
    return  <div>
              <DetailsLayout/>
            </div>
  }
}

export default Details;
