import React, { Component } from "react";

import "./App.css";

import SearchForm from "./components/SearchForm";
import CardsRow from "./components/CardsRow";

import { getWeatherData } from "./api";

class App extends Component {
  state = {
    cities: [],
    isLoading: false,
    notFound: false,
    errorMessage: ""
  };

  onCityDataLoaded = cityData => {
    const alReadyExists = this.state.cities.some(
      city => city.name === cityData.name
    );

    if (alReadyExists) {
      this.setState({
        errorMessage: "This city is already on the list"
      });
    } else {
      this.setState({
        cities: [...this.state.cities, cityData]
      });
    }
  };

  onError = () => {
    this.setState({
      errorMessage: "This city was not found"
    });
  };

  handleAddCity = city => {
    this.setState({ isLoading: true, errorMessage: "" });

    if (city) {
      getWeatherData(city)
        .then(this.onCityDataLoaded)
        .catch(this.onError)
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  handleDeleteCity = id => {
    this.setState(prevState => ({
      cities: prevState.cities.filter(c => c.id !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">React Weather App</h1>
        <div className="container">
          <SearchForm
            handleAddCity={this.handleAddCity}
            cities={this.state.cities}
            isLoading={this.state.isLoading}
          />
          {this.state.errorMessage && (
            <div className="column is-half is-offset-one-quarter">
              <p className=" error-message">{this.state.errorMessage}</p>
            </div>
          )}
          <CardsRow
            cities={this.state.cities}
            handleDeleteCity={this.handleDeleteCity}
          />
        </div>
      </div>
    );
  }
}

export default App;
