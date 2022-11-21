/** @format */

import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useMeals } from './MealProvider';

export default function Meal({ idMeal, strMeal, strMealThumb }) {
  const { removeMeal } = useMeals();
  return (
    <section>
      <h1>{strMeal} </h1>
      <img src={strMealThumb} alt={strMeal} width="50px" />
      <button onClick={() => removeMeal(idMeal)}>
        <FaTrash />
      </button>
    </section>
  );
}
