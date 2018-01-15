import React from 'react';

// const onCitySubmit = e => {
//   e.preventDefault();

//   const city = e.target.elements.inputCity.value;
// };

const SearchForm = props => {
  return (
    <div className="column is-half is-offset-one-quarter">
      <form
        onSubmit={e => {
          e.preventDefault();
          const city = e.target.elements.inputCity.value;
          props.handleAddCity(city);
          e.target.elements.inputCity.value = '';
          console.log(e);
        }}
      >
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input
              className="input is-medium"
              type="text"
              placeholder="Search for a city"
              name="inputCity"
            />
          </p>
          <p className="control">
            <button className="button is-success is-medium">Get weather</button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
