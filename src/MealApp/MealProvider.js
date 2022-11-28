/** @format */

import React, { createContext, useState, useContext } from 'react';

/**
 * Global constants
 * Consider moving to a utility file, but this is only place they are used at
 * the moment.
 */
export const BASE_URL_INGREDIENT_SEARCH =
  'https://www.themealdb.com/api/json/v2/9973533/filter.php?i=';
export const BASE_URL_MEAL_DETAILS =
  'https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=';
export const BASE_URL_MEAL_NAME_SEARCH =
  'https://www.themealdb.com/api/json/v2/9973533/search.php?s=';

const MealContext = createContext();
export const useMeals = () => useContext(MealContext);

export default function MealProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [details, setDetails] = useState([]);
  const [fetchParam, setFetchParam] = useState('');
  const [fetchStatus, setFetchStatus] = useState('waiting');

  const addMeal = (id, name, thumb) => {
    console.log(id, name);
    setMeals([
      ...meals,
      {
        idMeal: id,
        strMeal: name,
        strMealThumb: thumb,
      },
    ]);
  };

  async function getMeals(base, param) {
    await fetch(`${base}${param}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals([...data.meals]);
        } else {
          setMeals([{ mealID: 0, strMeal: 'None Found', strMealThumb: '' }]);
        }
      });
  }

  const removeMeal = (idMeal) =>
    setMeals(meals.filter((meal) => meal.idMeal !== idMeal));

  const removeAllMeals = () => setMeals([]);

  return (
    <MealContext.Provider
      value={{
        BASE_URL_INGREDIENT_SEARCH,
        BASE_URL_MEAL_DETAILS,
        meals,
        setMeals,
        details,
        setDetails,
        fetchParam,
        fetchStatus,
        setFetchStatus,
        addMeal,
        setFetchParam,

        getMeals,
        removeMeal,
        removeAllMeals,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}
