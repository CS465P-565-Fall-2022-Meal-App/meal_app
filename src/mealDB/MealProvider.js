/** @format */

import React, { createContext, useState } from 'react';
import mealData from './meal-data.json';

const MealContext = createContext();

export default function MealProvider({ children }) {
  const [meals, setMeals] = useState(mealData);

  const addMeal = (id, name, thumb) =>
    setMeals([
      ...meals,
      {
        id,
        name,
        thumb,
      },
    ]);

  const fetchMeal = (id) => {
    //TODO: getMeal by id and return details
  };

  const fetchMeals = (url, param) => {
    console.log(param);
    fetch(`${url}${param}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          data.meals.forEach((meal) => {
            addMeal(meal.idMeal, meal.strMeal, meal.strMealThumb);
          });
        }
      });
  };

  const removeMeal = (id) => setMeals(meals.filter((meal) => meal.id !== id));

  const removeAllMeals = () => setMeals([]);

  const showDetails = (id) => {
    //TODO: get meal details by id and return modul
  };

  return (
    <MealContext.Provider value={{ meals, setMeals }}>
      {children}
    </MealContext.Provider>
  );
}
