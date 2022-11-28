/** @format */

import React, { createContext, useState, useContext } from 'react';

/**
 * Global constants
 * Consider moving to a utility file, but this is only place they are used at
 * the moment.
 */
export const BASE_URL_INGREDIENT_SEARCH =
  'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export const BASE_URL_MEAL_DETAILS =
  'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

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

  async function getDetails(id) {
    await fetch(`${BASE_URL_MEAL_DETAILS}${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setDetails([...data.meals]);
        }
      });
  }

  async function getMeals(param) {
    await fetch(`${BASE_URL_INGREDIENT_SEARCH}${param}`)
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
        getDetails,
        getMeals,
        removeMeal,
        removeAllMeals,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}
