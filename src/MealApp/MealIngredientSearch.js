/** @format */

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './MealProvider';

import { BASE_URL_INGREDIENT_SEARCH } from '../utilities';

export default function MealIngredientSearch() {
  const [ingredientProps, resetIngredient] = useInput('');
  const { getMeals } = useMeals();
  const ingredientSubmit = (event) => {
    event.preventDefault();
    getMeals(BASE_URL_INGREDIENT_SEARCH, ingredientProps.value);
    resetIngredient();
  };

  return (
    <form onSubmit={ingredientSubmit}>
      <div className="container meal-search-box">
        <label className="visually-hidden" for="search-input">
          Search by Ingredient
        </label>
        <input
          className="search-control"
          {...ingredientProps}
          type="text"
          placeholder="Enter an Ingredient"
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
