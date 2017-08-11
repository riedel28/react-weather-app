import React, { Component } from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div className="column is-half is-offset-one-quarter">
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input is-medium"
              type="text"
              placeholder="Search for a city"
            />
          </p>
          <p className="control">
            <a className="button is-success is-medium">Get weather</a>
          </p>
        </div>
      </div>
    );
  }
}

export default SearchForm;
