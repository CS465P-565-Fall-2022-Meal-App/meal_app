/** @format */
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useInput } from '../hooks';
import { useMeals } from './meal-hooks';

export default function SearchMeals({ onClick = (f) => f }) {
  const [ingredientProps, resetIngredients] = useInput('');
  const { fetchMeals } = useMeals();
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`;

  const submit = (event) => {
    event.preventDefault();
    fetchMeals(url, ingredientProps.value);
    resetIngredients();
  };

  return (
    <form onSubmit={submit}>
      <input
        ref={ingredientProps}
        type="text"
        placeholder="Enter ingredient"
        required
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
}
