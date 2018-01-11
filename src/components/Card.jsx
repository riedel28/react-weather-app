import React from 'react';

const Card = ({ name, temp, condition }) => {
  return (
    <div className="box is-2">
      <h2 className="city-name">{name}</h2>
      <p className="city-temp">{temp}ºC</p>
      <p className="city-weather">{condition}</p>
    </div>
  );
};

export default Card;
