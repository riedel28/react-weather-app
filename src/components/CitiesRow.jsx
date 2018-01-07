import React from 'react';
import Card from './Card';

const CitiesRow = props => {
  const { cities } = props;
  // const { name, temp } = props.cities;

  console.log(cities);

  return (
    <div className="columns">
      {cities.map(city => (
        <Card
          key={Math.random()}
          name={city.name}
          temp={city.temp}
          condition={city.condition}
        />
      ))}
    </div>
  );
};

export default CitiesRow;
