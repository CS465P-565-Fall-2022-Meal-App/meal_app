/** @format */

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './MealProvider';

export default function SearchIngredientForm() {
  const [ingredientProps, resetIngredient] = useInput('');
  const { getMeals } = useMeals();
  const submit = (event) => {
    event.preventDefault();
    getMeals(ingredientProps.value);
    resetIngredient();
  };

  return (
    <form className="meal-search-box" onSubmit={submit}>
      <label className="visually-hidden" for="search-input">
        Search by Ingredient
      </label>
      <input
        className="search-control"
        {...ingredientProps}
        type="text"
        placeholder="Enter an ingredient"
        id="search-input"
        required
      />
      <button className="search-btn" type="submit" id="search-btn">
        <FaSearch />
      </button>
    </form>
  );
}
