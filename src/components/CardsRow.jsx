import React from 'react';
import Card from './Card';

const CardsRow = ({ cities, handleDeleteCity }) => (
  <div className="cards-row">
    {cities.map(city => (
      <Card
        key={city.id}
        id={city.id}
        name={city.name}
        temp={city.temp}
        condition={city.condition}
        handleDeleteCity={handleDeleteCity}
      />
    ))}
  </div>
);

export default CardsRow;
