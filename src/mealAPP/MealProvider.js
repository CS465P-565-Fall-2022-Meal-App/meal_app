/** @format */

import React, { createContext, useState, useContext } from 'react';
import Fetch from './Fetch';

/**
 * Global constants
 * Consider moving to a utility file, but this is only place they are used at
 * the moment.
 */
export const BASE_URL_INGREDIENT_SEARCH =
  'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
export const BASE_URL_MEAL_DETAILS =
  'www.themealdb.com/api/json/v1/1/lookup.php?i=';

const MealContext = createContext();
export const useMeals = () => useContext(MealContext);

export default function MealProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState([]);
  const [fetchParam, setFetchParam] = useState('');

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

  const getMeal = (id) => {
    //TODO: getMeal by id and return details
  };

  const getMeals = (param) => {
    let counter = 0;
    fetch(`${BASE_URL_INGREDIENT_SEARCH}${param}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          console.log('fetch counter: ', counter++);
          setMeals([...data.meals]);
        } else {
          setMeals([{ mealID: 0, strMeal: 'None Found', strMealThumb: '' }]);
        }
      });
  };

  const removeMeal = (idMeal) =>
    setMeals(meals.filter((meal) => meal.idMeal !== idMeal));

  const removeAllMeals = () => setMeals([]);

  const fetchDetail = (id) => {
    console.log('Fetching...');
    fetch(`${BASE_URL_MEAL_DETAILS}${id}`)
      .then((response) => {
        console.log('got response');
        return response.json();
      })
      .then((data) => {
        if (data.meals) {
          console.log('got data');
          showDetails([...data.meals]);
        }
      });
  };

  const showDetails = (mealsData) => {
    //TODO: get meal details and return modul
    console.log('Meal Data: ', mealsData);
  };

  return (
    <MealContext.Provider
      value={{
        BASE_URL_INGREDIENT_SEARCH,
        BASE_URL_MEAL_DETAILS,
        meals,
        setMeals,
        mealDetails,
        setMealDetails,
        fetchParam,
        addMeal,
        setFetchParam,
        getMeal,
        getMeals,
        removeMeal,
        removeAllMeals,
        fetchDetail,
        showDetails,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}
