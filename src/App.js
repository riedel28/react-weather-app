import React, { Component } from 'react';

import './App.css';

import SearchForm from './components/SearchForm';
import CardsRow from './components/CardsRow';

import { test, apiKey } from './api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities: [
        {
          id: 0,
          name: 'Moscow',
          temp: 20,
          condition: 'Sunny'
        },
        {
          id: 1,
          name: 'New York',
          temp: 5,
          condition: 'Rainy'
        }
      ]
    };

    this.handleAddCity = this.handleAddCity.bind(this);
  }

  handleAddCity(city) {
    if (!city) {
      return 'Please enter a city name';
    }

    const existingCity = this.state.cities.find(c => c.name === city);

    console.log(existingCity);

    if (existingCity) {
      return 'This city name is invalid or already exists';
    }

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric${apiKey}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        const { id, name, main, weather } = data;
        const { temp } = main;
        const [first] = weather;

        this.setState(prevState => ({
          cities: prevState.cities.concat({
            id: id,
            name: name,
            temp: Math.floor(temp),
            condition: first.main
          })
        }));
      })
      .catch(error => {});
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">
            React Weather App - {this.state.cities.length}
          </h1>
          <SearchForm handleAddCity={this.handleAddCity} />
          <CardsRow cities={this.state.cities} />
        </div>
      </div>
    );
  }
}

export default App;
