import React from 'react';

const Card = ({ id, name, temp, condition, handleDeleteCity }) => {
  return (
    <div className="column is-one-third-tablet is-one-quarter-desktop">
      <div className="card">
        <h2 className="card-title">{name}</h2>
        <p className="card-temp">{temp}ºC</p>
        <p className="card-condition">{condition}</p>
        <button
          className="btn-delete"
          onClick={() => {
            handleDeleteCity(id);
          }}
        >
          <span className="icon">
            <i className="far fa-times-circle" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Card;
