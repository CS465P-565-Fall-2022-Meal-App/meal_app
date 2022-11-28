/** @format */

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './MealProvider';

export default function MealIngredientSearch() {
  const [ingredientProps, resetIngredient] = useInput('');
  const { getMeals } = useMeals();
  const ingredientSubmit = (event) => {
    event.preventDefault();
    getMeals(ingredientProps.value);
    resetIngredient();
  };

  return (
    <form onSubmit={ingredientSubmit}>
      <div className="my-3 container">
        <label className="visually-hidden">Search by Ingredient</label>
        <input
          className="search-input"
          {...ingredientProps}
          type="text"
          placeholder="Enter an Ingredient"
          required
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}
