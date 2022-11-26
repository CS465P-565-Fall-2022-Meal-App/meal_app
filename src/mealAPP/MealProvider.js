/** @format */

import React, { createContext, useState, useContext } from 'react';

const MealContext = createContext();
export const useMeals = () => useContext(MealContext);

export default function MealProvider({ children }) {
  const BASE_URL_INGREDIENT_SEARCH =
    'https://www.themealdb.com/api/json/v1/1/filter.php?i=`';
  const BASE_URL_MEAL_DETAILS = '';
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
    fetch(`${BASE_URL_INGREDIENT_SEARCH}${param}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals([...data.meals]);
        }
      });
  };

  const removeMeal = (idMeal) =>
    setMeals(meals.filter((meal) => meal.idMeal !== idMeal));

  const removeAllMeals = () => setMeals([]);

  const showDetails = (id) => {
    //TODO: get meal details by id and return modul
    console.log(id);
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
        showDetails,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}
