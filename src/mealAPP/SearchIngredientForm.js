/** @format */

import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './MealProvider';

export default function SearchIngredientForm() {
  const [ingredientProps, resetIngredient] = useInput('');
  const { getMeals } = useMeals();

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`;

  const submit = (event) => {
    event.preventDefault();
    getMeals(url, ingredientProps.value);
    resetIngredient();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...ingredientProps}
        type="text"
        placeholder="enter an ingredient"
        required
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
}
