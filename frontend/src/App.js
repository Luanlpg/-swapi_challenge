import React, { Component } from 'react';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';

import CardTable from './components/CardTable';
import Layout from './components/Layout';


class App extends Component {
  constructor() {
    super();
    this.state = {
        data:[],
        filters: {
                order_by: null,
                page: 1,
                items: false,
                pokemons: true
        }
    }
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:5000/api/pokemon", {params: this.state.filters})
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  onChildChanged(filters) {
        this.setState({filters: filters});
        this.componentDidMount()
    }

  render() {
    console.log(this.state);
    return <div>
            <div className="cards">
              <CardTable data={this.state.data}/>
            </div>
            <div className="fixo">
              <Layout callbackParent={(filters) => this.onChildChanged(filters)}/>
            </div>
          </div>;
  }
}

export default App;
