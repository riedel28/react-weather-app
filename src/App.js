import React, { Component } from 'react';

import './App.css';

import SearchForm from './components/SearchForm';
import CardsRow from './components/CardsRow';

import getWeather from './api';

class App extends Component {
  state = {
    cities: []
  };

  handleAddCity = (city) => {
    if (city) {
      getWeather(city)
        .then(data => this.handleWeatherInfo(data))
        .catch(() => {});
    }
  };

  handleWeatherInfo = (data) => {
    const {
      id, name, main, weather
    } = data;
    const { temp } = main;
    const [{ main: condition }] = weather;

    this.setState(prevState => ({
      cities: prevState.cities.concat({
        id,
        name,
        temp: Math.round(temp),
        condition
      })
    }));
  };

  handleDeleteCity = (id) => {
    this.setState(prevState => ({
      cities: prevState.cities.filter(c => c.id !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">React Weather App</h1>
        <div className="container">
          <SearchForm handleAddCity={this.handleAddCity} cities={this.state.cities} />
          <CardsRow cities={this.state.cities} handleDeleteCity={this.handleDeleteCity} />
        </div>
      </div>
    );
  }
}

export default App;
