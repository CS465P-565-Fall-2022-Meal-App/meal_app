/** @format */

import React from 'react';
import Meal from './Meal';
import { useMeals } from './MealProvider';

export default function MealList() {
  const { meals } = useMeals();

  if (!meals.length) return <div>No Meals Listed. (Search or Browse)</div>;

  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}
