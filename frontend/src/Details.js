import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import DetailsLayout from './components/DetailsLayout';
import PokemonDetailsBox from './components/PokemonDetailsBox';
import ItemDetailsBox from './components/ItemDetailsBox';
import ImgBox from './components/ImgBox';


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

  selectTypeDetail() {
    if (this.state.data.category === 'pokemon'){
      return (<PokemonDetailsBox item={this.state.data}/>)
    } else {
      return (<ItemDetailsBox item={this.state.data}/>)
    }
  }

  render() {
    return  <div>
              <div className="details">
                <div className="imgDetails">
                  <ImgBox item={this.state.data}/>
                </div>
                <div className="boxDetails">
                  {this.selectTypeDetail()}
                </div>
              </div>
              <div className="detailsFixo">
                <DetailsLayout/>
              </div>
            </div>
  }
}

export default Details;
