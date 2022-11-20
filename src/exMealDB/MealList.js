/** @format */

import React from 'react';
import Meal from './Meal';
import { useMeals } from './meal-hooks';

export default function MealList() {
  const { meals } = useMeals();

  if (!meals.length) return <div>Search or browse for a meal.</div>;

  return (
    <div className="meal-lis">
      {meals.map((meal) => (
        <Meal key={meal.id} {...meal} />
      ))}
    </div>
  );
}
