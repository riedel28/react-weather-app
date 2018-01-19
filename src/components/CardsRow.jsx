import React from 'react';
import Card from './Card';

const CardsRow = ({ cities }) => {
  return (
    <div className="columns">
      {cities.map(city => (
        <Card
          key={city.id}
          name={city.name}
          temp={city.temp}
          condition={city.condition}
        />
      ))}
    </div>
  );
};

export default CardsRow;
