import React from 'react';

const Card = ({
  id, name, temp, condition, handleDeleteCity
}) => {
  return (
    <div className="box is-2">
      <h2 className="city-name">{name}</h2>
      <p className="city-temp">{temp}ºC</p>
      <p className="city-weather">{condition}</p>
      <button
        className="delete"
        onClick={() => {
          handleDeleteCity(id);
        }}
      >
        x
      </button>
    </div>
  );
};

export default Card;
