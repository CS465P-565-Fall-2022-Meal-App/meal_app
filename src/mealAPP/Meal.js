/** @format */

import React from 'react';
import { useMeals } from './MealProvider';

export default function Meal({ idMeal, strMeal, strMealThumb }) {
  const { removeMeal } = useMeals();
  const { getMeal } = useMeals();
  return (
    <section>
      <h1>
        {strMeal} <button onClick={() => removeMeal(idMeal)}>X</button>
      </h1>
      <img src={strMealThumb} alt={strMeal} />
      <button onClick={() => getMeal(idMeal)}>Details</button>
    </section>
  );
}
