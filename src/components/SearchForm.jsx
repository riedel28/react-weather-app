import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };

    this.onCitySubmit = this.onCitySubmit.bind(this);
  }

  onCitySubmit(e) {
    e.preventDefault();
    const city = e.target.elements.inputCity.value;
    const error = this.props.handleAddCity(city);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.inputCity.value = '';
    }
  }

  render() {
    return (
      <div className="column is-half is-offset-one-quarter">
        <form className="weather-form" onSubmit={this.onCitySubmit}>
          {this.state.error && <p className="error-message">{this.state.error}</p>}
          <div className="field">
            <p className="control ">
              <input
                className="input is-large"
                type="text"
                placeholder="Search for a city"
                name="inputCity"
              />
            </p>
            <p className="control">
              <button className="button btn-submit is-info is-large">
                Get weather<i className="fab fa-telegram-plane" />
              </button>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
