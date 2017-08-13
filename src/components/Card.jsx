import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="box is-2">
        <h2 className="city-name">City</h2>
        <p className="city-temp">20C</p>
        <p className="city-weather">Sunny</p>
      </div>
    );
  }
}

export default Card;
