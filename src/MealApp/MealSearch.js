/** @format */

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './MealProvider';

export default function MealSearch({ baseURL, searchType }) {
  const [searchProps, resetSearch] = useInput('');
  const { getMeals } = useMeals();
  const searchSubmit = (event) => {
    event.preventDefault();
    getMeals(baseURL, searchProps.value);
    resetSearch();
  };

  return (
    <form onSubmit={searchSubmit}>
      <div className="container meal-search-box">
        <label className="visually-hidden" for="search-input">
          Search by {searchType}
        </label>
        <input
          className="search-control"
          {...searchProps}
          type="text"
          placeholder={`Enter ${searchType}`}
          id="search-input"
          required
        />
        <button type="submit" className="search-btn" id="search-btn">
          <FaSearch className="fas fa-search" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
