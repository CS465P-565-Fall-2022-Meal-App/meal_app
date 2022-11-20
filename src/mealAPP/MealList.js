/** @format */

import React from 'react';
import Meal from './Meal';

export default function MealList({ meals = [], onRemoveMeal = (f) => f }) {
  if (!meals.length) return <div>No Meals Listed.</div>;
  return (
    <div className="meal-list">
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} onRemove={onRemoveMeal} />
      ))}
    </div>
  );
}
