import React from 'react';

// const onCitySubmit = e => {
//   e.preventDefault();

//   console.log(e.target.value);
// };

const SearchForm = props => {
  return (
    <div className="column is-half is-offset-one-quarter">
      <form onSubmit={props.handleAddCity}>
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
