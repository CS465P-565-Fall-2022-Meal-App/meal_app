/** @format */

import React, { createContext, useState, useContext } from 'react';

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
