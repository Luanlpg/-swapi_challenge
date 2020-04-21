import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import CardTable from './components/CardTable';
import MainLayout from './components/MainLayout';


class App extends Component {
  constructor() {
    super();
    this.state = {
        data:[]
    }
  }

  componentDidMount() {
    localStorage.setItem("order_by", 1);
    localStorage.setItem("page", 1);
    localStorage.setItem("items", false);
    localStorage.setItem("pokemons", true);
    this.getItems();
  }

  onLoad(){
    this.getItems();
  }

  getItems(){
    axios.get("http://127.0.0.1:5000/api/pokemon", {params: {filters: this.syncFilters() }})
      .then(res => {
        const data = res.data;
        this.setState({ data });
      })
  }

  syncFilters() {
    let filters = {
      order_by: JSON.parse(localStorage.getItem("order_by")),
      page: JSON.parse(localStorage.getItem("page")),
      pokemons: JSON.parse(localStorage.getItem("pokemons")),
      items: JSON.parse(localStorage.getItem("items"))
    };
    return filters
  }

  onChildChanged() {
      this.onLoad();
    }

  render() {
    console.log(this.state);
    return <div>
            <div className="cards">
              <CardTable data={this.state.data}/>
            </div>
            <div className="fixo">
              <MainLayout callbackParent={() => this.onChildChanged()}/>
            </div>
          </div>;
  }
}

export default App;
