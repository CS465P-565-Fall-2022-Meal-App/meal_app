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
