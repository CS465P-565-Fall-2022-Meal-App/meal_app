/** @format */

import React from 'react';
import Meal from './Meal';
import { Button } from 'react-bootstrap';
import { useMeals } from './MealProvider';

export default function MealList() {
  const { meals, removeAllMeals } = useMeals();

  if (!meals.length) {
    return (
      <div className="meal-empty">
        Search for a listing of meals by Ingredient
      </div>
    );
  }

  if (!meals[0].idMeal) {
    return (
      <div className="meal-none">No results. Please try another search.</div>
    );
  }

  return (
    <>
      <section className="meal-list mb-3">
        <Button className="mb-3 btn" onClick={() => removeAllMeals()}>
          Reset Search
        </Button>
        <div>
          <div className="card-container">
            {meals.map((meal) => (
              <>
                <Meal key={meal.idMeal} {...meal} />
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
