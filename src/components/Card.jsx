import React from 'react';

const Card = props => {
  // const { name, temp } = props;
  console.log(props);
  return (
    <div className="box is-2">
      <h2 className="city-name">{props.name}</h2>
      <p className="city-temp">{props.temp}</p>
      <p className="city-weather">{props.condition}</p>
    </div>
  );
};

export default Card;
