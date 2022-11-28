/** @format */

import React from 'react';
import Meal from './Meal';
import { Button } from 'react-bootstrap';
import {
  useMeals,
  BASE_URL_INGREDIENT_SEARCH,
  BASE_URL_MEAL_NAME_SEARCH,
  BASE_URL_ALPHA,
  ALPHA,
} from './MealProvider';
import MealSearch from './MealSearch';
import Browse from './Browse';

export default function MealList() {
  const { meals, removeAllMeals } = useMeals();

  if (!meals.length) {
    return (
      <>
        <div className="meal-empty">Search or browse for meals.</div>
        <MealSearch
          baseURL={BASE_URL_INGREDIENT_SEARCH}
          searchType={'an Ingredient'}
        />
        <MealSearch
          baseURL={BASE_URL_MEAL_NAME_SEARCH}
          searchType={'a Meal Name'}
        />
        <Browse list={ALPHA} url={BASE_URL_ALPHA} />
      </>
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
