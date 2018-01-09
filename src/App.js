import React, { Component } from 'react';

import './App.css';

import SearchForm from './components/SearchForm';
import CardsRow from './components/CardsRow';

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

  handleAddCity(city) {
    this.setState(prevState => {
      cities: prevState.cities.concat({
        id: Math.random(),
        name: city.name,
        temp: city.temp,
        condition: city.condition
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">React Weather App</h1>
          <SearchForm handleAddCity={this.handleAddCity} />
          <CardsRow cities={this.state.cities} />
        </div>
      </div>
    );
  }
}

export default App;
