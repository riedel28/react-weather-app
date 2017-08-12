import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchForm from './components/SearchForm';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">React Weather App</h1>
          <SearchForm />
          <div className="columns">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
