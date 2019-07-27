import React, { Component } from 'react';

class SearchForm extends Component {
  state = {
    city: '',
    error: ''
  };

  handleCitySubmit = (e) => {
    e.preventDefault();

    const alReadyExists = this.props.cities.some(c => c.name === this.state.city);

    if (this.state.city === '') {
      this.setState(() => ({ error: 'Please enter a city name' }));
    }

    if (alReadyExists) {
      this.setState(() => ({ error: 'This city already exists on the list' }));
    } else {
      this.props.handleAddCity(this.state.city);
      this.setState({ city: '' });
    }
  };

  handleChange = (e) => {
    this.setState({ city: e.target.value, error: '' });
  };

  render() {
    const { isFetching } = this.props;

    return (
      <div className="column is-half is-offset-one-quarter">
        {this.state.error && <p className="error-message">{this.state.error}</p>}
        <form className="weather-form" onSubmit={this.handleCitySubmit}>
          <div className="field">
            <p className="control ">
              <input
                className="input is-large"
                type="text"
                placeholder="Search for a city"
                value={this.state.city}
                onChange={this.handleChange}
              />
            </p>
            <p className="control">
              <button
                className={`button btn-submit is-info is-large ${isFetching ? 'is-loading' : ''}`}
              >
                Get weather
                <i className="fab fa-telegram-plane" />
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
