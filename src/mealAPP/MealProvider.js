/** @format */

import React, { createContext, useState, useContext } from 'react';
import mealData from './meal-data.json';
import { v4 } from 'uuid';

const MealContext = createContext();
export const useMeals = () => useContext(MealContext);

export default function MealProvider({ children }) {
  const [meals, setMeals] = useState(mealData);

  const addMeal = (id, name, thumb) => {
    setMeals([
      ...meals,
      {
        idMeal: id,
        strMeal: name,
        strMealThumb: thumb,
      },
    ]);
  };
  /*
  const getMeal = (id) => {
    //TODO: getMeal by id and return details
  };
*/

  const getMeals = (url, param) => {
    const fetchMeals = [];
    console.log('In getMeals:', param);
    fetch(`${url}${param}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          console.log(data.meals);
          data.meals.forEach((meal) => {
            const idMeal = meal.idMeal;
            const strMeal = meal.strMeal;
            const strMealThumb = meal.strMealThumb;

            addMeal(idMeal, strMeal, strMealThumb);
          });
        }
      });
  };

  const removeMeal = (idMeal) =>
    setMeals(meals.filter((meal) => meal.idMeal !== idMeal));
  /*
  const removeAllMeals = () => setMeals([]);

  const showDetails = (id) => {
    //TODO: get meal details by id and return modul
  };
*/
  return (
    <MealContext.Provider
      value={{
        meals,
        addMeal,
        // getMeal,
        getMeals,
        removeMeal,
        //  removeAllMeals,
        //  showDetails,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}
