/** @format */

import React from 'react';
import Meal from './Meal';

export default function MealList({ meals = [] }) {
  if (!meals.length) return <div>No Meals Listed.</div>;
  return (
    <>
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </>
  );
}
