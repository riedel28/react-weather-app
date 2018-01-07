import React, { Component } from 'react';

import './App.css';

import SearchForm from './components/SearchForm';
import CitiesRow from './components/CitiesRow';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities: [
        {
          name: 'Moscow',
          temp: 20,
          condition: 'Sunny'
        },
        {
          name: 'New York',
          temp: 5,
          condition: 'Rainy'
        }
      ]
    };

    this.handleAddCity = this.handleAddCity.bind(this);
  }

  handleAddCity() {}

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">React Weather App</h1>
          <SearchForm handleAddCity={this.handleAddCity} />
          <CitiesRow cities={this.state.cities} />
        </div>
      </div>
    );
  }
}

export default App;
