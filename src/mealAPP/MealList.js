/** @format */

import React from 'react';
import { Button } from 'react-bootstrap';
import Meal from './Meal';
import { useMeals } from './MealProvider';

export default function MealList() {
  const { meals } = useMeals();
  const { removeAllMeals } = useMeals();

  if (!meals.length)
    return <div>Search for a listing of meals by Ingredient</div>;

  if (!meals[0].idMeal) {
    return (
      <div className="warning">No results. Please try another search.</div>
    );
  }

  return (
    <section className="meal-list">
      <Button onClick={() => removeAllMeals()}>Clear List</Button>
      {meals.map((meal) => (
        <Meal key={meal.idMeal} {...meal} />
      ))}
    </section>
  );
}
