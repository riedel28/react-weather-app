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

    // console.log(getWeather(city));

    const weatherInfo = getWeather(city);

    weatherInfo
      .then((data) => {
        const {
          id, name, main, weather
        } = data;
        const { temp } = main;
        const [first] = weather;

        this.setState(prevState => ({
          cities: prevState.cities.concat({
            id,
            name,
            temp: Math.floor(temp),
            condition: first.main
          })
        }));
      })
      .catch(error => console.log(error));
  }

  handleDeleteCity(id) {
    this.setState(prevState => ({
      cities: prevState.cities.filter(c => c.id !== id)
    }));
  }

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <div className="container">
          <h1 className="title">
            React Weather <span>App</span> - {this.state.cities.length}
          </h1>
          <SearchForm handleAddCity={this.handleAddCity} />
          <CardsRow cities={this.state.cities} handleDeleteCity={this.handleDeleteCity} />
        </div>
      </div>
    );
  }
}

export default App;
