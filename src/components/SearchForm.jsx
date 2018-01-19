import React, { Component } from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: 'undefined'
    };

    this.onCitySubmit = this.onCitySubmit.bind(this);
  }

  onCitySubmit(e) {
    e.preventDefault();
    const city = e.target.elements.inputCity.value;
    this.props.handleAddCity(city);
    e.target.elements.inputCity.value = '';
    console.log(e);
  }

  render() {
    return (
      <div className="column is-half is-offset-one-quarter">
        <form onSubmit={this.onCitySubmit}>
          <div className="field is-grouped">
            <p className="control is-expanded">
              <input
                className="input is-medium"
                type="text"
                placeholder="Search for a city"
                name="inputCity"
              />
            </p>
            <p className="control">
              <button className="button is-success is-medium">
                Get weather
              </button>
            </p>
          </div>
          {this.state.error && <p>{this.state.error}</p>}
        </form>
      </div>
    );
  }
}

export default SearchForm;
