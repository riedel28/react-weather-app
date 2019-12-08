import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    city: "",
    error: ""
  };

  handleCitySubmit = e => {
    e.preventDefault();

    if (this.state.city === "") {
      this.setState(() => ({ error: "Please enter a city name" }));
      return;
    }

    this.props.handleAddCity(this.state.city);
    this.setState({ city: "" });
  };

  handleChange = e => {
    this.setState({ city: e.target.value, error: "" });
  };

  render() {
    const { isLoading } = this.props;

    return (
      <div className="column is-half is-offset-one-quarter">
        {this.state.error && (
          <p className="error-message">{this.state.error}</p>
        )}
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
                className={`button btn-submit is-info is-large ${
                  isLoading ? "is-loading" : ""
                }`}
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
