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
export const BASE_URL_ALPHA =
  'https://www.themealdb.com/api/json/v2/9973533/search.php?f=';
export const BASE_URL_CATEGORY =
  'https://www.themealdb.com/api/json/v2/9973533/filter.php?c=';
export const BASE_URL_AREA =
  'https://www.themealdb.com/api/json/v2/9973533/filter.php?a=';
export const LIST_CATERGORIES_URL =
  'https://www.themealdb.com/api/json/v2/9973533/list.php?c=list';
export const LIST_AREAS_URL =
  'https://www.themealdb.com/api/json/v2/9973533/list.php?a=list';

const MealContext = createContext();
export const useMeals = () => useContext(MealContext);

export default function MealProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [details, setDetails] = useState([]);
  const [categories, setCategories] = useState([]);
  const [areas, setAreas] = useState([]);

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
      })
      .catch((error) => console.log(error));
  }

  async function getList(url, setType) {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setType([...data.meals]);
        }
      })
      .catch((error) => console.log(error));
  }

  const removeMeal = (idMeal) =>
    setMeals(meals.filter((meal) => meal.idMeal !== idMeal));

  const removeAllMeals = () => setMeals([]);

  return (
    <MealContext.Provider
      value={{
        meals,
        setMeals,
        details,
        setDetails,
        categories,
        setCategories,
        areas,
        setAreas,
        addMeal,
        getMeals,
        getList,
        removeMeal,
        removeAllMeals,
      }}
    >
      {children}
    </MealContext.Provider>
  );
}

export const ALPHA = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
