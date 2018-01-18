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
    const apiKey = '&APPID=e027ff558bf5bf1e94c43dc79604934e';

    const test = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric${apiKey}`;

    // const url = `api.openweathermap.org/data/2.5/weather?q=${city},uk${apiKey}`;

    fetch(test)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        const { name, main, weather } = data;

        this.setState(prevState => ({
          cities: prevState.cities.concat({
            name: name,
            temp: Math.floor(main.temp),
            condition: weather[0].description
          })
        }));
      });
  }

  render() {
    // console.log(this.state);
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
