import React, { Component } from 'react';

import './App.css';

import SearchForm from './components/SearchForm';
import CardsRow from './components/CardsRow';

import getWeather from './api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities: JSON.parse(localStorage.getItem('cities'))
    };

    this.handleAddCity = this.handleAddCity.bind(this);
    this.handleDeleteCity = this.handleDeleteCity.bind(this);
    this.handleWeatherInfo = this.handleWeatherInfo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cities.length !== this.state.cities.length) {
      localStorage.setItem('cities', JSON.stringify(this.state.cities));
    }
  }

  handleAddCity(city) {
    if (!city) {
      return 'Please enter a city name';
    }

    const existingCity = this.state.cities.find(c => c.name === city);

    if (existingCity) {
      return 'This city already exists';
    }

    getWeather(city)
      .then(data => this.handleWeatherInfo(data))
      .catch((error) => {});
  }

  handleWeatherInfo(data) {
    const {
      id, name, main, weather
    } = data;
    const { temp } = main;
    const [{ main: condition }] = weather;

    this.setState(prevState => ({
      cities: prevState.cities.concat({
        id,
        name,
        temp: Math.floor(temp),
        condition
      })
    }));
  }

  handleDeleteCity(id) {
    this.setState(prevState => ({
      cities: prevState.cities.filter(c => c.id !== id)
    }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">React Weather App</h1>
        <div className="container">
          <SearchForm handleAddCity={this.handleAddCity} />{' '}
          <CardsRow cities={this.state.cities} handleDeleteCity={this.handleDeleteCity} />
        </div>
      </div>
    );
  }
}

export default App;
