/** @format */

import React, { createContext, useState, useContext } from 'react';

const MealContext = createContext();
export const useMeals = () => useContext(MealContext);

export default function MealProvider({ children }) {
  const [meals, setMeals] = useState([]);

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

  const getMeals = (url, param) => {
    const fetchedMeals = [];
    fetch(`${url}${param}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setMeals([...data.meals]);
        }
      });
    console.log('Fetched: ', fetchedMeals);
  };

  const removeMeal = (idMeal) =>
    setMeals(meals.filter((meal) => meal.idMeal !== idMeal));

  const removeAllMeals = () => setMeals([]);

  const showDetails = (id) => {
    //TODO: get meal details by id and return modul
  };

  return (
    <MealContext.Provider
      value={{
        meals,
        addMeal,
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
